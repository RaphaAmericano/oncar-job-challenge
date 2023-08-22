import * as fs from "fs"
import prisma from ".";
import {  Car } from "types"

const mock:Car[] = JSON.parse(fs.readFileSync(`${__dirname}/mock.json`, { encoding: "utf8", flag: "r"} ))

async function main(){
    
    const promises = mock.map((car: Car ) => prisma.car.create({ data: { ...car  }}))
    try {
        const seed = await Promise.all(promises);
        console.log(seed);
    } catch (e) {
        console.error(e)
    }
}

main();