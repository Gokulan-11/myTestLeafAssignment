// function intersection(arr1, arr2) {
//     //Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and`arr2`, it should appear only once in the result

//     let result = arr1.concat(arr2);

//     let uniqueNum = [];

//     for (let i = 0; i < result.length; i++) {
//         if (!uniqueNum.includes(result[i])) {
//             uniqueNum.push(result[i]);
//         }

//     }

//     return uniqueNum


// }

// console.log(intersection([2, 5, 6], [2, 9, 8]));

//3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is present in `arr2` and not already included in the result array

let ar1 = [4, 5, 6, 7, 8]
let ar2 = [4, 9, 3, 2, 5]

let result = [];

for (let j = 0; j < ar1.length; j++) {
    result.push(ar1[j]);

    
}
console.log(result);


// for (let z = 0; z < ar2.length; z++) {


// }



