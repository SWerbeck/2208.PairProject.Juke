const Sequelize = require('sequelize');
const db = require('./db');

// Table define goes here
// EG:
const Album = db.define(
	'album',
	{
		name: {
			type: Sequelize.STRING,
      allowNull: false,
		},
		artworkUrl: {
			type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "default-album.jpg"
		},
	},
);

module.exports = Album;
