import prisma from "database"

async function getAll(){
    return prisma.car.findMany() 
}

export { getAll }