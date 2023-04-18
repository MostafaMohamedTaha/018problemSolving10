//((((((((((((((((61))))))))))))))))
// Write a JavaScript program to concatenate two strings except their first character.
// let a=(str1,str2)=>str1.slice(1)+str2.slice(1)
// console.log(a("PHP","JS"));
// console.log(a("A","B"));
// console.log(a("AA","BB"));
//((((((((((((((((62))))))))))))))))
// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
// let a = (str) =>  str.length >= 3
//     ? str.length % 2 == 1
//       ? str.slice(((str.length + 1) / 2) - 2, ((str.length + 1) / 2) + 1)
//       : str
//     : `must be more than 2 characters`;

// console.log(a("abcdefg"));
// console.log(a("HTML5"));
// console.log(a("Python"));
// console.log(a("PHP"));
// console.log(a("Exercises"));
//((((((((((((((((63))))))))))))))))
// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
// let a=(str)=>str.length>=3?str.slice(-3)+str.slice(0,-3):str
// console.log(a("Python"));
// console.log(a("JavaScript"));
// console.log(a("Hi"));
//((((((((((((((((64))))))))))))))))
// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
// let a = (str1, str2) =>
//   str1.length > str2.length
//     ? str1.slice(-str2.length) + str2
//     : str1 + str2.slice(-str1.length);
// console.log(a("Python", "JS"));
// console.log(a("ab", "cdef"));
//((((((((((((((((65))))))))))))))))
// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
// let a=(str)=>str>=6||str.toLowerCase().endsWith('script')
// console.log(a("JavaScript"));
// console.log(a("Java Script"));
// console.log(a("Java Scripts"));
//((((((((((((((((66))))))))))))))))
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
// let a=(str)=>str.toLowerCase().startsWith('los')||str.toLowerCase().startsWith('new')?str:''
// console.log(a("New York"));
// console.log(a("Los Angeles"));
// console.log(a("London"));
//((((((((((((((((67))))))))))))))))
// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
// let a=(str)=>str.toLowerCase().startsWith('p')||str.toLowerCase().endsWith('p')?str.slice(1,-1):str
// console.log(a("PythonP"));
// console.log(a("Python"));
// console.log(a("JavaScript"));
//((((((((((((((((68))))))))))))))))
// Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.
// let a=(str,n)=>str.length>=n?str.slice(0,n)+str.slice(-n):str
// console.log(a("JavaScript", 2));
// console.log(a("JavaScript", 3));
//((((((((((((((((69))))))))))))))))
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
// let a=(el)=>el[0]+el[1]+el[2]
// console.log(a([10, 32, 20]));  
// console.log(a([5, 7, 9])); 
// console.log(a([0, 8, -11]));
//((((((((((((((((70))))))))))))))))
// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
let a=(el)=>[el[1],el[2],el[0]]
console.log(a([3, 4, 5]));  
console.log(a([0, -1, 2]));  
console.log(a([7, 6, 5])); 

