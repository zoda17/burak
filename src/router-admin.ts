import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restaurant  */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);
routerAdmin
.get("/signup", restaurantController.getSignup)
.post(
    "/signup", 
    makeUploader("members").single("memberImage"), 
    restaurantController.processSignup
    );
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get(
    "/product/all", 
restaurantController.verifyReastaurant,
productController.getAllProducts
);
routerAdmin.post(
    "/product/create", 
    restaurantController.verifyReastaurant,
    // uploadProductImage.single("productImage"),
    makeUploader("products").array("productImages", 5),
    productController.createNewProduct
);
routerAdmin.post(
    "/product/:id/", 
    restaurantController.verifyReastaurant, 
    productController.updateChosenProduct
);
/** User */

export default routerAdmin;