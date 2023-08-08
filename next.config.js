/** @type {import('next').NextConfig} */


const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        loader: "default",
        domains: ["localhost"],
        remotePatterns: [{ protocol: "https", hostname: "firebasestorage.googleapis.com", },],
    },
}

module.exports = nextConfig;
