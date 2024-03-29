const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
/*
mongoose
  .connect("")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });
*/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
/*
app.get("/api/recipes", (req, res) => {
  
});

app.get("/api/recipes/:id", (req, res) => {
  getRecipe(req.params.id, res);
});

app.post("/api/recipes", upload.single("img"), (req, res) => {
  
});

app.put("/api/recipes/:id", upload.single("img"), (req, res) => {
  
});

app.delete("/api/recipes/:id", (req, res) => {
  
});
*/
function validateRecipe(recipe) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    ingredients: Joi.allow(""),
    _id: Joi.allow(""),
  });

  return schema.validate(recipe);
}

app.listen(3000, () => {
  console.log("I'm listening");
});
