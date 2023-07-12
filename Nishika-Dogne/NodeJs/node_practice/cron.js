const moment = require('moment');
var cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('running a task every second',moment.format('DD MMM YYYY hh:mm:ss'));
});
// var cron = require('node-cron');

// cron.schedule('* * * * * *', () => {
//   console.log('running every minute 1, 2, 4 and 5');
// });


