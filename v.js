let video = document.getElementById("myvideo");
let button = document.getElementById("btn");

button.addEventListener('click',()=>{
    if(video.paused){
      video.play();
      button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else{
        video.pause();
      button.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
})