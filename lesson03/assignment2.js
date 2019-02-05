let arrayStr = [];
let i=0;

arrayStr = ['My', 'dog', 'Jake', 'barked', 'at', 'the', 'mail', 'carrier', '.'];

console.log('Actual String: ' + arrayStr);

console.log('Output with forEach');
arrayStr.forEach(function(tempStr){
   if(i === 2){
   console.log(tempStr)};
   i++;
});

console.log('Output with for loop');
for(i = 0; i < arrayStr.length; i++){
   if (i === 2){
    console.log(arrayStr[i])};
};
