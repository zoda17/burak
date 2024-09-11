import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signUp", restaurantController.getSignUp)
  .post("/signUp", restaurantController.processSignUp);

/** Product */
/** User */

 export default routerAdmin;