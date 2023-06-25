import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService{
    
    getIndex():any{
        return "Hello Admin";
    }

    getAdminById(id:number):any{
        return ({id:2,name:"abc",age:20});
    }

    addAdmin(data: object)
    {
        return data;
    }
}