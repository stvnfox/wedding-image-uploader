"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const ImageUpload = () => {
	const [files, setFiles] = useState<File[]>([]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			setFiles([...files]);
		}
	};

	const handleUpload = () => {
		console.log(files);
	};

	return (
		<div className="flex items-end gap-2">
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
			<Button disabled={files.length === 0} onClick={handleUpload}>
				Upload
			</Button>
		</div>
	);
};
