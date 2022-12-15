"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teachers",
      [
        {
          id: "5e052f07-d7da-452e-b0a2-9ee607cb93b0",
          dni: "11111111A",
          name: "Teacher",
          last_name: "One",
          date_of_birth: "1996-05-25",
          UserId: "22fdbaac-5e36-40e1-87d0-ffb45146d7a7",
        },
        {
          id: "bfdfc44d-3b76-4573-91c5-558cb176a963",
          dni: "22222222B",
          name: "Teacher",
          last_name: "Two",
          date_of_birth: "1985-07-30",
          UserId: "75112abd-e7aa-4bbd-af4a-3747e6f533c1",
        },
        {
          id: "0901b33b-f7ec-4c25-8800-7641ee4d3896",
          dni: "33333333C",
          name: "Teacher",
          last_name: "Three",
          date_of_birth: "1991-12-20",
          UserId: "8479ac50-7628-4303-b3b4-7dfd55d55f54",
        },
        {
          id: "285a48ed-877a-49ed-86a9-d74a83a0d11f",
          dni: "44444444D",
          name: "Teacher",
          last_name: "Four",
          date_of_birth: "1973-01-09",
          UserId: "beaf1980-1429-478a-9a41-19f017388b34",
        },
        {
          id: "a07b9b99-6916-4c27-b963-ccb692debaf3",
          dni: "55555555E",
          name: "Teacher",
          last_name: "Five",
          date_of_birth: "1973-01-09",
          UserId: "5b256b11-1b2c-4de7-9ccc-86cc553dd4a3",
        },
        {
          id:"c32f9075-e0a3-448c-8ea5-7e97f8cdf7e2",
          dni: "66666666F",
          name: "Teacher",
          last_name: "Six",
          date_of_birth: "1973-01-09",
          UserId: "74887cb7-eafa-486e-b3ed-4108fceeaeda",
        },
        {
          id:"d864009c-d072-4a0d-b13c-e34b48f8ed01",
          dni: "77777777G",
          name: "Teacher",
          last_name: "Seven",
          date_of_birth: "1973-01-09",
          UserId: "7c795ccb-6772-4a64-bdd9-e351486d0f0f",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teachers", null, {});
  },
};
