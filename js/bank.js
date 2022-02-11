function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);
    inputField.value = "";
    return inputAmount;
}
function updateTotalInput(totalFieldId ,addDepositValue){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const totalAmount = parseFloat(totalText);
      // total deposit 
    const totalFieldAmount = totalAmount + addDepositValue;
    totalElement.innerText = totalFieldAmount;
}
function currentBalance(){
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceText);
    return totalBalanceValue;
}
function updateBalance(amount, isAdd){
    const totalBalance = document.getElementById("balance-total");
    // 
    const totalBalanceValue = currentBalance();
    if(isAdd == true){
        const totalBalanceAmount = amount + totalBalanceValue;
        totalBalance.innerText = totalBalanceAmount;
    }
    else{
        const totalBalanceAmount = totalBalanceValue - amount;
        totalBalance.innerText = totalBalanceAmount;
    }
    

}
// deposit even handler
document.getElementById("deposit-btn").addEventListener("click", function(){
    // deposit input
    const depositAmount = getInputValue ("deposit-input");
    if(depositAmount > 0){
        
        updateTotalInput("total-deposit", depositAmount);
        updateBalance(depositAmount, true)
    }
})
// withdraw even handler
document.getElementById("withdraw-btn").addEventListener('click', function(){
    const withdrawInputValue = getInputValue ("withdraw-input");
    const currentBalanceAmount = currentBalance();
    if(withdrawInputValue > 0 && withdrawInputValue < currentBalanceAmount){
        updateTotalInput("total-withdraw", withdrawInputValue)
        updateBalance(withdrawInputValue, false);
    }
    
})