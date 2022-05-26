import { api } from "../../http";

export async function Top() {
    const res = (await api.get("/ranks/top")).data
        
    return res
}