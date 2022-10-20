const db = require('./db')
// require each of your models here...

// Model Imports go here
const Album = require('./album');
const Artist = require('./artist');
const Song = require('./song')

// ...and give them some nice associations here!

// An artist can have many albums
// An album belongs to an artist
Artist.hasMany(Album);
Album.belongsTo(Artist);

Artist.hasMany(Song);
Song.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);


module.exports = {
  db,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
  Song,
  Artist,
  Album,
}
