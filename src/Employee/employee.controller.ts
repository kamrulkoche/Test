import { Body, Controller, Get, Param, Post, Delete, Put, Query, UploadedFile, UseInterceptors, UsePipes, ValidationPipe, NotFoundException, Patch, ParseIntPipe } from "@nestjs/common";
import { EmployeeService } from "./employeeservice.service";
import { AddProductDTO, AdminmessageDTO, DeleteproductDTO, EmployeeDTO, EmployeeUpdateDTO, UpdateProductDTO, viewrecordDTO } from "./employeeform.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import { EmployeeEntity } from "./employee.entity";



@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }


    // ------------------- Employee Registration Related Routes [Start] ---------------------//
    @Post(('/registration'))
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('myfile',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 300000 },
            storage: diskStorage({
                destination: './uploads',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))
    uploadFile(@UploadedFile() myfileobj: Express.Multer.File, @Body() data: EmployeeDTO
    ): any {
        console.log(myfileobj)

        //return ({message:"file uploaded"});
        return this.employeeService.employeeRegistration(data);
    }
    // ------------------- Employee Registration Related Routes [End] ---------------------//



    // ------------------- Employee all Registration Listshow Routes [Start] ---------------------//
    @Get('/registrationview')
    async findAll(): Promise<EmployeeEntity[]> {
        return this.employeeService.findAll();
    }
    // ------------------- Employee all Registration Listshow Routes [End] ---------------------//



    // ------------------- Employee Id Search Routes [Start] ---------------------//
    @Get('/search/:id')
    getEmployeeById(@Param('id', ParseIntPipe) id: number): object {
        return this.employeeService.getEmployeeById(id);
    }
    // ------------------- Employee Id Search Routes [End] ---------------------//



    // ------------------- Employee Id Search By Name Routes [Start] ---------------------//
    @Get('/search')
    getEmployeebyIDAndName(@Query() qry: any): object {

        return this.employeeService.getEmployeebyIDAndName(qry.id, qry.lname);
    }
    // ------------------- Employee Id Search By Name Routes [End] ---------------------//



    // ------------------- Employee Id Delete Routes [Start] ---------------------//
    @Delete('/users/:id')
    async delete(@Param('id') id: number): Promise<void> {
        const deleted = await this.employeeService.delete(id);
        if (!deleted) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
        else {
            throw new NotFoundException(`User with ID ${id} successful`);
        }
    }
    // ------------------- Employee Id Delete Routes [End] ---------------------//




    // ------------------- Employee Update Routes [Start] ---------------------//
    @Put('/updateemployee')
    @UsePipes(new ValidationPipe())
    updateEmployee(@Body() data: EmployeeUpdateDTO): any {
        return this.employeeService.updateEmployee(data);
    }
    // ------------------- Employee Update Routes [End] ---------------------// 



    // ------------------- Employee UpdateById Routes [Start] ---------------------//    
    @Put('/updateemployee/:id')
    @UsePipes(new ValidationPipe())
    updateAdminbyID(@Param() id: number, @Body() data: EmployeeUpdateDTO): object {
        return this.employeeService.updateAdminById(id, data);
    }
    // ------------------- Employee UpdateById Routes [End] ---------------------// 




    // @Put('/profileupdate')
    // @UsePipes(new ValidationPipe())
    // employeeProfileupdate(@Body() data:EmployeeUpdateDTO):string{
    //     console.log(data.fname);
    //     console.log(data.lname);
    //     console.log(data.gender);
    //     console.log(data.birthday);
    //     console.log(data.phone);
    //     console.log(data.address);
    //     return this.employeeService.employeeProfileupdate(data);
    // }




    @Get('/viewrecord')
    getviewrecord(@Query() qry: viewrecordDTO): string {

        return this.employeeService.viewrecord(qry);
    }



    // @Post('/addproduct')
    // @UsePipes(new ValidationPipe())
    // addProduct(@Body() data:AddProductDTO):string{
    //     console.log(data);
    //     return this.employeeService.addProduct(data);
    // }

    @Put('/updateproduct')
    @UsePipes(new ValidationPipe())
    updateProduct(@Body() data: UpdateProductDTO): string {
        console.log(data);
        return this.employeeService.updateProduct(data);
    }

    @Put('/updateproduct/:id')
    @UsePipes(new ValidationPipe())
    updateproductID(@Param() id: number, @Body() data: UpdateProductDTO): object {
        console.log(data);
        return this.employeeService.updateProductID(id, data);
    }


    @Get('/deleteproduct')
    getdeleteproduct(@Query() qry: DeleteproductDTO): string {

        return this.employeeService.deleteproduct(qry);
    }


    @Post('/adminmessage')
    @UsePipes(new ValidationPipe())
    adminmessage(@Body() data: AdminmessageDTO): string {
        return this.employeeService.adminmessage(data);
    }







    @Post(('/addproduct'))
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('myfile',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 300000 },
            storage: diskStorage({
                destination: './UploadProduct',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))
    productadd(@UploadedFile() myfileobj: Express.Multer.File, @Body() data: AddProductDTO
    ): any {
        console.log(myfileobj)

        //return ({message:"file uploaded"});
        return this.employeeService.addProduct(data);
    }








} 