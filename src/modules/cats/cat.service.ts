import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm";
import { Cat } from "../../commons/entities/cat.entity";

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) { }

    public findAll(): Promise<Cat[]> {
        return this.catRepository.find();
    }

    public save(data: any): Promise<Cat> {
        return this._save(data);
    }

    public async findOne(paramId: string | number): Promise<Cat> {
        const id = this._getId(paramId);

        const entity = await this.catRepository.findOne(id);

        if (!entity) {
            throw new NotFoundException();
        }

        return entity;
    }

    public async update(paramId: string | number, entity: any): Promise<Cat> {
        const id = this._getId(paramId);
        if (!(await this.findOne(id))) {
            throw new NotFoundException();
        }

        return this._save({ id, ...entity });
    }

    public delete(paramId: string | number): Promise<DeleteResult> {
        const id = this._getId(paramId);
        try {
            return this.catRepository.delete(id);
        } catch (err) {
            throw new NotFoundException(err.message);
        }
    }

    private _getId(paramId: any): number {
        const id = parseInt(paramId, 10);

        if (isNaN(id) || typeof id !== 'number') {
            throw new BadRequestException();
        }

        return id;
    }

    private _save(entity: any): Promise<Cat> {
        if (!entity || typeof entity !== 'object') {
            throw new BadRequestException();
        }

        try {
            return this.catRepository.save(entity as any);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}
