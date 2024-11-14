                                    // src/database/seeds/initial-data.seed.ts
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
const { GenerateProduct } = require('../../db/entities/GenerateProduct');

export class InitialDataSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const productRepository = dataSource.getRepository(GenerateProduct);

    const geterateproducts = [
      {
        productno: "A-01",
        productname: "製品A",
        description: "Oracleデータベースシステムを監視し、業務停止につながる重大問題からシステムを守ります。",
      },
      {
        productno: "A-02",
        productname: "製品B",
        description: "OSディスクに障害が発生した場合、障害レポートを通知し適切な処置を実行することで業務を安定して継続させるソフトウェア製品です。",
      },
      {
        productno: "A-03",
        productname: "製品C",
        description: "ストレージの状態を監視し、パスの切り離しやクラスタ連携などを自動で行います。",
      },
      {
        productno: "A-04",
        productname: "製品D",
        description: "先進技術と確かな実績で、進化するビジネスを支えるサービス実行基盤。NGNやユビキタス領域、OMCSで培った技術を核に「迅速性」「高速性」「信頼性」に優れた多彩な製品群を提供。",
      },
      {
        productno: "A-05",
        productname: "製品E",
        description: "統合運用管理製品",
      },
    ];

    await productRepository.save(geterateproducts);
  }
}