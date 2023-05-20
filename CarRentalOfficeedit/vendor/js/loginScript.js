$('#login-button').click(function () {
    $('#login-button').fadeOut("slow", function () {
        $("#container").fadeIn();
        TweenMax.from("#container", .4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to("#container", .4, { scale: 1, ease: Sine.easeInOut });
    });
}); 

$(".close-btn").click(function () {
    $('#login-button').fadeOut("slow", function () { });
    TweenMax.from("#container", .4, { scale: 1, ease: Sine.easeInOut });
    TweenMax.to("#container", .4, { left: "0px", scale: 0, ease: Sine.easeInOut });
    $("#container, #register-container, #forget-container").fadeOut(800, function () {
        $("#login-button").fadeIn(800);
    });
});  




var sign_up=document.querySelector('#Register');   
sign_up.addEventListener('click',function(){
    window.open('register-page.html');
    
})  

var email=document.querySelector('#email');
var password=document.querySelector('#password');
var addbtn=document.getElementById('log-in');
var LogIn=[];
var isemailValid=false;
var ispassValid=false;

checkInputs();

addbtn.addEventListener('click',function(){
    console.log('hi');
    LoginUser();
    clearInput();
    checkInputs();
})

function checkInputs(){
    if(isemailValid && ispassValid){
        addbtn.removeAttribute('disabled');
    }
    else{
        addbtn.setAttribute('disabled','disabled');
    }
}

function LoginUser(){
    var log={
        email:email.value,
        password:password.value
    }
  LogIn.push(log);
  localStorage.setItem('LogIn',JSON.stringify(LogIn));
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'User Added Successfully',
    showConfirmButton: false,
    timer: 1500
  })
}

 function clearInput(){
    email.value='';
    password.value='';
    email.classList.remove('is-valid');
    password.classList.remove('is-valid');
    isemailValid=false;
    ispassValid=false;
 }
// Validation 

//for Email


  email.onkeyup = function (){
  var regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(regex.test(email.value)){
    isemailValid=true;
    if(email.classList.contains('is-invalid')){
      email.classList.replace('is-invalid','is-valid')
    }
    email.classList.add('is-valid');
    
   
  }
  else{
    
    isemailValid=false;
    if(email.classList.contains('is-valid')){
      email.classList.replace('is-valid','is-invalid')
    }
    email.classList.add('is-invalid');
    
    
  }
  checkInputs();
}


// for password


  password.onkeyup = function (){
  var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(regex.test(password.value)){
    ispassValid=true;
    if(password.classList.contains('is-invalid')){
      password.classList.replace('is-invalid','is-valid')
    }
    password.classList.add('is-valid');
    
   
  }
  else{
    
    ispassValid=false;
    if(password.classList.contains('is-valid')){
      password.classList.replace('is-valid','is-invalid')
    }
    password.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for loaded div before open my page
$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('loaded');
  },3000)
    scrollTop.style.display='none';
});

    
   
    

   