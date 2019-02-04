let drive_age =16;
let first_name1 = 'John';
let last_name1 = 'Smith';
let age1 = 24;
let first_name2 = 'Emma';
let last_name2 = 'Brown';
let age2 = 14;

if (age1>=drive_age){
  console.log( first_name1 + ' ' + last_name1 + ' can drive. ' + first_name1 + ' is driving since last ' + (age1 - drive_age) + ' years.')
} else if(age1<drive_age){
  console.log( first_name1 + ' ' + last_name1 + ' cannot drive. ' + first_name1 + ' can drive after ' + (age1 - drive_age) + ' years.')
};

if (age2>=drive_age){
  console.log( first_name2 + ' ' + last_name2 + ' can drive. ' + first_name2 + ' is driving since last ' + (age2 - drive_age) + ' years.')
} else if(age2<drive_age){
  console.log( first_name2 + ' ' + last_name2 + ' cannot drive. ' + first_name2 + ' can drive after ' + (drive_age - age2) + ' years.')
};
