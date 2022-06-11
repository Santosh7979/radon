const express = require('express');
const router = express.Router();

const skauthorController= require("../controllers/skauthorController")
const skbookController= require("../controllers/skbookController")
const publisherController= require("../controllers/publisherController")

router.post("/createAuthor", skauthorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher)

router.post("/createBook", skbookController.createBook )

router.get("/getBooksData", skbookController.getBooksData)
router.post("/getAuthorsData", skauthorController.getAuthorsData  )
router.get("/getBook", skbookController.getBook)

 module.exports = router;