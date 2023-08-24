import { z } from "zod"

const carSchema = z.object({
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    price: z.number()
})

// function validationCar(value:any){
//     return carSchema.safeParse(value)
// }

export { carSchema }