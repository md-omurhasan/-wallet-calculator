document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawValue =  getInputFieldById('withdraw')
    const withdrawTextValue = getTextelementById('withdraw-text')
    const totalWithdraW = withdrawValue + withdrawTextValue 
    setElementTextById('withdraw-text',totalWithdraW)
    const balanceNew = getTextelementById('balance-text')
    const balanceTotal = balanceNew - withdrawValue
    setElementTextById('balance-text',balanceTotal)
})