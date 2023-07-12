// "use strict";

// const { ENUM } = require('mysql/lib/protocol/constants/types');

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("Email_Recipient", {
//       id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       Email_Id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: { model: "emails", key: "id" },
//       },
//       Email_Address:{
//         type:Sequelize.STRING,
//         allowNull:false
//       },
//       Type:{
//         type:Sequelize.ENUM('from','to','cc','bcc'),
//         allowNull:false
//       }
//     });
//   },

//   async down(queryInterface, Sequelize) {

//       await queryInterface.dropTable('Email_Recipient');

//   },
// };

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.createTable("Email_Recipient", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING,
    },
    Email_Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Emails",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    Email_Address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Type: {
      type: Sequelize.ENUM("from", "to", "cc", "bcc"),
      allowNull: false,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("Email_Recipient");
}

module.exports = { up, down };
