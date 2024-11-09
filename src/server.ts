import express from 'express';
import next from 'next';
import { productRoutes } from './routes/productRoutes';
import { AppDataSource } from './db/data-source';
import { useRouter } from 'next/router';
import { SearchParams } from './types/api';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  const router = useRouter();

  // APIルートの設定
  server.use('/api', productRoutes);

  // Next.jsのページハンドリング
  server.get('/products', (req, res, next) => {
    // Express側でのデータ処理
     // クエリパラメータの型安全な取得
  const { keyword, modelNumber } = router.query as SearchParams;
    // 必要な処理を行った後、Next.jsのページにレンダリングを委譲
    return app.render(req, res, '/products', { keyword, modelNumber });
  });

  // その他のルートはNext.jsにハンドリングを委譲
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});