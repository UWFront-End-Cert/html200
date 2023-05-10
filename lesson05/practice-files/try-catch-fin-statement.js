// TRY-CATCH-FINALLY STATEMENTS
// Errors happen in JavaScript, you can handle errors with try/catch/finally blocks

try {
    console.log('Here is some error-prone code');
    const number = 0;
    number.toUpperCase();
} 
catch (error) {
    console.log('An error occurred', error);
}
finally {
    console.log('This runs if there is an error or no error');
}