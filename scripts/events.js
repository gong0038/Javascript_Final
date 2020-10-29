//events and validation
document.getElementById("name").addEventListener("blur", function(){
    if(this.value !== ""){
        nameWarning.innerHTML = "";
    }
});
document.getElementById("tel").addEventListener("blur", function(){
    if(this.value !== ""){
        telWarning.innerHTML = "";
    }
});
document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        addWarning.innerHTML = "";
    }
});
document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
    }
});
document.profile.addEventListener("submit", validate);