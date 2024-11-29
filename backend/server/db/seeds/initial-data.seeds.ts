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
        description: "OLF/TP,DataAccess/Serverを介してACOSとオープンサーバのリアルタイム連携を実現するための、Java2ランタイムライブラリ",
      },
      {
        productno: "A-06",
        productname: "製品F",
        description: "i-PX7300／i-PX7300V／i-PX7300EX／i-PX7300Wで動作するメインフレームコンピュータ用のOSです。",
      },
      {
        productno: "A-07",
        productname: "製品G",
        description: "AddPointシリーズは、迷惑メール、スパムメール、情報漏えい、私用メールなど、電子メールの利用に潜む課題を解決し、電子メール利用における脅威から企業を守るメールセキュリティ・アプライアンスです。",
      },
      {
        productno: "A-08",
        productname: "製品H",
        description: "Windowsサーバ上でPrintPort for ACOS-4用の帳票を新規作成・メンテナンスする帳票作成ツールです。",
      },
      {
        productno: "A-09",
        productname: "製品I",
        description: "業務特性や運用スケジュールに応じて、CPUリソースの配分が設計でき、高負荷時も基幹業務の安定したレスポンスが確保できます。",
      },
      {
        productno: "A-10",
        productname: "製品J",
        description: "NEC製 新プロセッサ「NOAH-6」を搭載したACOSシリーズ「i-PX9800」で動作するOSです。 ACOS-4/XAでは、通信処理速度の向上や、オープンシステムとの親和性の強化、災害対策の強化などを実施しています。",
      },
      {
        productno: "A-11",
        productname: "製品K",
        description: "ACOS-4/XSはACOSシリーズ「i-PX9800」で動作するOSです。基幹システムを支えるための着実な進化、SoE領域との連携を強化などを実施しています。",
      },
    ];

    await productRepository.save(geterateproducts);
  }
}