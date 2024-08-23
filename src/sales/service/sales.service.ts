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

  newId(): string {
    return new Types.ObjectId().toHexString();
  }

  async createESIndex() {
    this.elasticService.createIndex('sales', salesDataMapping)
  }

  async create(input: CreateSalesDto) {
    const result = await this.salesRepo.create(input);
    return result
  }

  async update(id: string, updateUserDto: UpdateSalesDto) {
    const existingUser = await this.salesRepo.update(id, updateUserDto);
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return existingUser;
  }

  async delete(id: string) {
    return this.salesRepo.delete(id);
  }

  async findAll(): Promise<Sales[]> {
    return this.salesRepo.findAll();
  }

  async findOne(id: string): Promise<Sales> {
    return this.salesRepo.findOne(id);
  }
}