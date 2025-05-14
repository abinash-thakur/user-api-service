import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCopyResponseDto {
    @ApiProperty({ example: '09346fb9-3972-4b31-96f6-0dce7674665c' })
    id: string;

    @ApiProperty({ example: 'abinash' })
    user: string;

    @ApiProperty({ example: '10th' })
    class: string;

    @ApiProperty({ example: 19 })
    age: number;

    @ApiProperty({ example: 'sample@gmail.com' })
    email: string;

    @ApiProperty({ example: '2025-05-14T11:20:50.353Z' })
    insertedAt: string;

    @ApiProperty({ example: '2025-05-14T11:21:50.435Z' })
    modifiedAt: string;
}
