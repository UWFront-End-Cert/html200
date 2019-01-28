const var1=4;
const var2=6;
const var3=9;
const var4=5;

x= ( var1 + var2) * var3;
y= x % var4;
z= x / var4;

if( y === 0){
  console.log('the product of the equation:'+'('+var1+'+'+var2+')'+'*'+var3+' ,divides into   '+var4+', '+z+' times.');
  console.log('('+var1+'+'+var2+')'+'*'+var3+'/'+var4+' has a remainder of 0');
}
else{
  console.log('this equation does not have a remainder of 0')
}
