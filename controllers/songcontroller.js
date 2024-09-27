const Song = require('../models/song');

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.searchSongs = async (req, res) => {
  const { query } = req.query;
  try {
    const songs = await Song.find({ 
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { artist: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(songs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
