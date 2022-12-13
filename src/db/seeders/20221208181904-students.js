'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students", [
      {
        dni: "00000001A",
        name: "Student",
        last_name: "One",
        date_of_birth: "1996-05-25",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        dni: "00000002B",
        name: "Student",
        last_name: "Two",
        date_of_birth: "1985-07-30",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        dni: "00000003C",
        name: "Student",
        last_name: "Three",
        date_of_birth: "1991-12-20",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        dni: "00000004D",
        name: "Student",
        last_name: "Four",
        date_of_birth: "1973-01-09",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        dni: "00000005E",
        name: "Student",
        last_name: "Five",
        date_of_birth: "1996-05-25",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        dni: "00000006F",
        name: "Student",
        last_name: "Six",
        date_of_birth: "1985-07-30",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        dni: "00000007G",
        name: "Student",
        last_name: "Seven",
        date_of_birth: "1991-12-20",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        dni: "00000008H",
        name: "Student",
        last_name: "Eight",
        date_of_birth: "1973-01-09",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        dni: "00000009I",
        name: "Student",
        last_name: "Nine",
        date_of_birth: "1996-05-25",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        dni: "00000010J",
        name: "Student",
        last_name: "Ten",
        date_of_birth: "1985-07-30",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        dni: "00000011K",
        name: "Student",
        last_name: "Eleven",
        date_of_birth: "1991-12-20",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        dni: "00000012L",
        name: "Student",
        last_name: "Twelve",
        date_of_birth: "1973-01-09",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        dni: "00000013M",
        name: "Student",
        last_name: "Thirteen",
        date_of_birth: "1963-11-09",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        dni: "00000014N",
        name: "Student",
        last_name: "Fourteen",
        date_of_birth: "1992-06-12",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        dni: "00000015O",
        name: "Student",
        last_name: "Fifteen",
        date_of_birth: "1994-10-05",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        dni: "00000016P",
        name: "Student",
        last_name: "Sixteen",
        date_of_birth: "1953-01-09",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        dni: "00000017Q",
        name: "Student",
        last_name: "Seventeen",
        date_of_birth: "1999-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        dni: "00000018R",
        name: "Student",
        last_name: "Eighteen",
        date_of_birth: "1998-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        dni: "00000019R",
        name: "Student",
        last_name: "Nineteen",
        date_of_birth: "2001-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        dni: "00000020S",
        name: "Student",
        last_name: "Twenty",
        date_of_birth: "1959-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  }
};
