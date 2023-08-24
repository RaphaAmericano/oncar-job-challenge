
import { NextFunction, Request, Response } from "express";
import { getAll, postLead } from "../services/lead.service"

async function getLeadsController(req: Request, res:Response, next: NextFunction){
    try {
        const list = await getAll()
        res.status(200).json(list);
    } catch (e) {
        console.error(e)
        res.status(400).json({ e })
    }
}

async function postLeadController(req: Request, res:Response, next: NextFunction){
    const { body } = req; 
    console.log(body)
    try {
        const lead = await postLead(body)
        console.log(lead);
        res.status(200).json({ lead })
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

export { getLeadsController, postLeadController }