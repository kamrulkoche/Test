import { Module } from "@nestjs/common";
import { EmployeeService } from "./employeeservice.service";
import { EmployeeController } from "./employee.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity } from "./employee.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity]),],
    providers: [EmployeeService],
    controllers: [EmployeeController]
})
export class employeeModule { }

