const tabs = document.querySelectorAll("nav button");

const pages = [
    "home",
    "explore",
    "search",
    "library"
];




// PAGE SWITCHING

tabs.forEach((tab, index)=>{

    tab.addEventListener("click", ()=>{


        tabs.forEach(btn=>{

            btn.classList.remove("active");

        });


        tab.classList.add("active");



        document.querySelectorAll(".page").forEach(page=>{

            page.classList.remove("active-page");

        });



        const selected = document.getElementById(pages[index]);


        if(selected){

            selected.classList.add("active-page");

        }


    });


});







// BUTTON PRESS ANIMATION FOR MOBILE

document.querySelectorAll("button").forEach(button=>{


    button.addEventListener("touchstart", ()=>{

        button.style.transform = "scale(.88)";

    });



    button.addEventListener("touchend", ()=>{

        button.style.transform = "scale(1)";

    });



    button.addEventListener("touchcancel", ()=>{

        button.style.transform = "scale(1)";

    });



});








// PLAY / PAUSE


const playButton = document.querySelector(".play-button");


let playing = false;



if(playButton){


playButton.addEventListener("click", ()=>{


playing = !playing;



playButton.classList.toggle(
"playing",
playing
);



});


}







// PROGRESS BAR


const progressBar = document.querySelector(".progress-bar");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");



const songLength = 210;



if(progressBar){



progressBar.max = songLength;



duration.textContent = formatTime(songLength);





progressBar.addEventListener("input", ()=>{


let current = Number(progressBar.value);



currentTime.textContent =
formatTime(current);



const percent =
(current / songLength) * 100;



progressBar.style.background =

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



const remaining =
seconds % 60;



return `${minutes}:${remaining
.toString()
.padStart(2,"0")}`;

}








// SPLASH SCREEN


window.addEventListener("load", ()=>{


const splash =
document.querySelector(".splash");



if(splash){


setTimeout(()=>{


splash.style.opacity="0";



splash.style.transition=
"opacity 1.2s ease";



setTimeout(()=>{


splash.remove();


},1200);



},2500);



}


});