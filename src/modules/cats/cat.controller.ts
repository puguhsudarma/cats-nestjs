import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dtos/createCat.dto';
import { UpdateCatDto } from './dtos/updateCat.dto';

@Controller('cats')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Get()
    index() {
        return this.catService.findAll();
    }

    @Post()
    store(@Body() request: CreateCatDto) {
        return this.catService.save(request);
    }

    @Get(':id')
    show(@Param('id') id: string) {
        return this.catService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() request: UpdateCatDto) {
        return this.catService.update(id, request);
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        return this.catService.delete(id);
    }
}
