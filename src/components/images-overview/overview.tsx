"use client";

import { useQuery } from "convex/react";
import Image from "next/image";

import { api } from "convex/_generated/api";

export const ImagesOverview = () => {
	const images = useQuery(api.images.getImages);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
			{images?.map((image) => (
				<Image
					key={image._id}
					src={image.url}
					width={300}
					height={300}
					alt={""}
				/>
			))}
		</div>
	);
};
