// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { AppDataSource } from '../../../db/data-source';
const { Product } = require('../../db/entities/Product');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route hit'); // 最初のログ
  // データソースが初期化されていない場合は初期化
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  console.log('Query params:', req.query);
  try {
    const { keyword, modelNumber } = req.query;

    const productRepository = AppDataSource.getRepository(Product);

    // クエリビルダーを使用して検索条件を構築
    const queryBuilder = productRepository.createQueryBuilder('product');

    if (keyword && modelNumber) {
      // キーワードと型番の両方が指定された場合
      queryBuilder.where(
        '(product.productname ILIKE :keyword OR product.productno = :modelNumber)',
        {
          keyword: `%${keyword}%`,
          modelNumber
        }
      );
    } else if (keyword) {
      // キーワードのみの場合
      queryBuilder.where('product.productname ILIKE :keyword', {
        keyword: `%${keyword}%`
      });
    } else if (modelNumber) {
      // 型番のみの場合
      queryBuilder.where('product.productno = :modelNumber', {
        modelNumber
      });
    }

    const products = await queryBuilder.getMany();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: '製品の取得に失敗しました' });
  }
  // リクエストの詳細をログ出力
  console.log({
    method: req.method,
    query: req.query,
    headers: req.headers
  });

}