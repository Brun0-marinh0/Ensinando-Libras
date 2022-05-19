import { api } from "../../http";

interface IRegisterRequest {
    name: string,
    points: number
}

export async function RegisterRank(data: IRegisterRequest) {
    await api.post("/ranks/register", data)

    return
}