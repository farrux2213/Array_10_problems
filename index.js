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
let towns = ["uzb", "rus", "afg", "usa", "kor", "kaz"];

console.log(
  towns.filter((value, index) => {
    return value === "uzb";
  })
);
console.log(
  towns.filter((value, index) => {
    return value === "usa";
  })
);
console.log(
  towns.filter((value, index) => {
    return value === "kor";
  })
);
