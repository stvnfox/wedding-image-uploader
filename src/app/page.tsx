import { ImageUpload } from "@/components/image-upload/image-upload";
import { ImagesOverview } from "@/components/images-overview/overview";

export default function Home() {
	return (
		<div className="grid min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="flex flex-col items-center gap-[32px] sm:items-start">
				<h1 className="font-bold text-4xl">Steven & Laurette</h1>
				<ImageUpload />
				<ImagesOverview />
			</main>
		</div>
	);
}
