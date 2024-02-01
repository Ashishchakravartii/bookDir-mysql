const { getAllBooks, addBook, deleteBook, updateBookInfo } = require("../controllers/bookController.js");
const express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", getAllBooks);
router.post("/add", addBook);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBookInfo);

module.exports = router;
