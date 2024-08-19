import { Injectable, NotFoundException } from "@nestjs/common";
import { Types } from "mongoose";
import { Sales } from "../schema/sales.schema";
import { CreateSalesDto, UpdateSalesDto } from "../dto/sales.dto";
import { SalesRepo } from "../sales.repo";
import { ElasticSearchService } from "./elastic-search.service";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SalesCreatedEvent } from "../events/sales-created.event";


@Injectable()
export class SalesService {
  constructor(private readonly salesRepo: SalesRepo, private readonly elasticService: ElasticSearchService, private readonly eventEmitter: EventEmitter2,) { }

  newId(): string {
    return new Types.ObjectId().toHexString();
  }

  async create(input: CreateSalesDto) {
    this.elasticService.createIndex('naveen', {
      body: {
        mappings: {
          properties: {
            name: { type: 'text' },
            age: { type: 'integer' },
            createdAt: { type: 'date' },
          },
        },
      },
    })
    const result = await this.salesRepo.create(input);
    this.eventEmitter.emit(
      'sales.created',
      new SalesCreatedEvent(result._id.toString(), result.toObject()),
    );
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