import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sales, SalesSchema } from './schema/sales.schema';
import { SalesService } from './service/sales.service';
import { SalesRepo } from './sales.repo';
import { SalesController } from './sales.controller';
import { ElasticSearchConnectionModule } from 'libs/elastic-search-connection.module';
import { ElasticSearchService } from './service/elastic-search.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sales.name, schema: SalesSchema }]),
    ElasticSearchConnectionModule
  ],
  providers: [SalesService, SalesRepo, ElasticSearchService],
  controllers: [SalesController]
})
export class SalesModule { }
