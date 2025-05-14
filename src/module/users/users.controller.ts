import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from 'src/middleware/pipe/joi-validation.pipe';
import { createUserProfileSchema } from './user.validation';
import { UsersService } from './users.service';
import { ResponseService } from 'src/utils/handler/responseHandler';
import { CreateUserProfileDto } from './dto/user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserResponseDto } from './dto/userResponse.dto';
import { ApiCommonResponse } from 'src/swagger/apiPaginationResponse';
import { CreateUserCopyResponseDto } from './dto/userCopyResponse.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController extends ResponseService {

    constructor(
        private readonly userService: UsersService
    ) {
        super();
    }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    @ApiCommonResponse(CreateUserResponseDto, false)
    @ApiResponse({ status: 400, description: 'Bad Request.' })

    @UsePipes(new JoiValidationPipe(createUserProfileSchema))
    async create(@Body() userData: CreateUserProfileDto) {
        const { user, class: userClass, age, email } = userData;
        const { data, message } = await this.userService.create(user, userClass, age, email);
        return this.sendResponse(data, message);
    }

    @Get()
    @ApiOperation({ summary: 'Get users' })
    @ApiCommonResponse(CreateUserResponseDto, true)
    @ApiResponse({ status: 200, description: '✅ User profile fetched successfully.' })
    async getUserProfile() {
        const { data, message } = await this.userService.getUserProfile();
        return this.sendResponse(data, message);
    }

    @Get('/profile-copy')
    @ApiCommonResponse(CreateUserCopyResponseDto, true)
    @ApiOperation({ summary: 'Get users profile copy' })
    @ApiResponse({ status: 200, description: '✅ User profile copy fetched successfully.' })
    async getUserProfileCopy() {
        const { data, message } = await this.userService.getUserProfileCopy();
        return this.sendResponse(data, message);
    }
}
