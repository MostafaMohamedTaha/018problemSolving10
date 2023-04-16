//(((((((((((((31)))))))))))))
// Write a JavaScript program to find the largest of three given integers.
// let a=(n1,n2,n3)=>n1>n2&&n1>n3?n1:n2>n1&&n2>n3?n2:n3
// console.log(a(111,22,3))
//(((((((((((((32)))))))))))))
// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// let a = (n1, n2) =>
//   n1 > n2 && n1 < 100
//     ? n1
//     : n2 > n1 && n2 < 100
//     ? n2
//     : n1 > n2 && n1 > 100
//     ? n2
//     : n1;
// console.log(a(112, 13));
// console.log(a(1, 13));
//(((((((((((((33)))))))))))))
// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
// let a = (n1, n2) =>
//   (n1 > 40 && n1 < 60 && n2 > 40 && n2 < 60) ||
//   (n1 > 70 && n1 < 100 && n2 > 70 && n2 < 100);
// console.log(a(50, 89));
// console.log(a(50, 55));
//(((((((((((((34)))))))))))))
// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
// let a = (n1, n2) =>
//   n1 >= 40 && n2 >= 40 && n1 <= 60 && n2 <= 60
//     ? n1 === n2
//       ? "same"
//       : n1 > n2
//       ? n1
//       : n2
//     : "not in the range";
// console.log(a(40, 50));
// console.log(a(40, 70));
//(((((((((((((35)))))))))))))
// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
// let a = (str) => str.includes("2", "3", "4");
// console.log(a("mostafa,5"));
// console.log(a("mostafa2,5"));
//(((((((((((((36)))))))))))))
// Write a JavaScript program to check whether the last digit of the three given positive integers is same. //digit <0 n1%10 is the digit
// let a = (n1, n2, n3) =>
//   n1 > 0 && n2 > 0 && n3 > 0
//     ? n1 % 10 == n2 % 10 && n1 % 10 == n3 % 10
//       ? "the same digit"
//       : "not same"
//     : "Enter Postive value";
// console.log(a(20,30,400))
// console.log(a(-20,30,400))
//(((((((((((((37)))))))))))))
// Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
// let a = (str) =>
//   str.length < 3
//     ? str.toUpperCase()
//     : str.substring(0, 3) + str.substring(3).toUpperCase();
// console.log(a("javascript"));
// console.log(a("js"));
//(((((((((((((38)))))))))))))
// Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
// let a=(grad,exam)=>grad>=90?(exam>=89&&exam<=100?true:false):false
// console.log(a(90,89))
//(((((((((((((39)))))))))))))
// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
// let a=(n1,n2)=>n1+n2>=50&&n1+n2<=80?65:80
// console.log(a(10,50))
// console.log(a(10,90))
//(((((((((((((40)))))))))))))
// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
// let a = (n1, n2) =>
//   n1 == 8 ||
//   n2 == 8 ||
//   (n1 > n2 ? (n1 - n2 == 8 ? true : false) : n2 - n1 == 8 ? true : false)
//     ? true
//     : false;
// console.log(a(7,8))
// console.log(a(16,8))
// console.log(a(24,32))
// console.log(a(17,18))