"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBox = void 0;
// components/molecules/SearchBox/index.tsx
const Input_1 = require("../../../components/atoms/Input");
const Button_1 = __importDefault(require("../../../components/atoms/Button"));
const SearchBox = () => {
    return (<div className="flex gap-2">
      <Input_1.Input placeholder="製品名やキーワードを入力" className="flex-1"/>
      <Button_1.default>検索</Button_1.default>
    </div>);
};
exports.SearchBox = SearchBox;
