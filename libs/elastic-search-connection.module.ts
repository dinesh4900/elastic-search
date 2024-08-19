import { Global, Module } from '@nestjs/common';
import { appSettings } from 'config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { NodeOptions } from '@elastic/elasticsearch';
const { ELASTIC_URL, ELASTIC_USERNAME, ELASTIC_PASSWORD } = appSettings;

console.log(ELASTIC_URL, '## ELASTIC_URL')

const ElasticSearchModule = ElasticsearchModule.register({
  requestTimeout: 60000,
  node: {
    url: new URL(ELASTIC_URL),
    ssl: {
      rejectUnauthorized: true,
    },
  } as NodeOptions,
  auth: {
    username: ELASTIC_USERNAME,
    password: ELASTIC_PASSWORD,
  },
});


const providers = [];
const moduleExports = [ElasticSearchModule];

@Global()
@Module({
  imports: [ElasticSearchModule],
  controllers: [],
  providers,
  exports: moduleExports,
})
export class ElasticSearchConnectionModule { }
