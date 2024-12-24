import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  
  @Post('upload/csv')
  @ApiOperation({ summary: 'CSVから製品を一括登録' })
  @ApiResponse({ status: 201, description: '製品が一括登録されました' })
  async uploadCsv(@Body() data: { data: CreateProductDto[] }) {
    try {
      return await this.productService.bulkCreate(data.data);
    } catch (error) {
      throw new HttpException('CSV upload failed', HttpStatus.BAD_REQUEST);
    }
  }


  @Post()
  @ApiOperation({ summary: '製品を作成' })
  @ApiResponse({ status: 201, description: '製品が作成されました' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '製品をidで取得' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '製品を更新' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '製品を削除' })
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  

  @Get()
  @ApiOperation({ summary: '製品を取得・検索' })
  @ApiQuery({ name: 'keyword', required: false })
  @ApiQuery({ name: 'modelNumber', required: false })
  @ApiQuery({ name: 'modelName', required: false })
  async findAll(
    @Query('keyword') keyword?: string,
    @Query('modelNumber') modelNumber?: string,
    @Query('modelName') modelName?: string,
  ) {
    if (!keyword && !modelNumber && !modelName) {
      // パラメータがない場合は全件取得
      return this.productService.findAll();
    }
    // 検索パラメータがある場合は検索を実行
    return this.productService.findAllWithParams({
      keyword,
      modelNumber,
      modelName,
    });
  }

}
