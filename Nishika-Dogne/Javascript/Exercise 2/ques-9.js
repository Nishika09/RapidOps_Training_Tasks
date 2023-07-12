let UNIX_timestamp=1607518718;
    var a = new Date(UNIX_timestamp * 1000);
    let d=['sun','mon','tues','wed','thur','fri','sat'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var day= d[a.getDay()];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = day+' '+ date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    document.write(time);
  
  

