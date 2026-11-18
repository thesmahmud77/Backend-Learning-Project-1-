import express, { Router } from "express";
import { homeRoute, quoryLearning } from "../controllers/user.controller.js";

const route = Router();

route.get("/", homeRoute);

route.post("/quory", quoryLearning);

export default route;
