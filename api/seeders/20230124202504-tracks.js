module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   track: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'tracks',
      [
        {
          track: 'Once',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Even Flow',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Alive',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Why Go',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Black',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Jeremy',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Oceans',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Porch',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Garden',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Deep',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Release',
          artist_id: 18,
          album_id: 13,
          genre_id: 1,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Lifted',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Heavenly',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Loving Every Minute',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Ocean Drive',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'The Way You Are',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Keep Remembering',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Sweetest Operator',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'What Could Be Better',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Beautiful Night',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          track: 'Goodbye Heartbreak',
          artist_id: 26,
          album_id: 17,
          genre_id: 16,
          movie_id: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
