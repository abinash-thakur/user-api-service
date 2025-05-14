import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/middleware/pipe/joi-validation.pipe';
import { createUserProfileSchema } from './user.validation';
import { ICreateUserProfile } from './user.interface';
import { UsersService } from './users.service';
import { ResponseService } from 'src/utils/handler/responseHandler';

@Controller('users')
export class UsersController extends ResponseService {

    constructor(
        private readonly userService : UsersService
    ){
        super();
    }

    @Get()
    async getUserProfile() {
        const {data, message} = await this.userService.getUserProfile();
        return this.sendResponse(data, message);
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createUserProfileSchema))
    async create(@Body() userData: ICreateUserProfile) {
        const {user, class : userClass, age, email} = userData;
        const {data, message} = await this.userService.create(user, userClass, age, email);
        return this.sendResponse(data, message);
    }
}
