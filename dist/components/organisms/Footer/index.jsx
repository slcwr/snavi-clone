"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
// components/organisms/Footer/index.tsx
const Footer_module_scss_1 = __importDefault(require("./Footer.module.scss"));
const Footer = () => {
    return (<footer className={Footer_module_scss_1.default.footer}>
      <div className={Footer_module_scss_1.default.footer__container}>
        <div className={Footer_module_scss_1.default.footer__info}>
          
          <div className={Footer_module_scss_1.default.footer__contact}>
            <h3>NXXファーストコンタクトセンター</h3>
            <p>お問い合わせはコチラ</p>
            <ul>
              <li>Partner's Bridgeサイトの 製品・ソリューションページへ遷移</li>
              <li>→Partner's Bridge未認証の場合、ユーザ/パスワードを入力</li>
              <li>→下にスクロールし、製品のお問合せ</li>
              <li>ビジネスPC/Express</li>
              <li>『ファーストコンタクトセンター(FCC)』をクリック</li>
            </ul>
            <p className={Footer_module_scss_1.default.footer__tel}>
              044-XXX-XXXX
              <span className={Footer_module_scss_1.default.footer__hours}>
                電話受付時間: 9:00～12:00 / 13:00～18:00 月～金曜日(祝日、弊社休日除く)
              </span>
            </p>
          </div>
        </div>
        <div className={Footer_module_scss_1.default.footer__notes}>
            
            <p>※ 表出される金額、製品情報は概算見積りです。</p>
            <p>※ 概算見積りの確認は、ファーストコンタクトセンター宛にご依頼ください。</p>
            <p>※ 本ツールで表示された価格、金額は、予告なく変更（改定）されることがあります。</p>
      </div>
        <div className={Footer_module_scss_1.default.footer__copyright}>
          <p>© NXX Corporation 2006-2024</p>
          <a href="#" className={Footer_module_scss_1.default.footer__link}>個人情報保護ポリシー</a>
        </div>
      </div>
      
    </footer>);
};
exports.Footer = Footer;
