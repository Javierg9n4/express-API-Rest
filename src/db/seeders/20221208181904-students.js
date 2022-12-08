'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students", [
      {
        dni: "73746563a",
        name: "Pedro",
        last_name: "Rodriguez",
        date_of_birth: "1996-05-25",
        TeacherId: "4bb8b2c1-572b-49a5-b8eb-f9b2aa076219"
      },
      {
        dni: "87345309q",
        name: "Pablo",
        last_name: "Garcia",
        date_of_birth: "1985-07-30",
        TeacherId: "4bb8b2c1-572b-49a5-b8eb-f9b2aa076219"
      },
      {
        dni: "12345678L",
        name: "Ruben",
        last_name: "Hernandez",
        date_of_birth: "1991-12-20",
        TeacherId: "5b61cb6e-5aa7-4dc9-aac2-ecf3c95ea9a8"
      },
      {
        dni: "23324323R",
        name: "Rodrigo",
        last_name: "Sanchez",
        date_of_birth: "1973-01-09",
        TeacherId: "5b61cb6e-5aa7-4dc9-aac2-ecf3c95ea9a8"
      },
      {
        dni: "73746563a",
        name: "Miguel",
        last_name: "Rodriguez",
        date_of_birth: "1996-05-25",
        TeacherId: "68c07022-0903-439b-ab03-88e77ebefad8"
      },
      {
        dni: "87345309q",
        name: "Sergio",
        last_name: "Garcia",
        date_of_birth: "1985-07-30",
        TeacherId: "68c07022-0903-439b-ab03-88e77ebefad8"
      },
      {
        dni: "12345678L",
        name: "Victor",
        last_name: "Hernandez",
        date_of_birth: "1991-12-20",
        TeacherId: "68c07022-0903-439b-ab03-88e77ebefad8"
      },
      {
        dni: "23324323R",
        name: "Javier",
        last_name: "Sanchez",
        date_of_birth: "1973-01-09",
        TeacherId: "68c07022-0903-439b-ab03-88e77ebefad8"
      },
      {
        dni: "73746563a",
        name: "Manuel",
        last_name: "Rodriguez",
        date_of_birth: "1996-05-25",
        TeacherId: "cf43ff46-539c-43c6-9b8a-da714ab26fde"
      },
      {
        dni: "87345309q",
        name: "Federico",
        last_name: "Garcia",
        date_of_birth: "1985-07-30",
        TeacherId: "cf43ff46-539c-43c6-9b8a-da714ab26fde"
      },
      {
        dni: "12345678L",
        name: "David",
        last_name: "Hernandez",
        date_of_birth: "1991-12-20",
        TeacherId: "cf43ff46-539c-43c6-9b8a-da714ab26fde"
      },
      {
        dni: "23324323R",
        name: "Felix",
        last_name: "Sanchez",
        date_of_birth: "1973-01-09",
        TeacherId: "cf43ff46-539c-43c6-9b8a-da714ab26fde"
      },
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  }
};
