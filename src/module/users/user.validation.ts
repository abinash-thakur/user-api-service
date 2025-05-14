import * as Joi from 'joi';
import { CreateUserProfileDto } from './dto/user.dto';

export const createUserProfileSchema = Joi.object<CreateUserProfileDto>({
    user: Joi.string()
        .required()
        .messages({
            'string.base': `"user" should be a type of 'text'`,
            'string.empty': `"user" cannot be empty`,
            'any.required': `"user" is a required field`,
        }),

    class: Joi.string()
        .required()
        .messages({
            'string.base': `"class" should be a type of 'text'`,
            'any.required': `"class" is required`,
        }),

    age: Joi.number()
        .required()
        .messages({
            'number.base': `"age" must be a number`,
            'any.required': `"age" is required`,
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': `"email" must be a valid email`,
            'any.required': `"email" is required`,
        }),
});
