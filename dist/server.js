"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const cors_1 = __importDefault(require("cors"));
const express_data_source_1 = require("./db/express-data-source");
const productRoutes_1 = require("./server/routes/productRoutes");
require("reflect-metadata");
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;
// データベース接続を初期化してからサーバーを起動
express_data_source_1.ExpressDataSource.initialize()
    .then(() => {
    console.log("Database connection initialized");
    return app.prepare();
})
    .then(() => {
    const server = (0, express_1.default)();
    // CORS設定
    server.use((0, cors_1.default)({
        origin: process.env.NODE_ENV === 'development'
            ? ['http://localhost:3000']
            : [process.env.PRODUCTION_URL || ''],
        credentials: true
    }));
    // APIルートの設定
    server.use('/api', productRoutes_1.productRoutes);
    // Next.jsのハンドリング
    server.all('*', (req, res) => {
        return handle(req, res);
    });
    // エラーハンドリングミドルウェア
    server.use((err, req, res, next) => {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
    server.listen(port, () => {
        console.log(`> Server ready on http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error('Error during initialization:', error);
    process.exit(1);
});
// グレースフルシャットダウンの処理
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    express_data_source_1.ExpressDataSource.destroy()
        .then(() => {
        console.log('Database connection closed.');
        process.exit(0);
    })
        .catch((error) => {
        console.error('Error during shutdown:', error);
        process.exit(1);
    });
});
