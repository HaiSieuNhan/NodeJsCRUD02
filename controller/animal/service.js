export class AnimalService {
    constructor(container) {
        this.animalModel = container.get('animalModel')
    }
    async create(payload) {
        const newAnimal = await this.animalModel.create(payload)
        return newAnimal
    }
}