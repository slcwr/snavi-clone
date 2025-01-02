// generate-secret.ts
import * as crypto from 'crypto';

// 32バイトのランダムな文字列を生成
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// シークレットキーを生成して表示
const secretKey = generateSecretKey();
console.log('Generated JWT Secret Key:');
console.log(secretKey);
