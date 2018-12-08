import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<CatsController>(CatsController);
      expect(appController.index()).toBe('Hello World!');
    });
  });
});
