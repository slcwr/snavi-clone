// components/organisms/Footer/index.tsx
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__info}>
          
          <div className={styles.footer__contact}>
            <h3>NXXファーストコンタクトセンター</h3>
            <p>お問い合わせはコチラ</p>
            <ul>
              <li>Partner's Bridgeサイトの 製品・ソリューションページへ遷移</li>
              <li>→Partner's Bridge未認証の場合、ユーザ/パスワードを入力</li>
              <li>→下にスクロールし、製品のお問合せ</li>
              <li>ビジネスPC/Express</li>
              <li>『ファーストコンタクトセンター(FCC)』をクリック</li>
            </ul>
            <p className={styles.footer__tel}>
              044-XXX-XXXX
              <span className={styles.footer__hours}>
                電話受付時間: 9:00～12:00 / 13:00～18:00 月～金曜日(祝日、弊社休日除く)
              </span>
            </p>
          </div>
        </div>
        <div className={styles.footer__notes}>
            
            <p>※ 表出される金額、製品情報は概算見積りです。</p>
            <p>※ 概算見積りの確認は、ファーストコンタクトセンター宛にご依頼ください。</p>
            <p>※ 本ツールで表示された価格、金額は、予告なく変更（改定）されることがあります。</p>
      </div>
        <div className={styles.footer__copyright}>
          <p>© NXX Corporation 2006-2024</p>
          <a href="#" className={styles.footer__link}>個人情報保護ポリシー</a>
        </div>
      </div>
      
    </footer>
  );
};