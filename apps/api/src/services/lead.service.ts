import prisma from "database"

async function getAll(){
    return prisma.lead.findMany({ select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        date: true,
        Car: {
            select: {
                id: true, 
                model: true,
                brand: true, 
                year: true,
                price: true
            }
        }
    }}) 
}

async function postLead(payload){
    return prisma.lead.create({
        data: {
            ...payload,
            date: new Date()
        }
    })
}

export { getAll, postLead }