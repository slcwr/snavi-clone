"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloButton = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("./index"));
exports.default = {
    title: 'Button',
    component: index_1.default,
};
const HelloButton = () => <index_1.default>Hello World!</index_1.default>;
exports.HelloButton = HelloButton;
