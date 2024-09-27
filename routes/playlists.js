const express = require('express');
const { createPlaylist, getPlaylists } = require('../controllers/playlistController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createPlaylist);
router.get('/', protect, getPlaylists);

module.exports = router;
