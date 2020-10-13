import { create } from 'apisauce'

const api = create({
    baseURL: 'https://agenda-de-contatos.herokuapp.com/api',
})

export default api;