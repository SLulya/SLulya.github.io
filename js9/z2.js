let pov_arr = [2, 2, 2, 9, 8, 5, 9, 4, 6, 7, 8, 4, 4, 3, 3, 5];
let arr = [];

for(i = 0; i < pov_arr.length; i++){ 
if(arr.indexOf(pov_arr[i]) == -1){
    arr.push(pov_arr[i])
}
}
console.log(pov_arr)
console.log(arr)
