const express = require("express");
const router = express();
const { create } = require("./controller");

router.get("/categories", (req, res) => {
  const data = [
    {
      _id: 1,
      name: "Beverages",
    },
    {
      _id: 2,
      name: "Condiments",
    },
  ];

  res.status(200).json({
    data,
  });
});

router.post("/categories", create);

module.exports = router;
