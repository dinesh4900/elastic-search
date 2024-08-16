import { Body, Controller, Param, Post, Put, Delete, Get } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { CreateSalesDto, UpdateSalesDto } from "./dto/sales.dto";
import { Sales } from "./schema/sales.schema";

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Post()
  async create(@Body() createSalesDto: CreateSalesDto): Promise<Sales> {
    return this.salesService.create(createSalesDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSalesDto: UpdateSalesDto): Promise<Sales> {
    return this.salesService.update(id, updateSalesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.salesService.delete(id);
  }

  @Get()
  async findAll(): Promise<Sales[]> {
    return this.salesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Sales> {
    return this.salesService.findOne(id);
  }
}