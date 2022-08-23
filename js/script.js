function getInputFieldById(elementInputId){
    const elementInput = document.getElementById(elementInputId)
    const elemmentValue = elementInput.value 
    const elementConvertToText = parseFloat(elemmentValue)
    elementInput.value = ''
    return elementConvertToText
}
function getTextelementById(elementTextId){
    const elementText = document.getElementById(elementTextId);
    const elementTextValue = elementText.innerText
    const elementCoverTextToInt = parseFloat(elementTextValue)
    return elementCoverTextToInt
}
function setElementTextById(convertelement , newValue){
    const textValue = document.getElementById(convertelement)
   textValue.innerText = newValue 

}
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = getInputFieldById('deposit-input');
    const depositText = getTextelementById('deposit-text')
       const newdeposit = depositInput + depositText
       setElementTextById('deposit-text',newdeposit)
    const previousDepositValue = getTextelementById('balance-text')
    const newDepositValue = previousDepositValue + depositInput
    setElementTextById('balance-text',newDepositValue)
})