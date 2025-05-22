"use client";

import { useState } from "react";

import { api } from "convex/_generated/api";
import { useMutation } from "convex/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export const ImageUpload = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [isUploading, setIsUploading] = useState(false);
	const [successUploading, setSuccessUploading] = useState(false);
	const [errorUploading, setErrorUploading] = useState(false);
	const generateUploadUrl = useMutation(api.images.generateUploadUrl);
	const sendImage = useMutation(api.images.sendImage);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			setFiles([...files]);
		}
	};

	const handleUpload = async () => {
		try {
			// Reset state
			setIsUploading(true);
			setErrorUploading(false);
			setSuccessUploading(false);

			// Generate upload URL
			const postUrl = await generateUploadUrl();

			// Upload each file
			for (const file of files) {
				const result = await fetch(postUrl, {
					method: "POST",
					headers: { "Content-Type": file.type },
					body: file,
				});

				const { storageId } = await result.json();

				await sendImage({ storageId });
			}

			// Reset uploading state
			setIsUploading(false);
			setSuccessUploading(true);
			setFiles([]);
		} catch (error) {
			console.error("Error uploading image: ", error);
			setErrorUploading(true);
		}
	};

	return (
		<>
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
					{isUploading ? <Loader2 className="animate-spin" /> : "Upload"}
				</Button>
			</div>
			{successUploading && (
				<p className="text-green-600 text-sm">Files uploaded successfully!</p>
			)}
			{errorUploading && (
				<p className="text-red-600 text-sm">
					Error uploading files. Please try again.
				</p>
			)}
		</>
	);
};
