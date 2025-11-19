let checkBoxNew = document.getElementById("flexSwitchCheckChecked")
checkBoxNew.addEventListener("change",(e)=>{
        if(checkBoxNew.checked){
                checkBoxNew.value = true
        }else{
                checkBoxNew.value = false
        }
        e.preventDefault()
})

let checkBoxSale = document.getElementById("flexSwitchCheckDisabled")
checkBoxSale.addEventListener("change",(e)=>{
        if(checkBoxSale.checked){
                checkBoxSale.value = true
                console.log(checkBoxSale.value)
        }else{
                checkBoxSale.value = false
                console.log(checkBoxSale.value)
        }
        e.preventDefault()
})
