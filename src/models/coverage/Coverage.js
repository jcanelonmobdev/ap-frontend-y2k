import Services from 'services/Services'

export default class Coverage extends Services {
    constructor() {
        super('Coverages');
    }

    async getAll() {
        try {
            const { data } = await this.request.get();
            //console.log(data);
            return data;

        }
        catch (error) {
            console.log(`Error: ${error}`)
        }
        return
    }
}