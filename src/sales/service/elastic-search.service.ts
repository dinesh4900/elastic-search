import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
@Injectable()
export class ElasticSearchService {
  constructor(private readonly elasticService: ElasticsearchService) { }

  async createIndex(indexName: string, mappings: any) {
    const indexExists = await this.elasticService.indices.exists({
      index: indexName,
    });
    if (!indexExists) {
      this.elasticService.indices.create({ index: indexName, mappings })
    }
  }
  async deleteIndex(indexName: string,) {
    return this.elasticService.indices.delete({ index: indexName });
  }
}