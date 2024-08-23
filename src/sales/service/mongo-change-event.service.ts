import { Injectable, OnModuleInit } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Injectable()
export class MongoChangeStreamService implements OnModuleInit {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    private readonly elasticsearchService: ElasticsearchService,
  ) { }

  onModuleInit() {
    this.startListeningToChanges();
  }

  private startListeningToChanges() {
    const userChangeStream = this.connection.collection('sales').watch([], {
      fullDocument: 'updateLookup',
    });

    userChangeStream.on('change', async (change: any) => {
      const documentKey = change.documentKey?._id;
      const fullDocument = change.fullDocument;


      if (documentKey && fullDocument) {
        await this.syncToElasticsearch(documentKey.toString(), fullDocument);
      } else {
        console.error(`No documentKey or fullDocument found for change event.`);
      }
    });
  }

  private async syncToElasticsearch(id: string, data: any) {
    const { _id, ...dataWithoutId } = data;
    await this.elasticsearchService.index({
      index: 'sales',
      id,
      body: dataWithoutId,
    });
    console.log(`User with ID ${id} synced to Elasticsearch`);
  }
}
