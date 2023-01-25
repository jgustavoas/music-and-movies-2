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
        references: {
          model: 'albums',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      artist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      movie_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        references: {
          model: 'movies',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
