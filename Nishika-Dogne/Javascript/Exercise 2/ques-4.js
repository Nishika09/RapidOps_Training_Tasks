function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [0,1,2,3,4,5,6,7,8,9];
  shuffle(arr);
  alert(arr);