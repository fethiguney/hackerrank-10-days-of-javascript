
function reverseString(s){
    try{
        //split the string into an array, reverse it, and join it back to a string
        let reversed=s.split('').reverse().join('');
        console.log(reversed);

    }catch(e){
        //if an error occurs, catch it and print the error message
        console.log(e.message);
        //print the original string
        console.log(s);
    
    
    }
}

reverseString("hello");