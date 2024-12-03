
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // リライトの設定を追加
  rewrites: async () => {
    return [
      {
        source: '/api/products/:path*',
        destination: 'http://localhost:3001/products/:path*'
      }
    ];
  },
  // TypeORMのブラウザバンドル対策
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
};

module.exports = nextConfig;