import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'devdesign.co.za',
				port: '',
				pathname: '/json/images/**',
			},
		],
	},
};

export default nextConfig;
