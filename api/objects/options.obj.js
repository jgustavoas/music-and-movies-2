const models = require('../models');

const defaultColumns = ['created_at', 'updated_at'];

module.exports = {
  genres: {
    attributes: ['id', 'genre', ...defaultColumns],
  },
  artists: {
    attributes: ['id', 'artist', 'genre_id', ...defaultColumns],
    include: [{ model: models.genres, attributes: ['genre'] }],
  },
  albums: {
    attributes: ['id', 'album', 'artist_id', 'genre_id', ...defaultColumns],
    include: [
      { model: models.artists, attributes: ['artist'] },
      { model: models.genres, attributes: ['genre'] },
    ],
  },
  tracks: {
    attributes: [
      'id',
      'track',
      'album_id',
      'artist_id',
      'genre_id',
      'movie_id',
      ...defaultColumns,
    ],
    include: [
      { model: models.albums, attributes: ['album'] },
      { model: models.artists, attributes: ['artist'] },
      { model: models.genres, attributes: ['genre'] },
    ],
  },
  movies: {
    attributes: ['id', 'movie', 'genre_id', ...defaultColumns],
  },
};

/*
  "include" is a list of associations to eagerly load using a left join. 
  
  Type: Array<object|Model|string>
  
  Supported is either { include: [ Model1, Model2, ...]} 
  or { include: [{ model: Model1, as: 'Alias' }]} 
  or { include: ['Alias']}. 
  
  If your association are set up with an "as" (eg. X.hasMany(Y, { as: 'Z }, 
  you need to specify Z in the as attribute when eager loading Y).

  https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll
*/
