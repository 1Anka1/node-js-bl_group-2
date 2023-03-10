//http://localhost:62000/api/v1/films

const express = require("express");
const router = express.Router();
const FilmsController = require("../controllers/FilmsController");

router.post(
  "/films",
  (req, res, next) => {
      console.log("Joi");
      next()
  },
  FilmsController.add
);
router.get("/films", FilmsController.fetchAll);
router.get("/films/:id", FilmsController.fetchOne);
router.put("/films/:id", FilmsController.update);
router.delete("/films/:id", FilmsController.remove);

module.exports = router;
