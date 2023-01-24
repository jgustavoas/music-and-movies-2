/* eslint-disable */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      track: {
        type: Sequelize.STRING,
      },
      album_id: {
        type: Sequelize.INTEGER,
      },
      artist_id: {
        type: Sequelize.INTEGER,
      },
      genre_id: {
        type: Sequelize.INTEGER,
      },
      movie_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tracks');
  },
};
