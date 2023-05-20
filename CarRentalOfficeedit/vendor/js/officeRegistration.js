  var fname=document.querySelector('#fname');
  var lname=document.querySelector('#lname');
  var phone=document.querySelector('#phone');
  var email=document.querySelector('#email');
  var password=document.querySelector('#password');
  var repassword=document.querySelector('#repassword');
  var addbtn=document.getElementById('click');
  var deletebtn=document.getElementById('deleteBtn');
  var search = document.getElementById('search');
  var updatebtn = document.getElementById('update');
  var currentIndex=0;
  var Users=[];
  
  var isfnameValid=false;
  var islnameValid=false;
  var isphoneValid=false;
  var isemailValid=false;
  var ispassValid=false;
  var isrepassValid=false;
   console.log(updatebtn);
   updatebtn.style.display='none';
  if( JSON.parse(localStorage.getItem('Users')) == null){
    Users=[];
  
  }
  else{
    Users=JSON.parse(localStorage.getItem('Users'));
  }
  displayUsers();
  checkInputs();
  addbtn.addEventListener('click',function(e){
    e.preventDefault();
    addUser();
    clearInput();
    checkInputs();
    displayUsers();
  });

  function addUser(){
     var user={
      fname:fname.value,
      lname:lname.value,
      phone:phone.value,
      email:email.value,
      password:password.value,
      repassword:repassword.value
     }
     Users.push(user);
     localStorage.setItem('Users',JSON.stringify(Users));
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
  }

  function clearInput(){
    fname.value='';
      lname.value='';
      phone.value='';
      email.value='';
      password.value='';
      repassword.value='';
      fname.classList.remove('is-valid');
      lname.classList.remove('is-valid');
      phone.classList.remove('is-valid');
      email.classList.remove('is-valid');
      password.classList.remove('is-valid');
      repassword.classList.remove('is-valid');

      isfnameValid=false;
      islnameValid=false;
      isphoneValid=false;
      isemailValid=false;
      ispassValid=false;
      isrepassValid=false;
  }
  document.getElementById('clearbtn').onclick = function(){
    clearInput();
    checkInputs();
  };

 function checkInputs(){
   if(isfnameValid && islnameValid && isphoneValid && isemailValid && ispassValid && isrepassValid){
    addbtn.removeAttribute('disabled');
    updatebtn.removeAttribute('disabled');
    
   }
   else{
    addbtn.setAttribute('disabled','disabled');
    updatebtn.setAttribute('disabled','disabled');
   }
 }

 // display accounts for users
 function displayUsers(){
  var result=``;
  for(var i = 0 ;i < Users.length ; i++){
    result+=`
    <tr>
    <td>${i+1}</td> 
    <td>${Users[i].fname}</td>
    <td>${Users[i].lname}</td>
    <td>${Users[i].phone}</td>
    <td>${Users[i].email}</td>
    <td><button class="btn btn-info" onclick="getUser(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
    </tr>
    `
  }
  data.innerHTML=result;
 }
 
 // delete all users
 deletebtn.addEventListener('click',function(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Users = [];
      localStorage.setItem('Users',JSON.stringify(Users));
      data.innerHTML="";
      
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 });


 //delete User 
 function deleteUser(index){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        Users.splice(index,1);
        localStorage.setItem('Users',JSON.stringify(Users));
        displayUsers();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
 }

 // serach for User
 search.onkeyup = function (){
  var result=``;
  for(var i = 0 ; i < Users.length ; i++){
      if(Users[i].fname.toLowerCase().includes(search.value.toLowerCase()) ){
          result+=`
          <tr>
    <td>${i+1}</td>
    <td>${Users[i].fname}</td>
    <td>${Users[i].lname}</td>
    <td>${Users[i].phone}</td>
    <td>${Users[i].email}</td>
    <td><button class="btn btn-info" onclick="getUser(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
    </tr>
          `
        }
        data.innerHTML=result;
      }
  }

  


  // validation 
  // for First Name
  var FirstAlert=document.getElementById('FirstAlert');
  FirstAlert.style.display='none';
  fname.onkeyup = function (){
  var regex=/^[A-Z][a-z]{2,10}$/;
  if(regex.test(fname.value)){
    isfnameValid=true;
    if(fname.classList.contains('is-invalid')){
      fname.classList.replace('is-invalid','is-valid')
    }
    fname.classList.add('is-valid');
    FirstAlert.style.display='none';
   
  }
  else{
    FirstAlert.style.display='block';
    isfnameValid=false;
    if(fname.classList.contains('is-valid')){
      fname.classList.replace('is-valid','is-invalid')
    }
    fname.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for Last Name 
var LastAlert=document.getElementById('LastAlert');
LastAlert.style.display='none';
  lname.onkeyup = function (){
  var regex=/^[A-Z][a-z]{2,10}$/;
  if(regex.test(lname.value)){
    islnameValid=true;
    if(lname.classList.contains('is-invalid')){
      lname.classList.replace('is-invalid','is-valid')
    }
    lname.classList.add('is-valid');
    LastAlert.style.display='none';
   
  }
  else{
    LastAlert.style.display='block';
    islnameValid=false;
    if(lname.classList.contains('is-valid')){
      lname.classList.replace('is-valid','is-invalid')
    }
    lname.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for phone 
var PhoneAlert=document.getElementById('PhoneAlert');
PhoneAlert.style.display='none';
  phone.onkeyup = function (){
  var regex=/^\d{10}$/;
  if(regex.test(phone.value) ){
    isphoneValid=true;
    if(phone.classList.contains('is-invalid')){
      phone.classList.replace('is-invalid','is-valid')
    }
    phone.classList.add('is-valid');
    PhoneAlert.style.display='none';
   
  }
  else{
    PhoneAlert.style.display='block';
    isphoneValid=false;
    if(phone.classList.contains('is-valid')){
      phone.classList.replace('is-valid','is-invalid')
    }
    phone.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for email
var EmailAlert=document.getElementById('EmailAlert');
EmailAlert.style.display='none';
  email.onkeyup = function (){
  var regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(regex.test(email.value)){
    isemailValid=true;
    if(email.classList.contains('is-invalid')){
      email.classList.replace('is-invalid','is-valid')
    }
    email.classList.add('is-valid');
    EmailAlert.style.display='none';
   
  }
  else{
    EmailAlert.style.display='block';
    isemailValid=false;
    if(email.classList.contains('is-valid')){
      email.classList.replace('is-valid','is-invalid')
    }
    email.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for password
var PassAlert=document.getElementById('PassAlert');
PassAlert.style.display='none';
  password.onkeyup = function (){
  var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(regex.test(password.value)){
    ispassValid=true;
    if(password.classList.contains('is-invalid')){
      password.classList.replace('is-invalid','is-valid')
    }
    password.classList.add('is-valid');
    PassAlert.style.display='none';
   
  }
  else{
    PassAlert.style.display='block';
    ispassValid=false;
    if(password.classList.contains('is-valid')){
      password.classList.replace('is-valid','is-invalid')
    }
    password.classList.add('is-invalid');
    
    
  }
  checkInputs();
}

// for repassword
var RePassAlert=document.getElementById('RePassAlert');
RePassAlert.style.display='none';
  repassword.onkeyup = function (){
  var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(regex.test(repassword.value) && repassword.value == password.value){
    isrepassValid=true;
    if(repassword.classList.contains('is-invalid')){
      repassword.classList.replace('is-invalid','is-valid')
    }
    repassword.classList.add('is-valid');
    RePassAlert.style.display='none';
   
  }
  else{
    RePassAlert.style.display='block';
    isrepassValid=false;
    if(repassword.classList.contains('is-valid')){
      repassword.classList.replace('is-valid','is-invalid')
    }
    repassword.classList.add('is-invalid');
    
    
  }
  checkInputs();
}



function getUser(index){

  isfnameValid=true;
  islnameValid=true;
  isphoneValid=true;
  isemailValid=true;
  ispassValid=true;
  isrepassValid=true;
  checkInputs();
  updatebtn.removeAttribute('disabled');


  currentIndex=index;
  var user=Users[index];
  fname.value=user.fname;
  lname.value=user.lname;
  email.value=user.email;
  phone.value=user.phone;

  updatebtn.style.display='inline';
  addbtn.style.display='none';

}

updatebtn.onclick = function (e){
  e.preventDefault();
  updateUser();
  displayUsers();
  
  updatebtn.style.display='none';
  addbtn.style.display='inline';
  clearInput();
}

function updateUser(){
  var user={
    fname:fname.value,
    lname:lname.value,
    phone:phone.value,
    email:email.value,
    
   }

   var preUser=Users[currentIndex].fname;
   Users[currentIndex].fname=user.fname;
   Users[currentIndex].lname=user.lname;
   Users[currentIndex].phone=user.phone;
   Users[currentIndex].email=user.email;

   localStorage.setItem('Users',JSON.stringify(Users));
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: `User ${preUser} Updated Successfully`,
      showConfirmButton: false,
      timer: 1500
    })
    addbtn.setAttribute('disabled','disabled');
  

}

// for loaded div before open my page
$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('loaded');
  },3000)
    scrollTop.style.display='none';
});