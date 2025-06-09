const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const Image = require("../Models/AgriBlog");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/Assets/agriBlogs");
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
    const imagePath = `/Assets/agriBlogs/${imageName}`;
    // Save file path to MongoDB
    const image = await Image.create({
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

// Get all images
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find({}, { title: 1, articlebody: 1, image: 1 });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//delete a record
router.delete("/images/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Remove image from file system
    fs.unlinkSync(`../client/public${image.image}`);

    // Remove image from MongoDB
    await Image.findByIdAndDelete(req.params.id);

    res.json({ message: "Image removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//update a record
router.put("/images/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, articlebody } = req.body;
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    if (req.file) {
      // If a new image is uploaded, remove the old one and save the new one
      fs.unlinkSync(`../client/public${image.image}`);
      image.image = `/Assets/agriBlogs/${req.file.filename}`;
    }

    image.title = title;
    image.articlebody = articlebody;
    await image.save();

    res.json({ message: "Image updated", image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
