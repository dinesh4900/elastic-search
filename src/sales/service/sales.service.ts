import { Injectable, NotFoundException } from "@nestjs/common";
import { Types } from "mongoose";
import { Sales } from "../schema/sales.schema";
import { CreateSalesDto, UpdateSalesDto } from "../dto/sales.dto";
import { SalesRepo } from "../sales.repo";
import { ElasticSearchService } from "./elastic-search.service";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { salesDataMapping } from "libs/mapping";
import { salesData } from "src/data/sales";


@Injectable()
export class SalesService {
  constructor(private readonly salesRepo: SalesRepo, private readonly elasticService: ElasticSearchService, private readonly eventEmitter: EventEmitter2,) { }

  async createESIndex() {
    this.elasticService.createIndex('sales', salesDataMapping)
  }

  async create(input: CreateSalesDto) {
    const _id = this.salesRepo.newId();
    const currentDate = new Date()
    const result = await this.salesRepo.create(_id, {
      ...input,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    return result
  }
}