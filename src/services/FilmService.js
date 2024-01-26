import { api } from '@/services/api.js'

export default {
    search(title) {
        return api(`/movies/?title=` + title, {
            method: 'GET',
        })
    }
}