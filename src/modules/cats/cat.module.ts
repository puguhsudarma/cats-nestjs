import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "../../commons/entities/cat.entity";
import { CatService } from "./cat.service";
import { CatController } from "./cat.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    providers: [CatService],
    controllers: [CatController],
})
export class CatModule { }
