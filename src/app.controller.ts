import { Get, Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { isArray } from 'lodash';

@Controller('cats')
export class CatsController {
    @Get()
    index() {
        return [
            {
                id: 1,
                name: 'linux',
            },
            {
                id: 2,
                name: 'windows',
            },
            {
                id: 3,
                name: 'mac',
            },
        ];
    }

    @Post()
    store(@Body() request: { name: string } | [{ name: string }]) {
        if (isArray(request)) {
            const buffer = [];
            request.forEach((item, index) => {
                buffer.push({ id: (index + 1), ...item });
            });

            return buffer;
        }

        return {
            id: 1,
            ...request,
        };
    }

    @Put(':id')
    update(@Param('id') id: string, @Body('data') { name }: { name: string }) {
        if (Number(id) === 2) {
            return {
                id: 1,
                message: 'success updated',
                name: name.toUpperCase(),
            }
        }

        return {
            message: 'fail updated',
        };
    }

    @Delete(':id')
    destroy(@Param('id') id: string) {
        if (Number(id) === 2) {
            return {
                message: 'success updated',
            };
        }

        return {
            message: 'fail updated',
        };
    }
}
