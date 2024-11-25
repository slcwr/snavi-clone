import express from 'express';
import next from 'next';
import cors from 'cors';
import { ExpressDataSource } from './db/express-data-source';
import productRoutes from './server/routes/productRoutes';
import 'reflect-metadata';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;

// データベース接続を初期化してからサーバーを起動
ExpressDataSource.initialize()
  .then(() => {
    console.log("Database connection initialized");
    
    return app.prepare();
  })
  .then(() => {
    const server = express();

    // CORS設定
    server.use(cors({
      origin: process.env.NODE_ENV === 'development'
        ? ['http://localhost:3000']
        : [process.env.PRODUCTION_URL || ''],
      credentials: true
    }));

    // APIルートの設定
    server.use('/api', productRoutes);

    // Next.jsのハンドリング
    server.all('*', (req, res) => {
      return handle(req, res);
    });

    // エラーハンドリングミドルウェア
    server.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
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
  ExpressDataSource.destroy()
    .then(() => {
      console.log('Database connection closed.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error during shutdown:', error);
      process.exit(1);
    });
});