"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCard = void 0;
// components/molecules/ProductCard/index.tsx
const Text_1 = require("../../../components/atoms/Text");
const Button_1 = __importDefault(require("../../../components/atoms/Button"));
const ProductCard = ({ product }) => {
    return (<div className="bg-white rounded-lg shadow p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4"/>
      <Text_1.Text variant="h3" className="font-bold mb-2">
        {product.name}
      </Text_1.Text>
      <Text_1.Text className="mb-4">{product.description}</Text_1.Text>
      <Button_1.default variant="outline" fullWidth>
        詳細を見る
      </Button_1.default>
    </div>);
};
exports.ProductCard = ProductCard;
