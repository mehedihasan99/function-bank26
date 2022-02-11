function getInputValue(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    return inputValue;
    
}
document.getElementById("submit-btn").addEventListener('click', function (){
    const inputMail = getInputValue("user-email");
    const inputPass = getInputValue("user-password");
    if(inputMail == "sylhet.web@gmail.com" && inputPass == "dhaka2022"){
        window.location.href='bank.html';
    }
})