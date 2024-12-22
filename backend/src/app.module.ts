import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductController } from './product/product.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GenerateproductModule } from './generateproduct/generateproduct.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule, 
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), GenerateproductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


