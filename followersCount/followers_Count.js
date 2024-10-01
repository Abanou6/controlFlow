let count = 0; // initialize count to 0
function increaseCount(){
    count++; // increment the count by 1
    displayCount(); //Display the count in HTML
    checkCountValue(); // Check count value and display messages
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; // Display the count in HTML
}
function checkCountValue(){
    if (count===10){
        alert("your instigram post gained 10 followers! Congratulations!");
    } else if (count===20){
        alert("your instigram post gained 20 followers! Keep it up!");
    }
}
function resetCount(){
    document.getElementById('countDisplay').innerHTML=0; // Reset the count in HTML
    alert("Followers count has been reset.");
}