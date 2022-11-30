import moongose from 'mongoose'

const schema = moongose.Schema

const animalSchema = schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
}, { timpestamp: true })

const Animal = moongose.model('Animal', animalSchema)
export default Animal