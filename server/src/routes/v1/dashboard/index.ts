import { Router } from "express";
import { list, counts } from "../../../services/dashboard";

const routes = Router();
routes.get("/list", list);
routes.get("/counts", counts);

export default routes;
