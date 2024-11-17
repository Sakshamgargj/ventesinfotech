const express = require("express");
const { addBlog, getBlog } = require("../controller/blogController");
const router = express.Router();

router.get("/getBlog", getBlog);
router.post("/addBlog", addBlog);

module.exports = router;