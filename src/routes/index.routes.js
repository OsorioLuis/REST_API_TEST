import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const routes = Router();

routes.get("/ping", ping);


export default routes;



