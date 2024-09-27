const Playlist = require('../models/playlist');
const Song = require('../models/song');

exports.createPlaylist = async (req, res) => {
  const { name, songs } = req.body;
  try {
    const playlist = new Playlist({
      name,
      user: req.user.id,
      songs
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.id }).populate('songs');
    res.json(playlists);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
