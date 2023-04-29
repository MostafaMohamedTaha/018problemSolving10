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