import axios from "axios"

export const api = axios.create({
    baseURL: "https://manus-inotatec.herokuapp.com/"
})