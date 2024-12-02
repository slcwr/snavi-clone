
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // リライトの設定を追加
  rewrites: async () => {
    return [
      {
        // Next.jsのクライアントからのリクエストパス
        source: '/api/:path*',
        // Expressサーバーのエンドポイント
        destination: 'http://localhost:3001/api/:path*'
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