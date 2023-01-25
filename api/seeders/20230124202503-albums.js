module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'albums',
      [
        {
          album: 'The Colour And The Shape',
          artist_id: 12,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'One By One',
          artist_id: 12,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'In Your Honor [Disc 1]',
          artist_id: 12,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'In Your Honor [Disc 2]',
          artist_id: 12,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Jagged Little Pill',
          artist_id: 2,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Emergency On Planet Earth',
          artist_id: 14,
          genre_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Synkronized',
          artist_id: 14,
          genre_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'The Return Of The Space Cowboy',
          artist_id: 14,
          genre_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Mais Do Mesmo',
          artist_id: 15,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Olodum',
          artist_id: 17,
          genre_id: 31,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Live On Two Legs [Live]',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Riot Act',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Ten',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Vs.',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Lost Dogs',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Live At Benaroya Hall',
          artist_id: 18,
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Ocean Drive',
          artist_id: 26,
          genre_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Postcards From Heaven',
          artist_id: 26,
          genre_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Whatever Gets You Through The Day',
          artist_id: 26,
          genre_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Back To Black',
          artist_id: 25,
          genre_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          album: 'Who You Fighting For',
          artist_id: 20,
          genre_id: 9,
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
