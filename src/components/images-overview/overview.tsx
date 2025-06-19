"use client";

import { useQuery } from "convex/react";

import { api } from "convex/_generated/api";

import { ImageCard } from "./image-card";

export const ImagesOverview = () => {
	const images = useQuery(api.images.getImages);

	const sortedImages = images?.sort(
		(a, b) => b._creationTime - a._creationTime,
	);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-auto">
			{sortedImages?.map((image) => (
				<ImageCard
					key={image._id}
					url={image.url}
					id={image._id}
					images={sortedImages}
				/>
			))}
		</div>
	);
};
