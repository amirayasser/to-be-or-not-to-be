/* Write a function expect that helps developers test their code.
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */

var expect = function (val) {

    let obj = {
        toBe : (value)=>{
            if(value === val){
                return true
            } else {
                throw new Error('Not Equal');
            }
        },

        notToBe : (value)=>{
            if (value !== val) {
                return true
            } else {
                throw new Error('Equal');
            }
        },
    }
  
  
    return obj
};


try {
    expect(5).toBe(5); // This should not throw an error
    console.log(true);  // true
} catch (error) {
    console.error(error.message);
}
// ---------------------------------

try {
    expect(5).toBe(null); // This should throw an error with message "Not Equal"
} catch (error) {
    console.error(error.message);
}
// ---------------------------------

try {
    expect(5).notToBe(5); // This should throw an error with message "Equal"
} catch (error) {
    console.error(error.message); // This should print "Equal"
}
// ---------------------------------

try{
    expect(5).notToBe(null);  // true
    console.log(true);
}catch(error){
    console.error(error.message)
}
