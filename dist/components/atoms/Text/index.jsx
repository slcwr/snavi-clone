"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
// components/atoms/Text/index.tsx
const react_1 = __importDefault(require("react"));
const Text = ({ children, variant = 'p', className = '', color = 'primary', weight = 'normal', size = 'base', align = 'left', ...props }) => {
    const Component = variant;
    const baseStyles = 'leading-relaxed';
    const colorStyles = {
        primary: 'text-gray-900',
        secondary: 'text-gray-600',
        error: 'text-red-600',
        success: 'text-green-600',
    };
    const weightStyles = {
        normal: 'font-normal',
        medium: 'font-medium',
        bold: 'font-bold',
    };
    const sizeStyles = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
    };
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    const combinedClassName = `
    ${baseStyles}
    ${colorStyles[color]}
    ${weightStyles[weight]}
    ${sizeStyles[size]}
    ${alignStyles[align]}
    ${className}
  `.trim();
    return (<Component className={combinedClassName} {...props}>
      {children}
    </Component>);
};
exports.Text = Text;
exports.default = exports.Text;
