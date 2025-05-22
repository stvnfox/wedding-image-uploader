"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ImageUpload = () => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			console.log(file);
		}
	};

	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="picture">Picture</Label>
			<Input
				id="picture"
				type="file"
				accept="image/*"
				multiple
				onChange={handleFileChange}
			/>
		</div>
	);
};
