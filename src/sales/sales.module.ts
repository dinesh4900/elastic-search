import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sales, SalesSchema } from './schema/sales.schema';
import { SalesService } from './sales.service';
import { SalesRepo } from './sales.repo';
import { SalesController } from './sales.controller';
import { ElasticSearchConnectionModule } from 'libs/elastic-search-connection.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sales.name, schema: SalesSchema }]),
    ElasticSearchConnectionModule
  ],
  providers: [SalesService, SalesRepo],
  controllers: [SalesController]
})
export class SalesModule { }
