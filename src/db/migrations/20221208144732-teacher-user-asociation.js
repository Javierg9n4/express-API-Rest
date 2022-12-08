'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Teachers", {
      fields: ["UserId"],
      type: "foreign key",
      name: "UserId",
      references: {
        //Required field
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Teachers", "UserId");
  }
};