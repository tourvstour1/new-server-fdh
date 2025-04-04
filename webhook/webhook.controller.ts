import { api } from "encore.dev/api";

export const discord = api({ path: '/webhook', method: 'POST', expose: true }, async (): Promise<{ message: string }> => {

    return { message: 'asdasdasd' }
})