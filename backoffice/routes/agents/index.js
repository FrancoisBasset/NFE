const express = require('express');
const router = express.Router();

router.use("/", express.static('public/html/agents'));

module.exports = router;