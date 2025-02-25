/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    basePath: isProd ? "/portfolio-website" : "",
    assetPrefix: isProd ? "/portfolio-website/" : "",
};

export default nextConfig;
