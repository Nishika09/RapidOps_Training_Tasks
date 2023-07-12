
const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.createTable('users', {
    id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            Email: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            Name: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            Password: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            Access_Token:{
              type:Sequelize.STRING
            },
            Refresh_Token:{
              type:Sequelize.STRING
            }
});
        }

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('users');
}

module.exports = { up, down };