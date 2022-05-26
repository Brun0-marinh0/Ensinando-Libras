import { api } from "../../http";

export async function ResetStatus() {
    await api.patch("/questions/reset-status")

    return
}