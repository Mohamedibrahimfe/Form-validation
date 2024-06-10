
let userInput=document.querySelector("[name=username]");
let ageInput=document.querySelector("[name=age]");
const z="www.google.com";
document.forms[0].onsubmit=function(e){
    let userValid=false;
    let ageValid=false;


    if(userInput.value!=="" && userInput.value.length<=10){
        userValid=true;
    }
    if(ageInput.value!==""){
        ageValid=true;
    }

    if(userValid===false||ageValid===false){
        e.preventDefault();
    }
    window.location.href=z;

}
document.links[0].onclick=function (e){
    e.preventDefault();
    
}