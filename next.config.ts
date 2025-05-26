import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://canny-mammoth-690.convex.cloud/**"),
			new URL("https://determined-skunk-362.convex.cloud/**"),
		],
	},
};

export default nextConfig;
