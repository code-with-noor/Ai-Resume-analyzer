const express = require("express");
const router = express.Router();

const upload = require("../middleware/UploadMiddleware");
const { analyzeResume } = require("../controllers/resumeController");

router.post("/analyze", upload.single("resume"), analyzeResume);

module.exports = router;