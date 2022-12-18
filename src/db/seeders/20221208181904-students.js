'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students", [
      {
        id: "9be30696-84bf-4faa-a6b8-6dafc6a7d232",
        dni: "00000001A",
        name: "Student",
        last_name: "One",
        date_of_birth: "1996-05-25",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        id: "00ff891a-b8b6-4c8f-879d-c0d78ffacf91",
        dni: "00000002B",
        name: "Student",
        last_name: "Two",
        date_of_birth: "1985-07-30",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        id: "d03dd89d-ddba-44e4-83a0-1edf417a3eb3",
        dni: "00000003C",
        name: "Student",
        last_name: "Three",
        date_of_birth: "1991-12-20",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        id: "c40e902c-f294-447b-aa3e-4db39620dcdb",
        dni: "00000004D",
        name: "Student",
        last_name: "Four",
        date_of_birth: "1973-01-09",
        TeacherId: "5e052f07-d7da-452e-b0a2-9ee607cb93b0"
      },
      {
        id: "78c40252-670d-4165-8fb8-46eb70f18caf",
        dni: "00000005E",
        name: "Student",
        last_name: "Five",
        date_of_birth: "1996-05-25",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        id: "30ef30f6-2ece-4c39-9950-c77a296f14b4",
        dni: "00000006F",
        name: "Student",
        last_name: "Six",
        date_of_birth: "1985-07-30",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        id: "df6f74df-cc21-48fc-aae2-d00fbfe570c1",
        dni: "00000007G",
        name: "Student",
        last_name: "Seven",
        date_of_birth: "1991-12-20",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        id: "3817f839-c74f-46ab-9042-3d95def8f252",
        dni: "00000008H",
        name: "Student",
        last_name: "Eight",
        date_of_birth: "1973-01-09",
        TeacherId: "bfdfc44d-3b76-4573-91c5-558cb176a963"
      },
      {
        id: "4f388095-dd49-4f93-b1bf-941b392a6922",
        dni: "00000009I",
        name: "Student",
        last_name: "Nine",
        date_of_birth: "1996-05-25",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        id: "e0030da4-1f37-4b5e-89dc-a75fd52e9130",
        dni: "00000010J",
        name: "Student",
        last_name: "Ten",
        date_of_birth: "1985-07-30",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        id: "f16b5451-e419-4523-8d2d-1b476cc02157",
        dni: "00000011K",
        name: "Student",
        last_name: "Eleven",
        date_of_birth: "1991-12-20",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        id: "0858d6ce-4a9b-43d4-9bd3-e47281b62fff",
        dni: "00000012L",
        name: "Student",
        last_name: "Twelve",
        date_of_birth: "1973-01-09",
        TeacherId: "0901b33b-f7ec-4c25-8800-7641ee4d3896"
      },
      {
        id: "2a1f6607-7728-4e52-8ce7-bbf9cd48614c",
        dni: "00000013M",
        name: "Student",
        last_name: "Thirteen",
        date_of_birth: "1963-11-09",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        id: "c0559a4e-7b06-465a-8df7-dc32653a3430",
        dni: "00000014N",
        name: "Student",
        last_name: "Fourteen",
        date_of_birth: "1992-06-12",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        id: "284e2c2f-191b-436a-9e28-47ba6cbb92a9",
        dni: "00000015O",
        name: "Student",
        last_name: "Fifteen",
        date_of_birth: "1994-10-05",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        id: "708dec4e-fd1b-4848-baf3-42f02a64320a",
        dni: "00000016P",
        name: "Student",
        last_name: "Sixteen",
        date_of_birth: "1953-01-09",
        TeacherId: "285a48ed-877a-49ed-86a9-d74a83a0d11f"
      },
      {
        id: "505f89ef-5038-47a0-a59f-84a545f24064",
        dni: "00000017Q",
        name: "Student",
        last_name: "Seventeen",
        date_of_birth: "1999-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        id: "e7ee66f0-8334-402b-b273-b983e9670065",
        dni: "00000018R",
        name: "Student",
        last_name: "Eighteen",
        date_of_birth: "1998-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        id: "49796ff4-25e5-41e1-928a-9fb317ca0f7e",
        dni: "00000019R",
        name: "Student",
        last_name: "Nineteen",
        date_of_birth: "2001-11-09",
        TeacherId: "a07b9b99-6916-4c27-b963-ccb692debaf3"
      },
      {
        id: "c0230398-502f-4548-97ac-97605b062b1e",
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
