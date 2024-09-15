import { Body, Controller, Post } from "@nestjs/common";
import { SalesService } from "./service/sales.service";
import { CreateSalesDto } from "./dto/sales.dto";
import { Sales } from "./schema/sales.schema";

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Post('create-index')
  async createESIndex() {
    return this.salesService.createESIndex();
  }

  @Post()
  async create(@Body() createSalesDto: CreateSalesDto): Promise<Sales> {
    return this.salesService.create(createSalesDto);
  }

  @Post('migrate')
  async migrateData() {
    return this.salesService.migrate();
  }
}