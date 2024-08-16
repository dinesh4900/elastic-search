import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesModule } from './sales/sales.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dineshm4900:56GzbJ7JFP5M71wG@cluster0.d6xvo.mongodb.net/'), SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
