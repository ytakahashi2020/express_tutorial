import express from "express";

const app = express();

import userRouter from "./routes/user.js";

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.render("index", { title: "タイトル" });
});

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
