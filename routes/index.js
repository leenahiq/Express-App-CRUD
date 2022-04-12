const router = require("express").Router();

router.get("/", (req, res) => res.status(200).json({ msg: "Index" }));
router.get("/about", (req, res) => res.status(200).json({ msg: "About" }));
router.get("/contact", (req, res) => res.status(200).json({ msg: "Contact" }));
router.get("/faq", (req, res) => res.status(200).json({ msg: "FAQ" }));

module.exports = router;
