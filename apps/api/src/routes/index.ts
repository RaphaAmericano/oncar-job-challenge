import { Router } from "express";
import { getCarsController } from "../controllers/car.controller";
const routes = Router();
routes.use("/cars", getCarsController)

export default routes
