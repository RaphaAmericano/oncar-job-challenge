import prisma from "database"

async function getAll(){
    return prisma.lead.findMany() 
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