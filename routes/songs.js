const express = require('express');
const { getAllSongs, searchSongs } = require('../controllers/songController');
const router = express.Router();

router.get('/', getAllSongs);
router.get('/search', searchSongs);

module.exports = router;
