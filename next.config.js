/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["image.tmdb.org"]
    },experimental: {
        optimizeFonts: true,
    },
}

module.exports = nextConfig
