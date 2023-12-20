const express = require("express");
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
} = require("./controller");

router.post("/organizers", createCMSOrganizer);

router.post("/users", createCMSUser);

router.get("/users", getCMSUsers);

module.exports = router;
