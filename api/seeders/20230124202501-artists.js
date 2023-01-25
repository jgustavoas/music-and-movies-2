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
      'artists',
      [
        {
          artist: 'AC/DC',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Alanis Morissette',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Alice In Chains',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Cidade Negra',
          genre_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Led Zeppelin',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'João Gilberto',
          genre_id: 33,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Kid Abelha',
          genre_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Hermeto Pascoal',
          genre_id: 33,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Metallica',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Queen',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Green Day',
          genre_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Foo Fighters',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Iron Maiden',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Jamiroquai',
          genre_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Legião Urbana',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Engenheiros do Hawaii',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Olodum',
          genre_id: 31,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Pearl Jam',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Red Hot Chili Peppers',
          genre_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'UB40',
          genre_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Jorge Aragão',
          genre_id: 35,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Demônios da Garoa',
          genre_id: 35,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Black Eyed Peas',
          genre_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Luciano Pavarotti',
          genre_id: 30,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Amy Winehouse',
          genre_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Lighthouse Family',
          genre_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          artist: 'Falamansa',
          genre_id: 32,
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
