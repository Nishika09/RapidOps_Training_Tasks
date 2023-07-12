



const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.createTable('Email_Attachment', {
		id:{
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
             } ,
             Email_Id:{
              type:Sequelize.INTEGER,
              allowNull:false,
              references:{model:'Emails',id:'id',onDelete: 'CASCADE',
              onUpdate: 'CASCADE',}
             },
             FileName:{
              type:Sequelize.STRING,
              
             },
             size:{
              type:Sequelize.INTEGER,
              
             },
             Type:{
              type:Sequelize.STRING
      
             },
             Path:{
              type:Sequelize.STRING,
              
      
             }
            });
           
        }

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('Email_Attachment');
}

module.exports = { up, down };
