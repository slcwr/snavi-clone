"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
// components/organisms/Header/index.tsx
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
const Header = () => {
    return (<header className={Header_module_scss_1.default.header}>
      <div className={Header_module_scss_1.default.header__container}>
        <h2 className={Header_module_scss_1.default.header__subtitle}>
        ソフトウェア販売支援ポータル
        </h2>
        <h1 className={Header_module_scss_1.default.header__title}>
          SoftNavi
        </h1>
      </div>
    </header>);
};
exports.Header = Header;
