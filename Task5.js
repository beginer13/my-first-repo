// task5 _________________________________________________________________
// Дан произвольный массив. Необходимо вывести количество элементов
 // массива, затем перебрать его и вывести в консоль каждый элемент массива

let arr = [91,3,4,5,75]
console.log ("Array length is " + arr.length)
arr.map(function(item, index, array) {
  return console.log(item)
})
