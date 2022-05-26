import { api } from "../../http";

export async function UpdateStatus(id: number) {
    await api.patch("/questions/update-status/" + id)

    return
}