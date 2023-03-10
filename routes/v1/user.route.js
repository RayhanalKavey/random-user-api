const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router
  /**
   *@api {get} /user/random
   *@apiDescription get a random user
   */
  .get("/random", userController.getRandomUser)
  /**
   *@api {get} /user/all
   *@apiDescription get all user
   *@url for limiting data (http://localhost:5004/user/all?limit=4)
   */
  .get("/all", userController.getAllUser)
  /**
   *@api {get} /user/save
   *@apiDescription user information received in the body as JSON formate
   */
  .post("/save", userController.saveUser)
  /**
   *@api {get} /user/update
   *@apiDescription
   */
  .patch("/update", userController.updateAUser)
  /**
   *@api {get} /user/bulk-update
   *@apiDescription
   */
  .patch("/bulk-update", userController.updateBulkUser)
  /**
   *@api {get} /user/delete
   *@apiDescription An id will be received in the body as JSON formate
   */
  .delete("/delete", userController.deleteUser);

module.exports = router;
