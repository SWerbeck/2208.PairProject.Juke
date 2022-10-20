const router = require('express').Router()
const {Song, Album, Artist } = require('../db')

// connect your API routes here!
// GET /api/albums
// Respond with all of the albums in the database, including the artist for that album.
router.get('/albums', async (req, res, next) => {
  try {
    const albums = await Album.findAll({include: Artist})
    res.send(albums)
  }
  catch(err) {
    next(err)
  }
})
// GET /api/albums/:albumId
// Respond with a single album based on the id in the URL, including the artist and songs for that album
router.get('/albums/:albumId', async (req, res, next) => {
    try {
      const album = await Album.findByPk(req.params.albumId,
        {include: [Artist, Song]}
        )
      res.send(album)
    }
    catch(err) {
      next(err)
    }
  })


module.exports = router
