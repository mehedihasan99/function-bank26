function getInputValue (){
    const depositInput = document.getElementById("deposit-input");
    const addDepositValue = depositInput.value;
    depositInput.value = "";
    return addDepositValue;
}

// deposit even handler
document.getElementById("deposit-btn").addEventListener("click", function(){
    // deposit input
    const addDepositValue = getInputValue ();
    // current deposit
    const currentDeposit = document.getElementById("total-deposit");
    const currentDepositValue = currentDeposit.innerText;
    // total deposit 
    const totalDepositAmount = parseFloat(currentDepositValue) + parseFloat(addDepositValue);
    currentDeposit.innerText = totalDepositAmount;
    // set balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceValue = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(addDepositValue) + parseFloat(totalBalanceValue);
    totalBalance.innerText = totalBalanceAmount;
    depositInput.value = "";

})
// withdraw even handler
document.getElementById("withdraw-btn").addEventListener('click', function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = withdrawInput.value;
    // get total withdraw
    const totalWithdraw = document.getElementById("total-withdraw");
    const totalWithdrawValue =  totalWithdraw.innerText;
    const totalWithdrawAmount = parseFloat(withdrawInputValue) + parseFloat(totalWithdrawValue);
    totalWithdraw.innerText = totalWithdrawAmount;
    withdrawInput.value = "";
    // reduce main balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceValue = totalBalance.innerText;
    const totalBalanceAmount =parseFloat(totalBalanceValue) - parseFloat(withdrawInputValue);
    totalBalance.innerText = totalBalanceAmount;
})