import { Router } from "express";
import { getCarsController } from "../controllers/car.controller";
import { getLeadsController, postLeadController } from "../controllers/lead.controller";
const routes = Router();
routes.get("/cars", getCarsController)
routes.get("/leads", getLeadsController)
routes.post("/lead", postLeadController)
export default routes
