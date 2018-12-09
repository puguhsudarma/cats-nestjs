import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    index() {
        return {
            app: 'Cat CRUD Server',
            versionNumber: 1,
            versionApp: '1.0.0',
        };
    }
}
