import { z } from "zod"

const leadSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.number(),
    date: z.date(),
    carId: z.number()
})

function validationLead(value:any){
    return leadSchema.safeParse(value)
}

export { leadSchema, validationLead }