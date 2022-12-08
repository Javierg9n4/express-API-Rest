"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teachers",
      [
        {
          dni: "73746563a",
          name: "Fulanito",
          last_name: "Rodriguez",
          date_of_birth: "1996-05-25",
          UserId: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
        },
        {
          dni: "87345309q",
          name: "Menganito",
          last_name: "Garcia",
          date_of_birth: "1985-07-30",
          UserId: "75112abd-e7aa-4bbd-af4a-3747e6f533c1",
        },
        {
          dni: "12345678L",
          name: "Pepito",
          last_name: "Hernandez",
          date_of_birth: "1991-12-20",
          UserId: "8479ac50-7628-4303-b3b4-7dfd55d55f54",
        },
        {
          dni: "23324323R",
          name: "Juanito",
          last_name: "Sanchez",
          date_of_birth: "1973-01-09",
          UserId: "beaf1980-1429-478a-9a41-19f017388b34",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teachers", null, {});
  },
};
