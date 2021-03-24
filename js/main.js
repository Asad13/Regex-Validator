let type;
let expValueField = document.getElementById('expValue');

document.getElementById('expType').addEventListener('change',function(){
    if(this.value){
        type = this.value;
        expValueField.value = "";
        document.getElementById('feedback').style.visibility = 'hidden';
        if(expValueField.hasAttribute('disabled')){
            expValueField.removeAttribute('disabled');
            expValueField.style.backgroundColor = '#ffffff';
            expValueField.style.cursor = 'pointer';
        }
    }
});

function validateExp(exp){
    let regExp = null;
    switch(type){
        case 'email':
            regExp = /^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;
            break;
        case 'phone':
            regExp = /^(\+88|88)?01\d{9}$/;
            break;
        case 'postcode':
            regExp = /^\d{4}$/;
    }
    let fb = document.getElementById('feedback');
    if(regExp.test(exp)){
        var feedback = "It's a valid ";
        if(type == 'phone'){
            feedback += "phone number.";
        }else if(type == 'email'){
            feedback += "email address.";
        }else{
            feedback += "postal code."
        }
        fb.classList.remove('wrong');
        fb.classList.add('correct');
        fb.textContent = feedback;
    }else{
        var feedback = "It's not a valid ";
        if(type == 'phone'){
            feedback += "phone number.";
        }else if(type == 'email'){
            feedback += "email address.";
        }else{
            feedback += "postal code."
        }
        fb.classList.remove('correct');
        fb.classList.add('wrong');
        fb.textContent = feedback;
    }
    fb.style.visibility = 'visible';
}

document.getElementById('checker').addEventListener('submit',function(e){
    e.preventDefault();
    e.stopPropagation();
    if(expValueField.value == ""){
        expValueField.nextElementSibling.style.visibility = 'visible';
    }else{
        validateExp(expValueField.value);
    }
});

expValueField.addEventListener('keyup',function(){
    if(this.value){
        if(expValueField.nextElementSibling.style.visibility == 'visible'){
            expValueField.nextElementSibling.style.visibility = 'hidden';
        }
    }else{
        expValueField.nextElementSibling.style.visibility = 'visible';
    }
});

expValueField.addEventListener('focusin',function(){
    this.select();
});