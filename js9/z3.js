const arr1 = [1, 2, 3, 4];
const arr2 = [3, 8, 1, 9, 10];
let arr = [];

for(i = 0; i < arr1.length; i++){ 
    if(arr.indexOf(arr1[i]) == -1){
        arr.push(arr1[i])
    }
    }
for(i = 0; i < arr2.length; i++){ 
    if(arr.indexOf(arr2[i]) == -1){
            arr.push(arr2[i])
 }
 }

 console.log(arr1)
 console.log(arr2)
 console.log(arr)
