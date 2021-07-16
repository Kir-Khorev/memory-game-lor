export default class GameService {
    _apiBase = 'https://my-json-server.typicode.com/khorek/db/characters';

    async getResource() {
        const res = await fetch(`${this._apiBase}`)
        if (!res.ok) {
            throw new Error(`Could not fetch, received ${res.status}`)
        }
        return await res.json();

    }

    async getCardsItems () {
        return await this.getResource();
    }

    async getItem(id) {
        const res = await this.getResource();
        const item = res.find((el) => {
            console.log(`el.id: ${el.id}, id: ${id}`);
            return el.id === +id;
        })
        return item
    }

}