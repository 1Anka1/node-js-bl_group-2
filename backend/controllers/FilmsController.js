const Film = require("../models/Film");
const asyncHandler = require("express-async-handler");

class FilmsController {
  add = asyncHandler(async (req, res) => {
    const { title } = req.body;
    if (!title) {
      res.status(400);
      throw new Error("Provide all required fields");
    }
    const film = await Film.create({ ...req.body });
    if (!film) {
      return res.status(400).json({
        code: 400,
        message: "Unable to save",
      });
    }
    res.status(201).json({
      code: 201,
      message: "Save success!",
      data: film,
    });
  });

  fetchAll(req, res) {
    res.send("controllerFetchAll");
  }
  fetchOne(req, res) {
    res.send("controllerFetchOne");
  }
  update(req, res) {
    res.send("controllerUpdate");
  }
  remove(req, res) {
    res.send("controllerRemove");
  }
}
module.exports = new FilmsController();
