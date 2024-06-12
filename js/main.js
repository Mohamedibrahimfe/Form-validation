let firstNameInput=document.querySelector("[name=firstName]");
let lastNameInput=document.querySelector("[name=lastName]");
let emailInput=document.querySelector(".Email");
document.forms[0].onsubmit=function(e){
    let fUserValid=false;
    let lUserValid=false;
    let emailValid=false;
    
    if(firstNameInput.value!=="" && firstNameInput.value.length<=10){
        fUserValid=true;
    }
    if(lastNameInput.value!=="" && lastNameInput.value.length<=10){
        lUserValid=true;
    }
    if(emailInput.value!==""&& emailInput.value.includes("@")&&emailInput.value.includes(".")){
        emailValid=true;
    }

    if(fUserValid===false||lUserValid===false||emailValid===false){
        e.preventDefault();
    }

}
// document.querySelector(".button").onclick=(e)=>{
//     e.preventDefault();
// }
