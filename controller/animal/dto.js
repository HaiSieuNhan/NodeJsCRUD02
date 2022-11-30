import { Joi, Segments } from 'celebrate'
    
export const createAnimalDto = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        weight: Joi.number().required(),
        address: Joi.string().required(),
        type: Joi.string().required()
    })
}

export const updateAnimalDto = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        weight: Joi.number().required(),
        address: Joi.string().required(),
    })
}