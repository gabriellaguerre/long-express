// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});
// Your code here

app.get('/artists', (req, res) => {
  res.status(200).send(getAllArtists());
})

app.post('/artists', (req, res) => {
  let data = req.body;
  res.status(201).send(addArtist(data))
})

app.get('/artists/:artistId', (req,res) => {
  let artistId = req.params.artistId;
  res.status(200).send(getArtistByArtistId(artistId))
})

app.put('/artists/:artistId', (req,res) => {
  let artistId = req.params.artistId;
  let data = req.body;
  res.status(200).send(editArtistByArtistId(artistId, data))
})

app.delete('/artists/:artistId', (req, res) => {
  let artistId = req.params.artistId;
  deleteArtistByArtistId(artistId)
  res.status(200).json({"message": "Successfully Deleted"})
})

app.get('/artists/:artistId/albums', (req, res) => {
  let artistId = req.params.artistId;
  res.status(200).send(getAlbumsByArtistId(artistId))
})

app.get('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;
  res.status(200).send(getAlbumByAlbumId(albumId))
})

app.post('/artist/:artistId/albums', (req, res) => {
  let artistId = req.params.artistId;
  let data = req.body;
  res.status(201).send(addAlbumByArtistId(artistId, data))
})



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
