//((((((((((((((1))))))))))))))
// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
// let a=(input_str) =>{
//   var is_lower_case = function (symbol) {
//     if ("a" <= symbol && symbol <= "z") {
//       return true;
//     }
//     return false;
//   };

//   var is_upper_case = function (symbol) {
//     if ("A" <= symbol && symbol <= "Z") {
//       return true;
//     }
//     return false;
//   };

//   var is_first_char_lower = is_lower_case(input_str[0]),
//     is_first_char_upper = is_upper_case(input_str[0]);

//   if (!(is_first_char_lower || is_first_char_upper)) {
//     return false;
//   }

//   for (var i = 1; i < input_str.length; i++) {
//     if (i % 2) {
//       if (
//         is_lower_case(input_str[i]) === is_first_char_lower ||
//         is_upper_case(input_str[i]) === is_first_char_upper
//       ) {
//         return false;
//       }
//     } else {
//       if (
//         is_lower_case(input_str[i]) !== is_first_char_lower ||
//         is_upper_case(input_str[i]) !== is_first_char_upper
//       ) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(a("xYr"));
// console.log(a('XXyx'));
// let a=(str)=>{
//   var isLow=(strL)=>{
//     return 'a'<=strL&&strL<='z'?true:false
//   }
//   var isUp=(strU)=>{
//     return 'A'<=strU&&strU<='A'?true:false
//   }
//   var isFirstLow=isLow(str[0])
//   var isFirstUp=isUp(str[0])
//   if(!(isFirstLow||isFirstUp)){ //first req is latin
//     return false
//   }
//   for (let index = 0; index < str.length; index++) {
//     if(index%2){
//       isLow(str[index])===isFirstLow||
//       isUp(str[index])===isFirstUp
//       ?false
//       :isLow(str[index])!==isFirstLow||
//       isUp(str[index])!==isFirstUp
//     }
//   }
//   return true
// }
// console.log(a("xYr"));
// console.log(a('XXyx'));
//((((((((((((((2))))))))))))))
// Write a JavaScript program to find the number of inversions of a given array of integers.
// let a=(arr)=> {
//   var ctr = 0;
//   for (var i = 0; i < arr.length; i++) {
//       for (var j = i + 1; j < arr.length; j++) {
//           if (arr[i] > arr[j])
//             ctr++;
//       }
//   }
//   return ctr;
// }

// console.log(a([0, 3, 2, 5, 9]));
// console.log(a([1, 5, 4, 3]));
// console.log(a([10, 30, 20, -10]));
// let a=(arr)=>{
//   let counter=0;
//   for (let index = 0; index < arr.length; index++) {
//     for (let index2 = index+1; index2 < arr.length; index2++) {
//       if(arr[index]>arr[index2])counter++
//     }
//   }
//   return counter
// }
// console.log(a([0, 3, 2, 5, 9]));
// console.log(a([1, 5, 4, 3]));
// console.log(a([10, 30, 20, -10]));
//((((((((((((((3))))))))))))))
// Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

// let a='ssdsdf'
// console.log(a.slice(0,-1))

// let a=(num)=> {
//   var result = 0,
//       num_digits = [];
//   while (num) {
//       num_digits.push(num % 10);
//       num = Math.floor(num / 10);
//   }
//   for (var index_num = 0; index_num < num_digits.length; index_num++) {
//       var n = 0;
//       for (var i = num_digits.length - 1; i >= 0; i--) {
//           if (i !== index_num) {
//               n = n * 10 + num_digits[i];
//           }
//       }
//       result = Math.max(n, result);
//   }
//   return result;
// }

// console.log(a(100)); //10
// console.log(a(10)); //1
// console.log(a(1245)); //245

// ((((((first sol change to str and to number and check result))))))
// let a=(num)=>{
//   let n1=parseInt(num.toString().split('').slice(1).reduce((a,b)=>a+b))
//   let n2=parseInt(num.toString().split('').slice(0,-1).reduce((a,b)=>a+b))
//   return n1>n2?n1:n2
// }
// console.log(a(100)); //10
// console.log(a(10)); //1
// console.log(a(1245)); //245

// let a=10
// let b=parseInt(a)
// console.log(b)

// let a='10'
// let b=a.split('')
// console.log(b)

//((((((((((((((sec sol push result to arr and check arr and every el in the arr if delete first or div by 10 is bigger))))))))))))))
// let a=(num)=>{
//   var result=0,newNum=[]
//   while(num){
//     newNum.push(num%10)
//     num=Math.floor(num/10)
//   }
//   for (var index = 0; index < newNum.length; index++) {
//     var n=0;
//     for (var index2 = newNum.length-1; index2 >=0; index2--) {
//       if(index !==index2){n=n*10+newNum[index2]}
//     }
//     result=Math.max(n,result)
//   }
//   return result
// }
// console.log(a(100)); //10
// console.log(a(10)); //1
// console.log(a(1245)); //245
// let a=(num)=>{
//   let res=0,arr=[]
//   while(num){
//     arr.push(num%10) // 1245 [5,4,2,1]
//     num=Math.floor(num/10) // .5 floor=0
//   }
//   for (let index = 0; index < arr.length; index++) {
//     var n=0;
//     for (let index2 = arr.length-1; index2 >=0; index2--) {
//       if(index!=index2)n=n*10+arr[index2]
//     }
//         res=Math.max(n,res)
//   }
//   return res
// }
// console.log(a(100)); //10
// console.log(a(10)); //1
// console.log(a(1245)); //245
// let c=(num)=>{
//   let arr=[]
// while(num){
//   arr.push(num%10)
//   num=Math.floor(num/10)
// }
// return arr
// }
// console.log(c(1))
// console.log(c(10)); //1
// console.log(c(1245)); //245
//((((((((((((((4))))))))))))))
// Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.
// function different_values(ara, n) {
//     var max_val = -1;
//     for (var i = 0; i < ara.length; i++) {
//         for (var j = i + 1; j < ara.length; j++) {
//             var x = Math.abs(ara[i] - ara[j]);
//             if (x <= n) {
//                 max_val = Math.max(max_val, x)
//             }
//         }
//     }
//     return max_val
// }
// console.log(different_values([12, 10, 33, 34], 10));
// console.log(different_values([12, 10, 33, 34], 24));
// console.log(different_values([12, 10, 33, 44], 40));

// let a=(arr,n)=>{
//     let max=0;
//     for (let index = 0; index < arr.length; index++) {
//         for (let index2 = index+1; index2 < arr.length; index2++) {
//             let diff=Math.abs(arr[index]-arr[index2])
//             if(diff<=n){
//                 max=Math.max(diff,max)
//             }
//         }
//     }
//     return max
// }
// console.log(a([12, 10, 33, 34], 10));
// console.log(a([12, 10, 33, 34], 24));
// console.log(a([12, 10, 33, 44], 40));
//((((((((((((((5))))))))))))))
// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.
// function digit_to_one(num) {
//   var digitSum = function (num) {
//     var digit_sum = 0;
//     while (num) {
//       digit_sum += num % 10;
//       num = Math.floor(num / 10);
//     }

//     return digit_sum;
//   };

//   var result = 0;

//   while (num >= 10) {
//     result += 1;
//     num = digitSum(num);
//   }

//   return result;
// }

// console.log(digit_to_one(123));
// console.log(digit_to_one(156));
// var digitSum = function (num) {
//   var digit_sum = 0;
//   while (num) {
//     digit_sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return digit_sum;
// };
// console.log(digitSum(123))

// let a=(num)=>{
//   let b=(num)=>{
//     let sum=0;
//     while(num){
//       sum+=num%10
//       num=Math.floor(num/10)
//     }
//     return sum
//   }
//   let res=0
//   while(num>=10){
//     res+=1
//     num=b(num)
//   }
//   return res
// }
// console.log(a(123))
// console.log(a(156));
//((((((((((((((6))))))))))))))
// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
// let a=(n1,n2)=>{
//   if(n2==1){return n1}else{
//     while(n1%n2===0){
//       n1/=n2
//     }
//   }
//   return n1
// }
// console.log(a(-12, 2))
// console.log(a(13, 2))
// console.log(a(13, 1))
//((((((((((((((7))))))))))))))
// Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
// function arr_pairs(arr) {
//     var result = 0;
//     for (var i = 0; i < arr.length; i++)
//         {
//         for (var j = i + 1; j < arr.length; j++)
//             {
//               if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
//                 {
//                 result++;
//                 }
//          }
//       }
//     return result;
// }
// console.log(arr_pairs([1,2,3]))
// console.log(arr_pairs([2,4,6]))
// console.log(arr_pairs([2,4,16]))

// let a=(arr)=>{
//     let result=0;
//     for (let index = 0; index < arr.length; index++) {
//         for (let index2 = index+1; index2 < arr.length; index2++) {
//             arr[index]%arr[index2]===0||arr[index2]%arr[index]===0?result++:''
//         }

//     }
//     return result
// }
// console.log(a([1,2,3]))
// console.log(a([2,4,6]))
// console.log(a([2,4,16]))
//((((((((((((((8))))))))))))))
// Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
// function dot_product(vector1, vector2) {
//     var result = 0;
//     for (var i = 0; i < 3; i++) {
//       result += vector1[i] * vector2[i];
//     }
//     return result;
//   }
//   console.log(dot_product([1,2,3], [1,2,3]))
//   console.log(dot_product([2,4,6], [2,4,6]))
//   console.log(dot_product([1,1,1], [0,1,-1]))

// let a=(arr1,arr2)=>{
//     let result=0;
//     for (let index = 0; index < 3; index++) {
//         result+=arr1[index]*arr2[index]
//     }
//     return result
// }
//   console.log(a([1,2,3], [1,2,3]))
//   console.log(a([2,4,6], [2,4,6]))
//   console.log(a([1,1,1], [0,1,-1]))
//((((((((((((((9))))))))))))))
// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
// function sort_prime(num) {
//   var prime_num1 = [],
//     prime_num2 = [];
//   for (var i = 0; i <= num; i++) {
//     prime_num2.push(true);
//   }
//   for (var i = 2; i <= num; i++) {
//     if (prime_num2[i]) {
//       prime_num1.push(i);
//       for (var j = 1; i * j <= num; j++) {
//         prime_num2[i * j] = false;
//       }
//     }
//   }
//   return prime_num1;
// }

// console.log(sort_prime(5));
// console.log(sort_prime(11));
// console.log(sort_prime(23));
// let a = (num) => {
//   let arr = [],
//     checkArr = [];
//   for (let index = 0; index <= num; index++) {
//     checkArr.push(true);
//   }
//   //prime number start from 2 prime number can not divide except itself and 1
//   for (let index = 2; index <= num; index++) {
//     if (checkArr[index]) {
//       arr.push(index);
//       for (let index2 = 1; index2 * index <= num; index2++) {
//         checkArr[index * index2] = false;
//       }
//     }
//   }
//   return arr;
// };
// console.log(a(5));
// console.log(a(11));
// console.log(a(23));

// let b = (num) => {
//   let arr = [];
//   let checkArr = [];
//   for (let index = 0; index <= num; index++) {
//     checkArr.push(true);
//   }
//   for (let index = 2; index <= num; index++) {
//     if (checkArr[index]) {
//         arr.push(index);
//       for (let index2 = 1; index2 * index <= num; index2++) {
//         checkArr[index * index2] = false;
//       }
//     }
//   }
//   return arr;
// };
// console.log(b(5));
// console.log(b(11));
// console.log(b(23));
// function test(num) {
//   var arr = [];
//   for (var i = 1; i <= num; i++) {
//     var notPrime = false;
//     for (var j = 2; j < i - 1; j++) {
//       if (i % j === 0) {
//         notPrime = true;
//       }
//     }
//     if (notPrime === false) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(test(21));
// let a=(num)=>{
//     let arr=[],notPrime=false;
//     for (let index = 1; index <=num; index++) {
//         notPrime=false;
//         for (let index2 = 2; index2 <index-1; index2++) {
//             if(index%index2==0){notPrime=true}
//         }
//         notPrime==false?arr.push(index):''
//     }
//     return arr
// }
// console.log(a(21));
//((((((((((((((10))))))))))))))
// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
// Sample sequence = [1,2,3,4,5,6,7,8]
// Given number: 5
// Output: 2
// function find_numbers(arr_num, num) {
//     var result = 0;
//     for (var i = 0; i < arr_num.length; i++)
//     {
//         if (arr_num[i] % 2 === 0 && arr_num[i] !== num) {
//             result++;
//         }
//         if (arr_num[i] === num) 
//         {
//             return result;
//         }
//     }
//     return -1;
// }

// console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
// console.log(find_numbers([1,3,5,6,7,8], 6))
// let a=(arr,n)=>{
//     let result=0;
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]%2===0&&arr[index]!==n) {
//             result++
//         }
//         if (arr[index]===n) {
//             return result
//         }
//     }
//     return result-1
// }
// console.log(a([1,2,3,4,5,6,7,8], 5))
// console.log(a([1,3,5,6,7,8], 6))
