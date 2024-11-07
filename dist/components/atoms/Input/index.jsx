"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
// components/atoms/Input/index.tsx
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
exports.Input = (0, react_1.forwardRef)(({ error = false, helperText, className, fullWidth = false, ...props }, ref) => {
    return (<div className={(0, classnames_1.default)('input-wrapper', fullWidth && 'w-full', className)}>
        <input ref={ref} className={(0, classnames_1.default)('px-4 py-2 border rounded-md outline-none transition-all', 'focus:ring-2 focus:ring-blue-500', error
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-blue-500', fullWidth && 'w-full')} {...props}/>
        {helperText && (<p className={(0, classnames_1.default)('mt-1 text-sm', error ? 'text-red-500' : 'text-gray-500')}>
            {helperText}
          </p>)}
      </div>);
});
exports.Input.displayName = 'Input';
