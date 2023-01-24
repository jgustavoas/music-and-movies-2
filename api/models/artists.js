/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artists extends Model {
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
    }
  }
  artists.init(
    {
      artist: DataTypes.STRING,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'artists',
      underscored: true,
      // https://sequelize.org/docs/v6/other-topics/naming-strategies/#the-underscored-option
    }
  );
  return artists;
};
