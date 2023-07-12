const {Sequelize,Datatypes}= require('sequelize');
const sequelize= new Sequelize(
    'my_database',
    'root',
    'admin',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

   sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 const db={};
 db.Sequelize=Sequelize;
 db.sequelize=sequelize;

 db.users=require('./users')(sequelize,Datatypes);
 