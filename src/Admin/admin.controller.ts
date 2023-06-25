import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./adminservice.service";
import { AdminForm } from "./adminform.dto";

@Controller('admin')
export class AdminController{
    constructor(private readonly adminService:AdminService){}


    @Get('/index')
    getIndex():any {
        return this.adminService.getIndex();
    }

    @Get('/search/:id')
    getAdminById(@Param()id:number):any{
        return this.adminService.getAdminById(id);
    }

    @Post('/addadmin')
    @UsePipes(new ValidationPipe())
    addAdmin(@Body() data:AdminForm):object{
        return this.adminService.addAdmin(data);
    }
}





