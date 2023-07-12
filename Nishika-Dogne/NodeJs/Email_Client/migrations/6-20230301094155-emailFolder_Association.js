



const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.createTable('emailFolder_Association', {
    Email_id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      references:{model:'Emails',key:'id',onDelete: 'CASCADE',
      onUpdate: 'CASCADE',},
      
     } ,
     Folder_Id:{
      type:Sequelize.INTEGER,
      primaryKey: true,
      references:{model:'Email_Folder',key:'id',onDelete: 'CASCADE',
      onUpdate: 'CASCADE',}
    },
    
  });
 
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('emailFolder_Association');
}

module.exports = { up, down };