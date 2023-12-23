const express = require("express");
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
} = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

router.post("/organizers", createCMSOrganizer);

router.post("/users", authenticateUser, createCMSUser);

router.get("/users", getCMSUsers);

module.exports = router;
