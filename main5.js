//(((((((((((((((41)))))))))))))))
// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
// let a=(n1,n2,n3)=>n1==n2&&n2==n3?30:n1==n2||n2==n3?40:20
// console.log(a(2,2,2))
// console.log(a(2,2,1))
// console.log(a(2,0,1))
//(((((((((((((((42)))))))))))))))
// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
// let a=(n1,n2,n3)=>n1<n2&&n2<n3?`Strict Mode`:n3>n2?`Soft Mode`:`undefined`
// console.log(a(10,15,31))
// console.log(a(24,22,31))
// console.log(a(50,21,15))
//(((((((((((((((43)))))))))))))))
// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
// let a=(n1,n2,n3)=>n1>0&&n2>0&&n3>0?(n1%10==n2%10||n2%10==n3%10?true:false):false
// console.log(a(22,32,42))
// console.log(a(102,302,2))
// console.log(a(20,22,45))
//(((((((((((((((44)))))))))))))))
// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others
// let a = (n1, n2, n3) =>
//   (n1 >= 20 && (n1 < n2||n1 < n3 ))
//   ||
//   (n2 >= 20 && (n2 < n1|| n2 < n3))
//    ||
//   (n3 >= 20 && (n3 < n2|| n3 < n1))
// console.log(a(23, 45, 10));
// console.log(a(23, 23, 10));
// console.log(a(21, 66, 75));
// function lessby20_others(x, y, z) {
//   return (
//     (x >= 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (z >= 20 && (z < y || z < x))
//   );
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));
//(((((((((((((((45)))))))))))))))
// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
// let a=(n1,n2)=>n1==15||n2==15||(n1+n2==15||n1-n2==15)
// console.log(a(15, 9));
// console.log(a(25, 15));
// console.log(a(7, 8));
// console.log(a(25, 10));
// console.log(a(5, 9));
// console.log(a(7, 9));
// console.log(a(9, 25));
//(((((((((((((((46)))))))))))))))
// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.
// let a = (n1, n2) =>
//   (!((n1 % 7 == 0 || n1 % 11 == 0) && (n2 % 7 == 0 || n2 % 11 == 0))
//     ? n1 % 7 == 0 || n1 % 11 == 0 || n2 % 7 == 0 || n2 % 11 == 0
//     : false);

// console.log(a(14, 21));
// console.log(a(14, 20));
// console.log(a(16, 20));
//(((((((((((((((47)))))))))))))))
// Write a JavaScript program to check whether a given number is presents in the range 40..1000.
// For example 40 presents in 40 and 4000.
// let a=(n)=>n>=40&&n<=1000
// console.log(a(10001))
// console.log(a(1000))
// console.log(a(1))
//(((((((((((((((48)))))))))))))))
// Write a JavaScript program to reverse a given string.
// let a=(str)=>str.split('').reverse().reduce((a,b)=>a+b)
// console.log(a('most'))
//(((((((((((((((49)))))))))))))))
// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. following a=>b

// let a=(str)=> {
//   let str1 = str.split("");
//   for (let i = 0; i < str1.length; i++) {
//     str1[i] = String.fromCharCode(1 + str1[i].charCodeAt(0));
//   }
//   return str1.reduce((a,b)=>a+b);
// }
// console.log(a("PYTHON"));
// console.log(a("W3R"));
// console.log(a("php"));
//(((((((((((((((50)))))))))))))))
// Write a JavaScript program to capitalize the first letter of each word of a given string.
// let a=(str)=>{
//     let b=str.split(' ')
//     for (let index = 0; index < b.length; index++) {
//         b[index] = b[index][0].toUpperCase()+b[index].slice(1);
//     }
//     return b.join(' ')
// }
// console.log(a('most mohamed tah'))
