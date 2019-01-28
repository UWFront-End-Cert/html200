const agereq=16
const user_firstname= 'An'
const user_lastname= 'Dam'
const user_age=14


age_delta= user_age-agereq
age_check= age_delta>0

if(age_check){
  console.log( user_firstname+' '+user_lastname+' can drive, he has been able to for '+age_delta+' years.');
}
else{
  for(i=5; i>=0; i--){
    console.log(i)
  }
}
