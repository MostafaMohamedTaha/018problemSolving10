// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
//python=>python thon=>python
// function string_check (str1) {
//   if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
//     return str1
//   }
//   return `Py${str1}`
// }

// console.log(string_check('Python'))
// console.log(string_check('thon'))
//(((((((((((((((((21)))))))))))))))))
// let checkString = str =>
//     str === undefined || str === null || str.substring(0, 2) === 'Py'
//     ? str
//     : `Py${str}`
// console.log(checkString('Python'))
//(((((((((((((((((22)))))))))))))))))
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// function remove_character (str, char_pos) {
//   part1 = str.substring(0, char_pos)
//   part2 = str.substring(char_pos + 1, str.length)
//   return part1 + part2
// }

// console.log(remove_character('Python', 0))
// console.log(remove_character('Python', 3))
// console.log(remove_character('Python', 5))
// let remove=(str,charPos)=>{
//     part1=str.substring(0,charPos)
//     part2=str.substring(charPos+1,str.length)
//     return part1+part2
// }
// console.log(remove('python',0));
// console.log(remove('python',2));
// console.log(remove('python',4));
//(((((((((((((((((23)))))))))))))))))
// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
// function first_last (str1) {
//   if (str1.length <= 1) {
//     return str1
//   }
//   mid_char = str1.substring(1, str1.length - 1)
//   return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0)
// }
// console.log(first_last('a'))
// console.log(first_last('ab'))
// console.log(first_last('abc'))
// let a=(str)=>{
//     str.length<=1?str:''
//     mid=str.slice(1,str.length-1)
//     return str.charAt(str.length-1)+mid+str.charAt(0)
// }
// console.log(a('mostafa'));
//(((((((((((((((((24)))))))))))))))))
// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
// function front_back (str) {
//   first = str.substring(0, 1)
//   return first + str + first
// }
// let a=(str)=> str.charAt(0) +str +str.charAt(0)
// console.log(a('most'));
//(((((((((((((((((25)))))))))))))))))
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
// function test37 (x) {
//   if (x % 3 == 0 || x % 7 == 0) {
//     return true
//   } else {
//     return false
//   }
// }
// let a=(x)=>x%3==0 ||x%7==0
// console.log(a(13));
//(((((((((((((((((26)))))))))))))))))
// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
// let a=(str)=>str.slice(str.length-3)+str+str.slice(str.length-3)
// console.log(a('swift'))

// let a=(str)=>str.slice(str.length-3,str.length)+str+str.slice(str.length-3,str.length)
// console.log(a('swift'))
//(((((((((((((((((27)))))))))))))))))
// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
// let a=(str)=>str.toLowerCase().startsWith('java')
// console.log(a('javascript'))
//(((((((((((((((((28)))))))))))))))))
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
// let a=(num1,num2)=>num1>=50 && num1<=99|| num2>=50&& num2<=99?`${num1} , ${num2}`:'not in the range'
// console.log(a(55,56))
// console.log(a(155,123))
//(((((((((((((((((29)))))))))))))))))
// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
// let a=(n1,n2,n3)=>n1>=50&&n1<=99 ||n2>=50&&n2<=99 ||n3>=50&&n3<=99 ?true:false
// console.log(a(1,2,55))
//(((((((((((((((((30)))))))))))))))))
// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// let a=(str)=>str.slice(-6)==='script'?str.slice(0,-6):'111'
// console.log(a('javascript'))
// console.log(a('coffeescript'))

