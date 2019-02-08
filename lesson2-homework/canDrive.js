const FirstName = 'Ryan';
const LastName = 'Petersen';
const Age = 38;
const MinAge = 16;

if (Age >= MinAge) {
  console.log(FirstName + ' ' + LastName + ' can drive. ' + 'Driving experience: ' + (Age - MinAge) + ' years');
} else {
  for (i = 5; i > 0; i--) {
    console.log(i);
  }
}
