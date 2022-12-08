'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Students", {
      fields: ["TeacherId"],
      type: "foreign key",
      name: "TeacherId",
      references: {
        //Required field
        table: "Teachers",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Students", "TeacherId");
  }
};
