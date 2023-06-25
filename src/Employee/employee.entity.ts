import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("employee")


// ------------------- EmployeeEntity Routes [Start] ---------------------//
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;


    // @Column()
    // gender:string;

    // @Column()
    // birthday: string;

    // @Column()
    // email:string;

    // @Column()
    // phone: string;

    // @Column()
    // address:string;

    // @Column()
    // username: string;

    // @Column()
    // password:string;

    // @Column()
    // confirmpassword: string;

}
// ------------------- EmployeeEntity Routes [End] ---------------------//

export class EmployeeUpdateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fname: string;

    @Column()
    lname: string;


}
