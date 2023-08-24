import { z } from "zod"

const leadSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().max(11),
    carId: z.number()
})
export { leadSchema }