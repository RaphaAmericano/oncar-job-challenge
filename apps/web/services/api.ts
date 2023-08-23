import axios from "axios"

import { LeadPostRequest } from "types"
const service = axios.create({
    baseURL: `${process.env.API_URL}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

async function getCars(){
    return service.get("/cars")
}

async function getLeads(){
    return service.get("/leads")
}

async function postLead(payload:LeadPostRequest ){
    return service.post("orders", payload)
}

export { getCars, getLeads, postLead }