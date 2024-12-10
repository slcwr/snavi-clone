// src/logger/custom.logger.ts
import { Logger, LoggerService } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export class CustomLogger extends Logger implements LoggerService {
  

  log(message: string) {
    // コンソールとファイルの両方に出力
    console.log(`[LOG] ${message}`);
    this.writeToFile('log', message);
  }

  error(message: string, trace?: string) {
    console.error(`[ERROR] ${message}`);
    this.writeToFile('error', message);
  }

  private writeToFile(level: string, message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level.toUpperCase()}] ${message}\n`;
    
    fs.appendFileSync(
      path.join(__dirname, '..', '..', 'logs', `${level}.log`),
      logMessage
    );
  }
}