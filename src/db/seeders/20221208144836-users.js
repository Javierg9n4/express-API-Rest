"use strict";
const { v4 } = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
        {
          id: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
          email: "user1@example.com",
          password: "asdf",
          active: true
        },
        {
          id: "75112abd-e7aa-4bbd-af4a-3747e6f533c1",
          email: "user2@example.com",
          password: "1234",
          active: true
        },
        {
          id: "8479ac50-7628-4303-b3b4-7dfd55d55f54",
          email: "user3@example.com",
          password: "as12",
          active: true
        },
        {
          id: "beaf1980-1429-478a-9a41-19f017388b34",
          email: "user4@example.com",
          password: "df34",
          active: true
        },
        {
          id: "5b256b11-1b2c-4de7-9ccc-86cc553dd4a3",
          email: "user5@example.com",
          password: "34df",
          active: false
        },
        {
          id: "74887cb7-eafa-486e-b3ed-4108fceeaeda",
          email: "user6@example.com",
          password: "43212",
          active: false
        },
        {
          id: "7c795ccb-6772-4a64-bdd9-e351486d0f0f",
          email: "user7@example.com",
          password: "43212",
          active: false
        },
        {
          id: "651bf859-ef3d-4824-bdca-50dc937060a3",
          email: "user8@example.com",
          password: "43212",
          active: false
        },
        {
          id: "3c90241d-e28c-45a7-9d0b-a2456d1d2638",
          email: "user9@example.com",
          password: "43212",
          active: false
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
