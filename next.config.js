/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        typeorm: false,
        pg: false,
        'pg-native': false,
        'reflect-metadata': false,
      };
    }
    return config;
  },
}

module.exports = nextConfig;