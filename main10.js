//(((((((((((((((91)))))))))))))))
// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
// let a = (arr, k) => {
// {
//     let res = 0;
//     let sum = 0;
//     for (var i = 0; i < k - 1; i++) {
//         sum += arr[i];
//     }
//     for (var i = k - 1; i < arr.length; i++) {
//         sum += arr[i];
//         sum > res ? (res = sum) : "";
//         sum -= arr[i - k +1];
//     }
//     return res;
// }
// };
// console.log(a([1, 2, 3, 14, 5], 2));
// console.log(a([2, 3, 5, 1, 6], 3));
// console.log(a([9, 3, 5, 1, 7], 2));
//(((((((((((((((92)))))))))))))))
// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
// let a=(arr)=>{
//     let max=0,tmp=0;
//     for (let index = 0; index < arr.length-1; index++) {
//         tmp=Math.abs(arr[index]-arr[index+1])
//         max=Math.max(max,tmp)
//     }
//     return max
// }
// console.log(a([1, 2, 3, 8, 9]))
// console.log(a([1, 2, 3, 18, 9]))
// console.log(a([13, 2, 3, 8, 9]))
//(((((((((((((((93)))))))))))))))
// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
// let a=(arr)=>{
//     var min=0,max=0;
//     // for (let index = 0; index < arr.length; index++) {
//         max=Math.max(...arr);
//         min=Math.min(...arr);
//     // }
//     return Math.abs(max-min)
// }
// console.log(a([1, 2, 3, 8, 9]))
// console.log(a([1, 2, 3, 18, 9]))
// console.log(a([13, 2, 3, 8, 9]))
//(((((((((((((((94)))))))))))))))
// Write a JavaScript program to find the number appearing most frequently in a given array of integers.
// let a = (arr) => {
// let n=0,arr1=[];
// for (let index = 0; index < arr.length; index++) {
//     arr1.push(0)
// }
// for (let index = 0; index < arr.length; index++) {
//     arr1[arr[index]-1]++
//     arr1[arr[index]-1]>arr1[n]?n=arr[index]-1:''
// }
// return n+1
//   var arr1 = []; // array of arr1.
//   var max = 0; // holds the max arr1.
//   var result; // holds the max arr1 element.
//   for (var v in arr) {
//     arr1[arr[v]] = (arr1[arr[v]] || 0) + 1; // increment arr1.
//     if (arr1[arr[v]] > max) {
//       // is this arr1 > max so far ?
//       max = arr1[arr[v]]; // update max.
//       result = arr[v]; // update result.
//     }
//   }
//   return result
// };
// console.log(a([1, 2, 3, 2, 2, 8, 1, 9]));
// console.log(a([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]));

//(((((((((((((((95)))))))))))))))
// Write a JavaScript program to replace all numbers with a specified number in an array of integers.
// let a=(arr,n,r)=>{
//     for (let index = 0; index < arr.length; index++) {
//         arr[index]==n?arr[index]=r:''
//     }
//     return arr
// }
// console.log("Original Array: "+a([1, 2, 3, 2, 2, 8, 1, 9]));
// console.log(a([1, 2, 3, 2, 2, 8, 1, 9], 2, 3));
//(((((((((((((((96)))))))))))))))
// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
// let a=(arr)=>{
//     var n=0;
//     for (let index = 1; index < arr.length; index++) {
//         n+=Math.abs(arr[index]-arr[index-1])
//     }
//     return n
// }
// console.log(a([1, 2, 3, 2, -5]));
//(((((((((((((((97)))))))))))))))
// Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
// let a = (new_str) => {
//   let flag;
//   for (let i = new_str.length; ; i++) {
//     flag = true;
//     for (var j = 0; j < i - j - 1; j++) {
//       if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       for (var j = new_str.length; j < i; j++) {
//         new_str += new_str[i - j - 1];
//       }
//       return new_str;
//     }
//   }
// };
// console.log(a("abcddc"));
// console.log(a("122"));

// check comprehend
// let a=(str)=>{
//     var convert=true;
//     for(var strW=str.length;;strW++){
//         convert=true;
//         for(var strL=0;strL<strW-strL;strL++){
//             if(strW-strL<str.length&&str[strL]!=str[strW-strL]){
//                 convert=false;break;
//             }
//         }
//         if(convert){
//             for(var strL=str.length;strL<strW;strL++){
//                 str+=str[strW-strL]
//             }
//         return str
//         }
//     }
// }
// console.log(a("abcddc"));
// console.log(a("122"));
// let a=(str)=>{
//     var convert;
//     for(var strW=str.length;;strW++){
//         convert=true
//         for(var strL=0;strL<strW-strL-1;strL++){
//             if(strW-strL-1<str.length&&str[strL]!=str[strW-strL-1]){
//                 convert=false;break;
//             }
//         }
//         if(convert){
//             for(var strL=str.length;strL<strW;strL++){
//                 str+=str[strW-strL-1]
//             }
//             return str
//         }
//     }
// }
// console.log(a('1anna'))
// console.log(a('11322'))
//(((((((((((((((98)))))))))))))))
// Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. //most is upper change to upper and the same lower
// let a=(str)=>{
//     var up='',low=''
//     for(var l=0;l<str.length;l++){
//         /[a-z]/.test(str[l])?low++:up++
//     }
//     let word=low>up?str.toLowerCase():str.toUpperCase()
//     return word
// }
// console.log(a("Write"))
// console.log(a("PHp"))
//(((((((((((((((99)))))))))))))))
// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
// let a=(str1,str2)=>{
//     let first=str1.split('').sort()
//     let second=str2.split('').sort()
//     let result=true
//     for(let letter=0;letter<first.length;letter++){
//         first[letter]!=second[letter]?result=false:result
//     }
//     return result
// }
// console.log(a("xyz", "zyx"))
// console.log(a("xyz", "zyp"))
//(((((((((((((((100)))))))))))))))
// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers
//one number is common
// let a=(arr1,arr2)=>{
//     let result=false
//     for(let n1=0;n1<arr1.length;n1++){
//         arr2.indexOf(arr1[n1]) >- 1?result=true:result
//     }
//     return result
// }
// console.log(a([1,2,3], [3,4,5]));   
// console.log(a([1,2,3], [5,6,7]));   
