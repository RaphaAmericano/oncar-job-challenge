import { z } from "zod"

const leadSchema = z.object({
    name: z.string().min(3, { message: "Necessário no mínimo 3 caractéres."}),
    email: z.string().email({ message: "Email inválido."}),
    phone: z.string()
        .min(10, { message: "Necessário no mínimo 10 caractéres."})
        .max(11, { message: "Limite de 11 caractéres."}),
    carId: z.number({ invalid_type_error: "carId deve ser um número."})
})
export { leadSchema }