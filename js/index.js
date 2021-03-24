

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
 
   const carouselImages=[
       'images/slider-fre-fly.jpg',
       'images/slider-kitesurfing.jpg',
       'images/slider-paragliding.jpg',
       'images/slider-wingsuit.jpg',
   ]

   let currentIdx = 0;

function showCurrentImage() {
    
    const imgContainer1 = document.querySelector('.services .image-first');
    const imgContainer2 = document.querySelector('.services .image-second');
    const imgContainer3 = document.querySelector('.services .image-thirth');
    const imgContainer4 = document.querySelector('.services .image-fourth');
    const img2Idx = currentIdx + 1 > carouselImages.length - 1 ? 0 : currentIdx + 1;      
    const img3Idx = img2Idx + 1 > carouselImages.length - 1 ? 0 : img2Idx + 1;
    const img4Idx = img3Idx + 1 > carouselImages.length - 1 ? 0 : img3Idx + 1;      
    imgContainer1.src =  carouselImages[currentIdx]; 
    imgContainer2.src =  carouselImages[img2Idx]; 
    imgContainer3.src =  carouselImages[img3Idx]; 
    imgContainer4.src =  carouselImages[img4Idx]
}

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 2000);

document.querySelector('.carousel-discription-of-services .next')
  .addEventListener('click', next);

document.querySelector('.carousel-discription-of-services .prev')
  .addEventListener('click', prev);
