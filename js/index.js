

setInterval(updateTime,1000);
function updateTime(){
    const timeContainer=document.querySelector('.time');
    timeContainer.innerText=new Date().toLocaleTimeString();
}

//const dateContainer=document.querySelector('.date');
//function formatDate(){
    
    //let today=new Date();
    //let date= today.getDate();
   // let month=today.getMonth();
   // let year=today.getFullYear();
    //let currentDate=`${date}/${month}/${year}`
    
    //dateContainer.innerText=currentDate;
   //}
   
   let currentIdx = 0;

   function showCurrentImage() {
    const serviceContainer1 = document.querySelector('.carousel-discription-of-services .service-first');
    const serviceContainer2 = document.querySelector('.carousel-discription-of-services .service-second');
    const serviceContainer3 = document.querySelector('.carousel-discription-of-services .service-thirth');
    const serviceContainer4 = document.querySelector('.carousel-discription-of-services .service-fourth');
    
}