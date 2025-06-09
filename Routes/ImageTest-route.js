const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const AnimalArticle = require("../Models/ImageTest");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/Assets/animalblogs");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Upload file to server
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { title } = req.body;
    const { articlebody } = req.body;
    const { filename: imageName } = req.file;

    const imagePath = `/Assets/animalblogs/${imageName}`;

    // Save file path to MongoDB
    const image = await AnimalArticle.create({
      title,
      articlebody,
      image: imagePath,
    });

    res.json(image);
  } catch (error) {
    console.error(error);
    // Delete uploaded file if there is an error
    fs.unlinkSync(req.file.path);
    res.status(500).json({ error: "Server error" });
  }
});

//get all images
router.get("/images", async (req, res) => {
  try {
    const images = await AnimalArticle.find(
      {},
      { title: 1, articlebody: 1, image: 1 }
    );
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// get single article
router.get("/article/:id", async (req, res) => {
  try {
    const article = await AnimalArticle.findById(req.params.id);
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//update the article
router.route("/update/:id").put(async (req, res) => {
  let articleId = req.params.id;

  const { title } = req.body;
  const { articlebody } = req.body;
  const { image } = req.body;

  //save file pat to MongoDB
  const updateArticle = {
    title,
    articlebody,
    image,
  };

  const update = await AnimalArticle.findByIdAndUpdate(articleId, updateArticle)
    .then(() => {
      res.status(200).send({ status: "Article Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in updating data", error: err.message });
    });
});

//delete an article
router.route("/delete/:id").delete(async (req, res) => {
  let articleId = req.params.id;

  await AnimalArticle.findByIdAndDelete(articleId)
    .then(() => {
      res.status(200).send({ status: "Article deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting item", error: err.message });
    });
});

module.exports = router;
