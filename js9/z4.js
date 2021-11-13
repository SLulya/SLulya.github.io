const arr1 = [`Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`, `Нд`];
const arr2 = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
vsogo = 0;
min = arr2[1];
max = arr2[1];

console.log(`День - прибуток`)
for(i = 0; i < 7; i++){ 
console.log(`${arr1[i]} - ${arr2[i]};`);
vsogo = vsogo + arr2[i]
}
for(i = 0; i < arr2.length; i++){
    if(min > arr2[i]){
        min = arr2[i]
    }
    if(max < arr2[i]){
        max = arr2[i]
    }
}


console.log(`Загальний прибуток - ${vsogo} `)
console.log(`${arr1[arr2.indexOf(min)]} - ${min} `)
console.log(`${arr1[arr2.indexOf(max)]} - ${max} `)