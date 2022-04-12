const router = require("express").Router();
const Coffee = require("../model/coffee");
const {
  handleInternalServerError,
  handleNotFoundError,
} = require("../middleware/error");

router.get("/coffee", async (req, res) => {
  res.status(200).json(await Coffee.findAll({}));
});

router.post("/coffee", async (req, res) => {
  const coffee = await Coffee.create(req.body);
  res.status(201).json({ msg: `Created ${coffee.name}`, coffee });
});

router.delete("/coffee", async (req, res) => {
  const result = await Coffee.destroy({ where: {} });
  res.status(200).json({ msg: "Deleted all coffee", result });
});

router.get("/coffee/:id", async (req, res, next) => {
  try {
    const coffee = await Coffee.findOne({ where: { id: req.params.id } });
    if (coffee) {
      res.status(200).json(coffee);
    } else {
      req.errType = 400;
      throw new Error("No Such Coffee");
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/coffee/:id", async (req, res) => {
  const result = await Coffee.destroy({ where: { id: req.params.id } });
  res.status(200).json({ msg: "Deleted one coffee", result });
});

router.put("/coffee/:id", async (req, res) => {
  const result = await Coffee.findOne({ where: { id: req.params.id } });
  if (req.body.name) {
    result.name = req.body.name;
  }

  if (req.body.strength) {
    result.strength = req.body.strength;
  }

  if (req.body.origin) {
    result.origin = req.body.origin;
  }

  await result.save();

  res.status(200).json({ msg: "Updated one coffee", result });
});

router.use(handleNotFoundError);
router.use(handleInternalServerError);

module.exports = router;
