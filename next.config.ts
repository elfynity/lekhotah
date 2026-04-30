import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lekhotah.devdesign.co.za',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
