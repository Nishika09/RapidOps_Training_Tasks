const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');
const path=require('path');

const sequelize = new Sequelize("email_db","root","admin",{ dialect: 'mysql',host:'localhost'});

const umzug = new Umzug({
  migrations: { glob: './migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// (async () => {
//   // Checks migrations and run them if they are not already applied. To keep
//   // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
//   // will be automatically created (if it doesn't exist already) and parsed.
//   await umzug.up();
// })();

umzug.up().then(()=>{
    console.log("migrations performed");
})
.catch((err)=>{
    console.log(`Error: ${err}`);
});