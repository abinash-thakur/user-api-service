// src/config/env.validation.ts
import * as Joi from 'joi';
import { ENVIRONMENT_ENUM } from 'src/utils/enums/environment.enum';

export const envValidationSchema = Joi.object({
    NODE_ENV: Joi.string()
    .valid(...Object.values(ENVIRONMENT_ENUM))
    .required(),
    API_PREFIX: Joi.string().required(),
    PORT: Joi.number().default(3000),

    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),

    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.string().allow('').optional()
});
