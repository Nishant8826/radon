const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const londonController=require("../controllers/londonController")
const memeController=require("../controllers/meme")
const tempController=require("../controllers/tempSorted")

router.get("/cowin/vaccineByDate",CowinController.getByDateAndDis)

router.get("/londonWhether",londonController.getLondonWhether)

router.get("/sortedTemp",tempController.getSortedTemp)

router.post("/meme",memeController.getMemes)
router.post("/modifyMeme",memeController.getMemeById)

module.exports = router;