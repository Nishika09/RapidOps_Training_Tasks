let arr = [3, 2, 3, 3, 2, 4, 9, 3];
let mostfreq = 1;
let count = 0;
let item;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) count++;
    if (mostfreq < count) {
      mostfreq = count;
      item = arr[i];
    }
  }

  count=0;
}
document.write(item);