import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { OnEvent } from '@nestjs/event-emitter';
import { SalesCreatedEvent } from '../events/sales-created.event';
@Injectable()
export class ElasticSearchService {
  constructor(private readonly elasticService: ElasticsearchService) { }

  async createIndex(indexName: string, mappings: any) {
    const indexExists = await this.elasticService.indices.exists({
      index: indexName,
    });

    if (!indexExists) {
      this.elasticService.indices.create({ index: indexName })
    }
  }



  @OnEvent('sales.created')
  async handleUserCreatedEvent(event: SalesCreatedEvent) {

    const { _id, ...userDataWithoutId } = event.userData;

    console.log('came here to me', event.id, JSON.stringify(event.userData))
    await this.elasticService.index({
      index: 'naveen',
      id: _id.toString(),
      body: userDataWithoutId,
    });

    console.log(`User with ID ${event.id} synced to Elasticsearch`);
  }

  async deleteIndex(indexName: string,) {
    return this.elasticService.indices.delete({ index: indexName });
  }
}