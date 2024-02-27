/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'pixabay.com',
                pathname: '**'
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
