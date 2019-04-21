const express = require('express');
const router = express.Router();

router.use("/", express.static('public/html/holidays'));

module.exports = router;