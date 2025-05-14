import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { isString } from "util";

export class CreateUserProfileDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user', required : true })
    @IsString()
    user: string;

    @ApiProperty({ example: '10th', description: 'In which class user is study', required : true })
    @IsString()
    class: string;

    @ApiProperty({ example: 18, description: 'Current age of the user', required : true })
    @IsNumber()
    age: number;

    @ApiProperty({ example: 'sample@gmail.com', description: 'User email', required : true })
    @IsEmail()
    email: string;
}