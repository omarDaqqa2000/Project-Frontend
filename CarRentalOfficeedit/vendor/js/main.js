

var Cars;
var images;
var test='';
var item=document.getElementById('getData');
var item2=document.getElementById('getData2');
var currentIndex=0;
var one=document.getElementById('slide-one');
var two=document.getElementById('slide-two');
var left=document.querySelector('#left'); 
var right=document.getElementById('right');
var scrollTop =document.querySelector('#Top');
var vpillstab = document.getElementById('v-pills-tab');
var vpillstabContent = document.getElementById('v-pills-tabContent');

var flag=false; 
if( JSON.parse(localStorage.getItem('Cars')) == null){
    Cars=[];
    
  } 
  else{
    Cars=JSON.parse(localStorage.getItem('Cars'));
  }

  if( JSON.parse(localStorage.getItem('images')) == null){
    images=[];
    
  } 
  else{
    images=JSON.parse(localStorage.getItem('images'));
  }
  
  
  function displayCarFromStorage(){
    var result=``;
    
    for(var i = 0 ; i < Cars.length ; i++){
        result+=`
        <a class="nav-link mb-3 px-2 py-3 shadow" id="v-pills-car${i+7}-tab" data-toggle="pill" href="#v-pills-car${i+7}" role="tab" aria-controls="v-pills-car${i+7}" aria-selected="false">
               
          <span class="font-weight-bold small text-uppercase">${Cars[i].carName}</span></a>
    `
    
    }
    vpillstab.innerHTML+=result;

    

}

function eee(){
  var result2=``;
  for(var i = 0 ; i < Cars.length ; i++){
    result2+=`
    <div class="tab-pane fade rounded p-5" id="v-pills-car${i+7}" role="tabpanel" aria-labelledby="v-pills-car${i+7}-tab">
    <div class="tab-content d-flex ">
     <img src="${Cars[i].imgSrc}" alt=""/>
     <div class="ms-5">
       <table class="table border-2 vehicle-features">
       <tbody> 
       <tr>
       <th colspan="3"><span class="price">$ ${Cars[i].carPrice}</span><span class="info">rent per day</span></th>
       </tr> 
       <tr>
       <td>Model </td>
       <td>${Cars[i].carModel}</td>
       </tr>
       <tr>
       <td>Doors</td>
       <td>${Cars[i].carDoor}</td>
       </tr>
       <tr>
       <td>Seats</td>
       <td>${Cars[i].carSeats}</td>
       </tr>
       <tr>
       <td>Luggage</td>
       <td>${Cars[i].carLuggage}</td>
       </tr>
       <tr>
       <td>Transmission</td>
       <td>${Cars[i].carGear}</td>
       </tr>
       <tr>
       <td>Air conditioning</td>
       <td>${Cars[i].carAir}</td>
       </tr>
       <tr>
       <td>Minimum age</td>
       <td>${Cars[i].carAge}</td>
       </tr>
       </tbody>
       </table>
       <div class="cars-button-holder">
         <a href="#" class="ms-2"><i class="fa-solid fa-calendar-days me-3"></i>RESERVE NOW</a>
       </div>
     </div>
    </div> 
   </div>
    
    `;
}
vpillstabContent.innerHTML+=result2;
}
displayCarFromStorage();
eee();


two.style.display='none';
left.style.opacity='0.3';
left.style.userselect='none';
$(document).ready(function(){
    $("#right").click(function(event){
        setTimeout(function(){ 
        event.preventDefault();
        flag=true;
        one.style.display='none';
        two.style.display='inline';
        right.style.opacity='0.3';
        right.style.userselect='none';
        left.style.opacity='1';
        left.style.userselect='all';
        }, 500); 
        

    });
});

$(document).ready(function(){
    $("#left").click(function(event){
        setTimeout(function(){ 
        event.preventDefault();
        flag=false;
        one.style.display='inline';
        two.style.display='none';
        left.style.opacity='0.3';
        left.style.userselect='none';
        right.style.opacity='1';
        right.style.userselect='all';
        }, 500); 
        
    });
}); 
 
// for loaded div before open my page
$(document).ready(function(){
   setTimeout(function(){
     $('body').addClass('loaded');
   },3000)
     scrollTop.style.display='none';
});

// button for scroll show and hide
scrollTop.addEventListener('click',function(e){
  e.preventDefault();
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })

   //$("html,body").animate({scrollTop:0},"slow"); 
});

// for show scroll top after 300 px
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('#Top').fadeIn();
    } else {
      $('#Top').fadeOut();
    }
  });


// href footer 
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top - 10;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});


// for image slider horizantal
$('.image-slider').on('mouseover', function(e) {
    "use strict";
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
      $('.image-slider').slickPrev(); 
    } else {
      $('.image-slider').slickNext();
    }
  }); 
  $('.image-slider').slick({
    arrows: true,
    infinite: true,
    pauseOnHover: false, 
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
 
  