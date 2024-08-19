import * as dotenv from 'dotenv';
dotenv.config();

const variables = {
  ELASTIC_URL: process.env.ELASTIC_URL,
  ELASTIC_USERNAME: process.env.ELASTIC_USERNAME,
  ELASTIC_PASSWORD: process.env.ELASTIC_PASSWORD
}


export const appSettings = { ...variables }