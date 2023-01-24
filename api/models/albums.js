/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.genres, {
        foreignKey: 'genre_id',
      });
      this.belongsTo(models.artists, {
        foreignKey: 'artist_id',
      });
    }
  }
  albums.init(
    {
      album: DataTypes.STRING,
      artist_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'albums',
      underscored: true,
      // https://sequelize.org/docs/v6/other-topics/naming-strategies/#the-underscored-option
    }
  );
  return albums;
};
