//problem_one_1
// var numbers = [20, 18, 2, 40, 293];
// var sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

//problem_two_2
// var words = ["salom", "hayer", "bino", "avtomobil", "velosipedlar", "rels"];
// var uzunSoz = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > uzunSoz) {
//     uzunSoz = words[i].length;
//   }
// }
// console.log(`Eng uzun sozning uzunligi: ${uzunSoz}`);

//problem_three_3
// var numbers = [3, 5, 21, 8, 19];
// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   var ortachaQiymat = sum / numbers.length;
// }

// console.log(ortachaQiymat);

//problem_four_4
// let towns = ["uzb", "rus", "afg", "usa", "kor", "kaz"];

// console.log(
//   towns.filter((value, index) => {
//     return value === "uzb";
//   })
// );
// console.log(
//   towns.filter((value, index) => {
//     return value === "usa";
//   })
// );
// console.log(
//   towns.filter((value, index) => {
//     return value === "kor";
//   })
// );
//problem_five_5
// var numbers = [3, 5, 21, 8, 19, 23, 8.0];
// var maxNum = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maxNum) {
//     maxNum = numbers[i];
//   }
// }

// console.log(`Sonlar ichida eng kattasi: ${maxNum}`);

//problem_six_6
// var alphabit = ["h", "r", "s", "a", "b", "d", "c"];

// console.log(alphabit.sort());

//problem_seven_7

// // Array of numbers
// var numbersArray = [10, 20, 30, 40, 50];

// // Find the index of a specific number (e.g., 30)
// var numberToFind = 30;
// var index = numbersArray.findIndex(function(num) {
//     return num === numberToFind;
// });

// // Output the index
// console.log("Index of", numberToFind, "is", index);

//problem_eight_8
// var words = [
//   "yoshi",
//   "ogirligi",
//   "60kg",
//   "18",
//   "jinsi",
//   "Farrukh",
//   "ismi",
//   "erkak",
// ];

// console.log(words[6] + ":  " + words[5]);
// console.log(words[0] + ":  " + words[3]);
// console.log(words[4] + ":  " + words[7]);
// console.log(words[1] + ":  " + words[2]);

//problem_nine_9
// var numbers_one = [28, 22, 56, 99, 11, 84, 39];
// var numbers_two = [67, 93, 83, 77, 7, 10];

// console.log([...numbers_one, ...numbers_two]);

//problem_ten_10_chatGPT_3.5
// Array of strings with duplicates
// var stringsArray = ["apple", "banana", "orange", "apple", "grape", "banana"];

// Convert array to set to remove duplicates, then convert back to array
// var uniqueStringsArray = Array.from(new Set(stringsArray));

// Output the unique array
// console.log(uniqueStringsArray);
