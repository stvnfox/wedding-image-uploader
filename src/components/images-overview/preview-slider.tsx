import type { FunctionComponent } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type ImageType = {
	_id: string;
	url: string;
};

type PreviewSliderProps = {
	images: ImageType[];
	currentImage: number;
	onClose: () => void;
};

export const PreviewSlider: FunctionComponent<PreviewSliderProps> = ({
	images,
	currentImage,
	onClose,
}) => {
	return (
		<section className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80">
			<Carousel
				className="w-full max-w-2xl rounded-md px-4 md:px-0"
				opts={{ loop: true, align: "center", startIndex: currentImage }}
			>
				<CarouselContent>
					{images.map((image) => (
						<CarouselItem key={image._id}>
							<Image
								src={image.url}
								alt={image.url}
								width={800}
								height={800}
								className="rounded-md"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
				<Button
					onClick={onClose}
					variant="outline"
					className="-top-12 absolute right-4 md:right-0"
				>
					Sluit preview
				</Button>
			</Carousel>
		</section>
	);
};
