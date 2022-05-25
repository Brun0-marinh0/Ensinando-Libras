import { api } from "../../http";

export default interface IRegisterRequest {
    name: string,
    points?: number
}

export async function RegisterRank(data: IRegisterRequest) {
    await api.post("/ranks/register", data)
    console.log(data);

    return
}