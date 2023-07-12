// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {

//       await queryInterface.createTable('Email_Folder', {
//         id: {
//           type:Sequelize.INTEGER ,
//           allowNull: false,
//          primaryKey: true,
//          autoIncrement: true},
//          Name:{
//           type:Sequelize.STRING,
//           allowNull:false
//          },
//          UserId:{
//           type:Sequelize.INTEGER,
//           allowNull:false,
//           references:{model:'users', key:'id'}
//          },
//          ProviderId:{
//           type:Sequelize.INTEGER,
//           allowNull:false

//          }

//         });

//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.dropTable('Email_Folder');

//   }
// };

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.createTable("Email_Folder", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    ProviderId: {
      type: Sequelize.INTEGER,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("Email_Folder");
}

module.exports = { up, down };
