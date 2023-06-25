import { Injectable } from "@nestjs/common";
import { AddProductDTO, AdminmessageDTO, DeleteproductDTO, EmployeeDTO, EmployeeUpdateDTO, UpdateProductDTO, viewrecordDTO } from "./employeeform.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeeEntity } from "./employee.entity";
import { Repository } from "typeorm";
import { promises } from "dns";

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeEntity)
        private employeeRepo: Repository<EmployeeEntity>) { }

    // async createUse(data:EmployeeEntity):Promise<EmployeeEntity>{
    //     return this.employeeRepo.save(data)
    // }

    // ------------------- Employee Registration Related Routes [Start] ---------------------//
    async employeeRegistration(data: EmployeeDTO): Promise<EmployeeEntity> {
        return this.employeeRepo.save(data)
    }
    // ------------------- Employee Registration Related Routes [End] ---------------------//




    // ------------------- Employee Id Search Routes [Start] ---------------------//
    async getEmployeeById(id: number): Promise<EmployeeEntity> {
        return this.employeeRepo.findOneBy({ id });
    }
    // ------------------- Employee Id Search Routes [End] ---------------------//



    // ------------------- Employee Id Search By Name Routes [Start] ---------------------//
    async getEmployeebyIDAndName(id, data): Promise<EmployeeEntity> {
        return this.employeeRepo.findOneBy({ id: id, lname: data });
    }
    // ------------------- Employee Id Search By Name Routes [End] ---------------------//



    // ------------------- Employee all Registration Listshow Routes [Start] ---------------------//
    async findAll(): Promise<EmployeeEntity[]> {
        return this.employeeRepo.find();
    }
    // ------------------- Employee all Registration Listshow Routes [End] ---------------------// 



    // ------------------- Employee Id Delete Routes [Start] ---------------------//
    async delete(id: number): Promise<boolean> {
        const deleteResult = await this.employeeRepo.delete(id);
        return deleteResult.affected > 0;
    }
    // ------------------- Employee Id Delete Routes [End] ---------------------//    



    // ------------------- Employee Update Routes [Start] ---------------------//
    async updateEmployee(data: EmployeeUpdateDTO): Promise<EmployeeEntity> {
        await this.employeeRepo.update(data.id, data);

        return this.employeeRepo.findOneBy({ id: data.id });

    }
    // ------------------- Employee Update Routes [End] ---------------------//    



    // ------------------- Employee UpdateById Routes [Start] ---------------------//    
    async updateAdminById(id: number, data: EmployeeUpdateDTO): Promise<EmployeeEntity> {
        await this.employeeRepo.update(id, data);
        return this.employeeRepo.findOneBy({ id });
    }
    // ------------------- Employee UpdateById Routes [End] ---------------------//  



    // employeeProfileview(data:EmployeeProfileviewDTO):string
    // {
    //     return  "Profileview";
    //    // return mydata.name ;
    // }

    // employeeProfileupdate(data:EmployeeUpdateDTO):string
    // {
    //     return data.fname +"\n"+ data.lname+"\n"+ data.gender+"\n"+ data.birthday+"\n" +  data.phone +"\n" + data.address ;
    // }

    // employeeProfiledelete(data:EmployeeProfiledeleteDTO ):string
    // {
    //     return  "Profile delete";
    //    // return mydata.name ;
    // }

    viewrecord(data: viewrecordDTO): string {
        return "VIew Record";
        // return mydata.name ;
    }

    addProduct(data: AddProductDTO): any {
        console.log(data)
        return (data.pname + "\n" + data.pprice + "\n\ File Uploaded");
    }



    updateProduct(data: UpdateProductDTO): string {
        return data.pname + "\n" + data.pprice;
    }

    updateProductID(id: number, data: UpdateProductDTO): object {
        console.log(id);
        console.log(data);
        return data;
    }

    deleteproduct(data: DeleteproductDTO): string {
        return "Delete Product";
        // return mydata.name ;
    }

    adminmessage(data: AdminmessageDTO): string {
        return data.adminmessage;
    }

}