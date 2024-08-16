import { Injectable, NotFoundException } from "@nestjs/common";
import { Types } from "mongoose";
import { Sales } from "./schema/sales.schema";
import { CreateSalesDto, UpdateSalesDto } from "./dto/sales.dto";
import { SalesRepo } from "./sales.repo";




@Injectable()
export class SalesService {
  constructor(private readonly salesRepo: SalesRepo) { }

  newId(): string {
    return new Types.ObjectId().toHexString();
  }
  async create(input: CreateSalesDto) {
    return await this.salesRepo.create(input);
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