import axios from "axios"

import { LeadPostRequest } from "types"
const url = process.env.API_URL ? process.env.API_URL : "http://localhost:3001" 
const service = axios.create({
    baseURL: `${url}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function getCars(){
    return service.get<any[]>("/cars")
}

export async function getLeads(){
    return service.get("/leads")
}

export async function postLead(payload:LeadPostRequest ){
    return service.post("/lead", payload)
}

