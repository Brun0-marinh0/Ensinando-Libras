import { api } from "../../http";

export async function SelectQuestion() {
    const question = (await api.post("/questions/select", { type: "caracters" })).data

    console.log(question)
    return question
}