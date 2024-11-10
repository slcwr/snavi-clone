"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTemplate = void 0;
// components/templates/HomeTemplate/index.tsx
const Header_1 = require("../../../components/organisms/Header");
const Footer_1 = require("../../../components/organisms/Footer");
//import { SearchSection } from '../../../components/organisms/SerchSection';
//import { ProductList } from '../../../components/organisms/ProductList';
const SearchBar_1 = require("../../molecules/SearchBar");
const ProductSearch_1 = require("../../organisms/ProductSearch");
const ConfigurationSearch_1 = require("../../molecules/SearchForm/ConfigurationSearch");
// components/templates/HomeTemplate/index.tsx
const HomeTemplate_module_scss_1 = __importDefault(require("./HomeTemplate.module.scss"));
const HomeTemplate = ({ products }) => {
    return (<div className={HomeTemplate_module_scss_1.default['home-template']}>
      <Header_1.Header />
      <ConfigurationSearch_1.ConfigurationSearch />
      <main className={HomeTemplate_module_scss_1.default.container}>
        <div className={HomeTemplate_module_scss_1.default['main-content']}>
        
          <div className={HomeTemplate_module_scss_1.default['main-content__sidebar']}>
            <SearchBar_1.Sidebar />
          </div>
          <div className={HomeTemplate_module_scss_1.default['main-content__content']}>
            <ProductSearch_1.ProductSearch />
            
          </div>
        </div>
      </main>
      <Footer_1.Footer />
    </div>);
};
exports.HomeTemplate = HomeTemplate;
