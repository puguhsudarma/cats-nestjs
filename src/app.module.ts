import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { CatModule } from './modules/cats/cat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatModule,
  ],
  controllers: [
    AppController,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
