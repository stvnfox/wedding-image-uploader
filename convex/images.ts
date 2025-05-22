import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation({
	handler: async (ctx) => {
		return await ctx.storage.generateUploadUrl();
	},
});

export const sendImage = mutation({
	args: { storageId: v.id("_storage") },
	handler: async (ctx, args) => {
		const result = await ctx.db.insert("images", {
			body: args.storageId,
			format: "image",
		});

		return result;
	},
});

export const getImages = query({
	handler: async (ctx) => {
		const images = await ctx.db.query("images").collect();

		return Promise.all(
			images.map(async (image) => ({
				...image,
				// If the message is an "image" its `body` is an `Id<"_storage">`
				...(image.format === "image"
					? { url: await ctx.storage.getUrl(image.body) }
					: {}),
			})),
		);
	},
});
