// swagger/ApiCommonResponse.ts
import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/module/users/dto/commonResponse.dto';

export const ApiCommonResponse = <TModel extends Type<any>>(model: TModel, isArray = false) => {
    return applyDecorators(
        ApiExtraModels(model),
        ApiExtraModels(CommonResponseDto),
        ApiOkResponse({
            schema: {
                allOf: [
                    { $ref: getSchemaPath(CommonResponseDto) },
                    {
                        properties: {
                            data: isArray
                                ? {
                                    type: 'array',
                                    items: { $ref: getSchemaPath(model) },
                                }
                                : { $ref: getSchemaPath(model) },
                        },
                    },
                ],
            },
        }),
    );
};
