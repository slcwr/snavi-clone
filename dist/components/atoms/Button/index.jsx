"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
// デフォルトエクスポートに変更
function Button({ children, variant = 'primary', fullWidth, onClick }) {
    return (<button className={`
        px-4 py-2 rounded
        ${variant === 'primary' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}
        ${fullWidth ? 'w-full' : ''}
      `} onClick={onClick}>
      {children}
    </button>);
}
;
