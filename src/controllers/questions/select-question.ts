import { api } from "../../http";

export async function SelectQuestion(type: string) {
    const question = (await api.post("/questions/select", { type: type })).data

    return question
}