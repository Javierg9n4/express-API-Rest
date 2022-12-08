"use strict";
const { v4 } = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
        {
          email: "fulano@gmail.com",
          password: "asdf",
        },
        {
          email: "mengano@hola.com",
          password: "1234"
        },
        {
          email: "pepito@adios.com",
          password: "asdfasf"
        },
        {
          email: "juanito@hola.com",
          password: "46eyhey"
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
