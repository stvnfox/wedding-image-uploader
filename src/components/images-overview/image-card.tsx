import { useEffect, useState, type FunctionComponent } from "react";

import Image from "next/image";

import { PreviewSlider } from "./preview-slider";

type ImageType = {
	_id: string;
	url: string;
};

type ImageCardProps = {
	url: string;
	id: string;
	images: ImageType[];
};

export const ImageCard: FunctionComponent<ImageCardProps> = ({
	url,
	id,
	images,
}) => {
	const [showPreview, setShowPreview] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);

	const showPreviewSlider = (id: string) => {
		setShowPreview(true);
		setCurrentImage(images.findIndex((image) => image._id === id));
	};

	const closePreviewSlider = () => {
		setShowPreview(false);
		setCurrentImage(0);
	};

	useEffect(() => {
		const html = document.querySelector("html");

		if (html) {
			html.style.overflow = showPreview ? "hidden" : "scroll";
		}
	}, [showPreview]);

	return (
		<>
			<Image
				src={url}
				width={300}
				height={300}
				alt={""}
				className="rounded-md"
				onClick={() => showPreviewSlider(id)}
			/>
			{showPreview && (
				<PreviewSlider
					images={images}
					currentImage={currentImage}
					onClose={closePreviewSlider}
				/>
			)}
		</>
	);
};
