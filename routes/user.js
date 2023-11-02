import express from "express";
const router = express.Router();

// router.use(logger);

router.get("/", logger, (req, res) => {
  res.send("ユーザー");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報");
});

router.get("/:id", (req, res) => {
  res.send(`ユーザーID: ${req.params.id}`);
});

// middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

export default router;
