//(((((((((((((((((71)))))))))))))))))
// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
// let a=(arr)=>arr.length>=1?arr[0]===1||arr[arr.length-1]==1:''
// console.log(a([1, 3, 5]));
// console.log(a([1, 3, 5, 1]));
// console.log(a([2, 4, 6]));
//(((((((((((((((((72)))))))))))))))))
// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
// let a=(arr)=>arr[0]===arr[arr.length-1]
// console.log(a([10, 20, 30])); 
// console.log(a([10, 20, 30, 10])); 
// console.log(a([20, 20, 20])); 
//(((((((((((((((((73)))))))))))))))))
// Write a JavaScript program to reverse the elements of a given array of integers of length 3.
// let a=(arr)=>arr.reverse()
// console.log(a([5, 4, 3])); 
// console.log(a([1, 0, -1]));  
// console.log(a([2, 3, 1]));
// algorithm solution
// let a=(arr)=>arr.map((el,index,arr)=>arr[(arr.length-1)-index])
// console.log(a([5, 4, 3])); 
// console.log(a([1, 0, -1]));  
// console.log(a([2, 3, 1]));
//(((((((((((((((((74)))))))))))))))))
// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
// let a=(arr)=>{
//     for (let index = 0; index < arr.length; index++) {
//         arr[0]>arr[arr.length-1]?arr[index]=arr[0]:arr[index]=arr[arr.length-1]
//     }
//     return arr
// }
// console.log(a([20, 30, 40]));
// console.log(a([-7, -9, 0]));
// console.log(a([12, 10, 3]));
//(((((((((((((((((75)))))))))))))))))
// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
// let a=(arr1,arr2)=>{
//     let m1=arr1.length%2==0?arr1[(arr1.length-2)/2]:arr1[(arr1.length-1)/2]
//     let m2=arr2.length%2==0?arr2[(arr2.length-2)/2]:arr2[(arr2.length-1)/2]
//     let arr=new Array(m1,m2)
//     return arr
// }
// console.log(a([1, 2, 3,4], [1, 5, 6,7]));  
// console.log(a([3, 3, 3], [2, 8, 0]));  
// console.log(a([4, 2, 7], [2, 4, 5])); 
//(((((((((((((((((76)))))))))))))))))
// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
// let a=(arr)=>arr.length>=1?new Array(arr[0],arr[arr.length-1]):`Array Must Be More Than One Element`
// console.log(a([20, 20, 30]));
// console.log(a([5, 2, 7, 8]));
// console.log(a([17, 12, 34, 78])); 
//(((((((((((((((((77)))))))))))))))))
// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
// let a=(arr)=>arr.includes(1)||arr.includes(3)
// console.log(a([1, 5]));  
// console.log(a([2, 3]));  
// console.log(a([7, 5])); 
//(((((((((((((((((78)))))))))))))))))
// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3. 
// let a=(arr)=>!(arr.includes(1)||arr.includes(3))
// console.log(a([7, 8]));
// console.log(a([3, 2]));
// console.log(a([0, 1])); 
//(((((((((((((((((79)))))))))))))))))
// Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
// let a=(arr)=>arr.includes(30)||arr.includes(40)
// console.log(a([30, 30]));
// console.log(a([40, 40]));
// console.log(a([20, 20]));
// console.log(a([30]));
//(((((((((((((((((80)))))))))))))))))
// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
// let a=(arr)=>{
//     arr.length>0?[arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]:arr
//     return arr
// }
// console.log(a([1, 2, 3, 4]));  
// console.log(a([0, 2, 1]));  
// console.log(a([3])); 




