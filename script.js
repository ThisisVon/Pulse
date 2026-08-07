const tabs = document.querySelectorAll("nav button");

const pages = [
    "home",
    "explore",
    "search",
    "library"
];




// PAGE SWITCHING

tabs.forEach((tab,index)=>{


    tab.addEventListener("click",()=>{


        tabs.forEach(button=>{

            button.classList.remove("active");

        });



        tab.classList.add("active");



        document.querySelectorAll(".page").forEach(page=>{

            page.classList.remove("active-page");

        });



        const selected =
        document.getElementById(pages[index]);



        if(selected){

            selected.classList.add("active-page");

        }



    });


});








// PLAY / PAUSE MORPH


const playButton =
document.querySelector(".play-button");



let playing = false;



if(playButton){


playButton.addEventListener("click",()=>{


playing = !playing;



playButton.classList.toggle(
"playing",
playing
);



});


}








// PROGRESS BAR


const progress =
document.querySelector(".progress-bar");


const currentTime =
document.getElementById("current-time");


const duration =
document.getElementById("duration");



const songLength = 210;



if(progress){


progress.max = songLength;



duration.textContent =
formatTime(songLength);




progress.addEventListener("input",()=>{


const value =
Number(progress.value);



currentTime.textContent =
formatTime(value);



const percent =
(value / songLength) * 100;



progress.style.background =

`linear-gradient(
to right,
white ${percent}%,
#333 ${percent}%,
#333 100%
)`;


});


}






function formatTime(seconds){


const minutes =
Math.floor(seconds / 60);



const secs =
seconds % 60;



return `${minutes}:${secs
.toString()
.padStart(2,"0")}`;


}








// SPLASH FADE


window.addEventListener("load",()=>{


const splash =
document.querySelector(".splash");



if(splash){


setTimeout(()=>{


splash.style.transition =
"opacity 1.2s ease";



splash.style.opacity="0";



setTimeout(()=>{


splash.remove();


},1200);



},2500);



}

});








// HAPTIC FEEDBACK

document.querySelectorAll("button").forEach(button=>{


button.addEventListener("click",()=>{


// Supported browsers

if(navigator.vibrate){

navigator.vibrate(10);

}


});


});