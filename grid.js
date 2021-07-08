



function validate(){

   
    var name=document.form.name.value;
    var cardn=document.form.card.value;
    var date=document.form.date.value;
    var cvv=document.form.cvv.value;
    
   
    //bool=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    if (name.length<2){
alert('enter valid name')
     return false
        
    }
    if (cardn.length<1){
        alert('enter your card number');
        return false
    }
    if (date.length<1){
        alert('enter the expiry date');
        return false
    }
    if (cvv.length<3){
        alert(' invalid');
        return false
    }
   
return true
    }






