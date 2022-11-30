export const route = express.Router()

route.post('/', celebrate(createAnimalDto), async (req, res, next) => {
    try {
        const animalService = Container.get(AnimalService)
        const animalRecord = await animalService.create(req.body)
        return res.status(HttpStatus.OK).send(HttpResponse.success({ data: animalRecord }))
    } catch (error) {
        console.log(error)
        return res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json(HttpResponse.error(error))
    }
})