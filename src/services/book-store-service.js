import axios from 'axios'

export default class BookStoreService {
    baseUrl = 'https://itbooks-92386.firebaseio.com'


    async getBooks() {
        const data = await axios.get(`${this.baseUrl}/books.json`)
        const books  = []
        for (let [key, value] of Object.entries(data.data)) {
            books.push({...value, id: key});
        }
        return books
    }
}