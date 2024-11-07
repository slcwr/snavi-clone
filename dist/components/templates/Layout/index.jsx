"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const Layout_module_scss_1 = __importDefault(require("./Layout.module.scss"));
const Layout = ({ children }) => {
    return (<div className={Layout_module_scss_1.default.layout}>
      <header className={Layout_module_scss_1.default.layout__header}>
        <div className="container">
          <h1>ソフトウェア販売支援ポータル!!!</h1>
          <div>SoftNAVI</div>
        </div>
      </header>
      
      <div className={Layout_module_scss_1.default.layout__container}>
        <aside className={Layout_module_scss_1.default.layout__sidebar}>
          <nav className={Layout_module_scss_1.default.layout__sidebar_menu}>
            <ul>
              <li>製品・キーワード検索</li>
              <li>カテゴリから</li>
              <li>型番一括検索</li>
            </ul>
          </nav>
          
          <div className={Layout_module_scss_1.default.layout__sidebar_filter}>
            <h3>表示対象選択</h3>
            <div>
              <p>OS:</p>
              <label>
                <input type="radio" name="os" value="none"/>
                指定なし
              </label>
            </div>
            <div>
              <p>機種:</p>
              <label>
                <input type="radio" name="model" value="none"/>
                指定なし
              </label>
            </div>
          </div>
        </aside>

        <main className={Layout_module_scss_1.default.layout__main}>
          {children}
        </main>
      </div>
    </div>);
};
exports.Layout = Layout;
