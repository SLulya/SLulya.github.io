let arr = [12, 34, 29, 47, 5, 19];
let max = arr[0];
let min = arr[0];

for(i = 0; i < arr.length; i++){ 
if(max < arr[i]){
    max = arr[i];
}
if (min > arr[i]){
   min = arr[i];
}
}

console.log(arr)
console.log(`Max ${max}`)
console.log(`Min ${min}`)
