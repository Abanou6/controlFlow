function submitFeedback(){
    alert('Thank you for your valuable feedback');
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedbackText;
}
const username = document.getElementById('name').Value;
const age = document.getElementById('age').Value;
const email = document.getElementById('email').Value;
const job = document.getElementById('job').Value;
const designation = document.getElementById('designation').Value;
const productType = document.getElementById('productType').Value;
const feedbackText = document.getElementById('feedbackText').Value;
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
document.addEventListener('keydown', function(event){
    if (event.key==='Enter'){
        submitFeedback();
    }
});
