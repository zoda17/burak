import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */

routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.processLogin)
.post("/login", restaurantController.getLogin);
routerAdmin
.get("/signUp", restaurantController.getSignUp)
.post("/signUp", restaurantController.processSignUp);

/** Product */

/** User */

 export default routerAdmin;