import { v } from "convex/values";

import { mutation } from "./_generated/server";

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
