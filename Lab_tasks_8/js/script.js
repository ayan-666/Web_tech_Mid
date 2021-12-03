function checkUsername(val){
    var check= /^[_a-z]+$/g;
    
    if(!check.test(val)){
        document.getElementById('checktext').innerHTML='only lower case latin letters and _ are allowed!';
        document.getElementById('checktext').style.color='red';
        document.getElementById('uname').value='';
    } else{
        document.getElementById('checktext').innerHTML='';

    }
    
  
}