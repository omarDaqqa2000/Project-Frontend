
var carName=document.querySelector('#carName');
var carModel=document.querySelector('#carModel');
var door=document.querySelector('#carDoor');
var seats=document.querySelector('#carSeats');
var Luggage=document.querySelector('#carLuggage');
var Transmission=document.querySelector('#cargearbox');
var Air=document.querySelector('#carAir');
var Age=document.querySelector('#carAge');
var Price=document.querySelector('#carPrice');
var addcar=document.getElementById('click');
var search = document.getElementById('search');
var updatebtn = document.getElementById('update');
let imgSrc;


var currentIndex=0;

var Cars=[];
 
var iscarNameValid=false;
var iscarModelValid=false;
var iscarDoorValid=false;
var iscarSeatsValid=false;
var iscarLuggageValid=false;
var iscarGearValid=false;
var iscarAirValid=false;
var iscarAgeValid=false;
var iscarPriceValid=false;
updatebtn.style.display='none';
if( JSON.parse(localStorage.getItem('Cars')) == null){
    Cars=[];
  
  }
  else{
    Cars=JSON.parse(localStorage.getItem('Cars'));
  }
  displayCar();
  checkInputs();
  
  function checkInputs(){
    if(iscarNameValid && iscarModelValid && iscarDoorValid && iscarSeatsValid && iscarLuggageValid && iscarGearValid && iscarAirValid && iscarAgeValid && iscarPriceValid){
        addcar.removeAttribute('disabled');
        updatebtn.removeAttribute('disabled');
        
    }
    else{
        addcar.setAttribute('disabled','disabled');
        updatebtn.setAttribute('disabled','disabled');
    }
  }
//console.log(addcar);
/*
$('.images img').on('click', () =>{
   imgSrc = $("img").attr('src')

  console.log(imgSrc);

})
*/
$('.carimage').on('click', function(e) {
   imgSrc = $(e.target).attr('src')
  //or
  //let imgSrc = $(this).attr('src')

  console.log(imgSrc);

})



addcar.onclick=(function(e){
    e.preventDefault();
    addCar();
    clearInput();
    checkInputs();
    displayCar();
    console.log(temp);
 })

 /** */

 /** */
   
// insert data 
function addCar(){ 
    var car={
        carName:carName.value,
        carModel:carModel.value,
        carDoor:door.value,
        carSeats:seats.value,
        carLuggage:Luggage.value,
        carGear:Transmission.value,
        carAir:carAir.value,
        carAge:carAge.value,
        carPrice:carPrice.value,
        imgSrc:imgSrc
        
        
    }
    Cars.push(car);
    localStorage.setItem('Cars',JSON.stringify(Cars));
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Car Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })

}

// reset input
function clearInput(){
    carName.value='';
    carModel.value='';
    door.value='';
    seats.value='';
    Luggage.value='';
    Transmission.value='';
    carAir.value='';
    carAge.value='';
    carPrice.value='';
    carName.classList.remove('is-valid');
    carModel.classList.remove('is-valid');
    door.classList.remove('is-valid');
    seats.classList.remove('is-valid');
    Luggage.classList.remove('is-valid');
    Transmission.classList.remove('is-valid');
    carAir.classList.remove('is-valid');
    carAge.classList.remove('is-valid');
    carPrice.classList.remove('is-valid');

     iscarNameValid=false;
     iscarModelValid=false;
     iscarDoorValid=false;
     iscarSeatsValid=false;
     iscarLuggageValid=false;
     iscarGearValid=false;
     iscarAirValid=false;
     iscarAgeValid=false;
     iscarPriceValid=false;
}
document.getElementById('clearbtn').onclick = function(){
  clearInput();
  checkInputs();
};

// display data
function displayCar(){
    var result=``;
    for(var i = 0 ; i < Cars.length ; i++){
        result+=`
    <tr>
    <td>${i+1}</td>
    <td>${Cars[i].carName}</td>
    <td>${Cars[i].carModel}</td>
    <td>${Cars[i].carDoor}</td>
    <td>${Cars[i].carSeats}</td>
    <td>${Cars[i].carLuggage}</td>
    <td>${Cars[i].carGear}</td>
    <td>${Cars[i].carAir}</td>
    <td>${Cars[i].carAge}</td>
    <td>${Cars[i].carPrice}</td>
    <td><button class="btn btn-info" onclick="getCar(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="deleteSpecificCar(${i})">Delete</button></td>
    </tr>
    `
    }
    data.innerHTML=result;
}


//delete all cars 
document.getElementById('deleteBtn').onclick=function(){
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
          Cars = [];
          localStorage.setItem('Cars',JSON.stringify(Cars));
          data.innerHTML="";
          
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

// for delete specific car 
function deleteSpecificCar(index){
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
            Cars.splice(index,1);
            localStorage.setItem('Cars',JSON.stringify(Cars));
            displayCar();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}


// for search car 
search.onkeyup = function (){
    var result=``;
    for(var i = 0 ; i < Cars.length ; i++){
        if(Cars[i].carName.toLowerCase().includes(search.value.toLowerCase()) ){
            result+=`
            <tr>
    <td>${i+1}</td>
    <td>${Cars[i].carName}</td>
    <td>${Cars[i].carModel}</td>
    <td>${Cars[i].carDoor}</td>
    <td>${Cars[i].carSeats}</td>
    <td>${Cars[i].carLuggage}</td>
    <td>${Cars[i].carGear}</td>
    <td>${Cars[i].carAir}</td>
    <td>${Cars[i].carAge}</td>
    <td>${Cars[i].carPrice}</td>
    <td><button class="btn btn-info" onclick="getCar(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="deleteSpecificCar(${i})">Delete</button></td>
    </tr>
            `
          }
          data.innerHTML=result;
        }
    }

    //get car to update it 
    function getCar(index){
      iscarNameValid=true;
     iscarModelValid=true;
     iscarDoorValid=true;
     iscarSeatsValid=true;
     iscarLuggageValid=true;
     iscarGearValid=true;
     iscarAirValid=true;
     iscarAgeValid=true;
     iscarPriceValid=true;
     checkInputs();
     updatebtn.removeAttribute('disabled');

        currentIndex=index;
        var car=Cars[index];
        carName.value=car.carName;
        carModel.value=car.carModel;
        door.value=car.carDoor;
        seats.value=car.carSeats;
        Luggage.value=car.carLuggage;
        Transmission.value=car.carGear;
        Air.value=car.carAir;
        Age.value=car.carAge;
        Price.value=car.carPrice;
        
        updatebtn.style.display='inline';
        addcar.style.display='none';

        

    }

    

    updatebtn.onclick = function (e){
        e.preventDefault();
        updateCar();
        displayCar();
        
        updatebtn.style.display='none';
        addcar.style.display='inline';
        clearInput();
      }

      // update the car information
      function updateCar(){
        var car={
            carName:carName.value,
            carModel:carModel.value,
            carDoor:door.value,
            carSeats:seats.value,
            carLuggage:Luggage.value,
            carGear:Transmission.value,
            carAir:carAir.value,
            carAge:carAge.value,
            carPrice:carPrice.value,
        }
        var preCar=Cars[currentIndex].carName;
        Cars[currentIndex].carName=car.carName;
        Cars[currentIndex].carModel=car.carModel;
        Cars[currentIndex].carDoor=car.carDoor;
        Cars[currentIndex].carSeats=car.carSeats;
        Cars[currentIndex].carLuggage=car.carLuggage;
        Cars[currentIndex].carGear=car.carGear;
        Cars[currentIndex].carAir=car.carAir;
        Cars[currentIndex].carAge=car.carAge;
        Cars[currentIndex].carPrice=car.carPrice;
        localStorage.setItem('Cars',JSON.stringify(Cars));
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Car ${preCar} Updated Successfully`,
      showConfirmButton: false,
      timer: 1500
    })
    addcar.setAttribute('disabled','disabled');
      }

      // Validation for Inputs

      // for carName 
      var carAlert=document.getElementById('nameAlert');
      carAlert.style.display='none';
      carName.onkeyup = function (){
      var regex=/^[A-Z][a-z]{2,10}$/;
      if(regex.test(carName.value)){
        iscarNameValid=true;
        if(carName.classList.contains('is-invalid')){
            carName.classList.replace('is-invalid','is-valid')
        }
        carName.classList.add('is-valid');
        carAlert.style.display='none';
       
      }
      else{
        carAlert.style.display='block';
        iscarNameValid=false;
        if(carName.classList.contains('is-valid')){
            carName.classList.replace('is-valid','is-invalid')
        }
        carName.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }

    // for Model
    var modelAlert=document.getElementById('modelAlert');
      modelAlert.style.display='none';
      carModel.onkeyup = function (){
      var regex=/^[0-9]{4}$/;
      if(regex.test(carModel.value)){
        iscarModelValid=true;
        if(carModel.classList.contains('is-invalid')){
            carModel.classList.replace('is-invalid','is-valid')
        }
        carModel.classList.add('is-valid');
        modelAlert.style.display='none';
       
      }
      else{
        modelAlert.style.display='block';
        iscarModelValid=false;
        if(carModel.classList.contains('is-valid')){
            carModel.classList.replace('is-valid','is-invalid')
        }
        carModel.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }


    // for Door 
    var doorAlert=document.getElementById('doorAlert');
      doorAlert.style.display='none';
      carDoor.onkeyup = function (){
      var regex=/^[2]|[4]{1}$/;
      if(regex.test(carDoor.value)){
        iscarDoorValid=true;
        if(carDoor.classList.contains('is-invalid')){
            carDoor.classList.replace('is-invalid','is-valid')
        }
        carDoor.classList.add('is-valid');
        doorAlert.style.display='none';
       
      }
      else{
        doorAlert.style.display='block';
        iscarDoorValid=false;
        if(carDoor.classList.contains('is-valid')){
            carDoor.classList.replace('is-valid','is-invalid')
        }
        carDoor.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }
      

    // for Seats
    var seatsAlert=document.getElementById('seatsAlert');
      seatsAlert.style.display='none';
      carSeats.onkeyup = function (){
      var regex=/^[4]|[7]{1}$/;
      if(regex.test(carSeats.value)){
        iscarSeatsValid=true;
        if(carSeats.classList.contains('is-invalid')){
            carSeats.classList.replace('is-invalid','is-valid')
        }
        carSeats.classList.add('is-valid');
        seatsAlert.style.display='none';
       
      }
      else{
        seatsAlert.style.display='block';
        iscarSeatsValid=false;
        if(carSeats.classList.contains('is-valid')){
            carSeats.classList.replace('is-valid','is-invalid')
        }
        carSeats.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }


    // for Luggage 
    var luggageAlert=document.getElementById('luggageAlert');
    luggageAlert.style.display='none';
      carLuggage.onkeyup = function (){
      var regex=/^[A-Z][A-Za-z0-9\s]{2,40}$/;
      if(regex.test(carLuggage.value)){
        iscarLuggageValid=true;
        if(carLuggage.classList.contains('is-invalid')){
            carLuggage.classList.replace('is-invalid','is-valid')
        }
        carLuggage.classList.add('is-valid');
        luggageAlert.style.display='none';
       
      }
      else{
        luggageAlert.style.display='block';
        iscarLuggageValid=false;
        if(carLuggage.classList.contains('is-valid')){
            carLuggage.classList.replace('is-valid','is-invalid')
        }
        carLuggage.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }

    //for Gear
    var gearAlert=document.getElementById('gearAlert');
      gearAlert.style.display='none';
      Transmission.onkeyup = function (){
      var regex=/^(?:auto|mannual)$/;
      if(regex.test(Transmission.value)){
        iscarGearValid=true;
        if(Transmission.classList.contains('is-invalid')){
            Transmission.classList.replace('is-invalid','is-valid')
        }
        Transmission.classList.add('is-valid');
        gearAlert.style.display='none';
       
      }
      else{
        gearAlert.style.display='block';
        iscarGearValid=false;
        if(Transmission.classList.contains('is-valid')){
            Transmission.classList.replace('is-valid','is-invalid')
        }
        Transmission.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }

    //for Air
    var airAlert=document.getElementById('airAlert');
    airAlert.style.display='none';
      Air.onkeyup = function (){
      var regex=/^(?:yes|no)$/;
      if(regex.test(Air.value)){
        iscarAirValid=true;
        if(Air.classList.contains('is-invalid')){
            Air.classList.replace('is-invalid','is-valid')
        }
        Air.classList.add('is-valid');
        airAlert.style.display='none';
       
      }
      else{
        airAlert.style.display='block';
        iscarAirValid=false;
        if(Air.classList.contains('is-valid')){
            Air.classList.replace('is-valid','is-invalid')
        }
        Air.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }

    // for min age 
    var ageAlert=document.getElementById('ageAlert');
    ageAlert.style.display='none';
      Age.onkeyup = function (){
      var regex=/^(0?\d|[1-4]\d|50)$/;
      if(regex.test(Age.value)){
        iscarAgeValid=true;
        if(Age.classList.contains('is-invalid')){
            Age.classList.replace('is-invalid','is-valid')
        }
        Age.classList.add('is-valid');
        ageAlert.style.display='none';
       
      }
      else{
        ageAlert.style.display='block';
        iscarAgeValid=false;
        if(Age.classList.contains('is-valid')){
            Age.classList.replace('is-valid','is-invalid')
        }
        Age.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }

    // for price 
    var priceAlert=document.getElementById('priceAlert');
    priceAlert.style.display='none';
      Price.onkeyup = function (){
      var regex=/^(?:[1-9][0-9]{0,4}(?:\.\d{1,2})?|100000|100000.00)$/;
      if(regex.test(Price.value)){
        iscarPriceValid=true;
        if(Price.classList.contains('is-invalid')){
            Price.classList.replace('is-invalid','is-valid')
        }
        Price.classList.add('is-valid');
        priceAlert.style.display='none';
       
      }
      else{
        priceAlert.style.display='block';
        iscarPriceValid=false;
        if(Price.classList.contains('is-valid')){
            Price.classList.replace('is-valid','is-invalid')
        }
        Price.classList.add('is-invalid');
        
        
      }
      checkInputs();
    }


    

/* for image */
/*
var imagesObject = [];

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
 
      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = function(e) {
          displayImgData(e.target.result)
          addImage(e.target.result);
      };

      reader.readAsDataURL(f);
    }
}

function loadFromLocalStorage(){
  var images = JSON.parse(localStorage.getItem("images"))

  if(images && images.length > 0){
    imagesObject = images;
    
    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}

function addImage(imgData){
  imagesObject.push(imgData);
  displayNumberOfImgs();
  localStorage.setItem("images", JSON.stringify(imagesObject));
}

function displayImgData(imgData){
  var span = document.createElement('span');
  span.innerHTML = '<img class="thumb" src="' + imgData + '"/>';
  document.getElementById('list').insertBefore(span, null);
}

function displayNumberOfImgs(){
  if(imagesObject.length > 0){

    document.getElementById("state").innerHTML = imagesObject.length + " image" + ((imagesObject.length > 1) ? "s" : "") + " stored in your browser";
    
    document.getElementById("deleteImgs").style.display = "inline";
    
  } else {
    document.getElementById("state").innerHTML = "No images stored in your browser.";
    document.getElementById("deleteImgs").style.display = "none";
  }
  
  
}

function deleteImages(){
  imagesObject = [];
  localStorage.removeItem("images");
  displayNumberOfImgs()
  document.getElementById('list').innerHTML = "";
}
 
document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('deleteImgs').addEventListener("click", deleteImages);
loadFromLocalStorage();

/**  */
/*
const input = document.getElementById('thumbnail');

input.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        localStorage.setItem('thumbnail', reader.result);
        
    });
});
*/

$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('loaded');
  },3000)
    scrollTop.style.display='none';
 });