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
   */
  .get("/all", userController.getAllUser)
  .patch("/update", userController.updateAUser)
  .patch("/bulk-update", userController.updateBulkUser)
  .delete("/delete", userController.deleteUser);

module.exports = router;
