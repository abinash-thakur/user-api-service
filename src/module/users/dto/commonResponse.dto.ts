import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto<T> {
    @ApiProperty({ example: true })
    success: boolean;

    @ApiProperty({ example: 200 })
    statusCode: number;

    @ApiProperty({ example: 'User is created' })
    message: string;

    @ApiProperty()
    data: T;
}
