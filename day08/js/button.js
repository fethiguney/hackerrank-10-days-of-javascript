document.getElementById("btn").addEventListener("click", function(){
    // Get the current value of the button
    let currentValue=parseInt(this.innerHTML);
    
    //Increment the value
    currentValue+=1;
    
    // Update the button's innerHTML with the new value
    this.innerHTML=currentValue;
    
    
})