const LASTFM_API_KEY = "8a9d1b7046f57b17a8fd122bb46f714f";


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








// PLAY / PAUSE

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









// SKIP BUTTONS

const backButton =
document.querySelector(".back");


const forwardButton =
document.querySelector(".forward");



if(backButton){


backButton.addEventListener("click",()=>{


console.log("Previous song");


});


}



if(forwardButton){


forwardButton.addEventListener("click",()=>{


console.log("Next song");


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


progress.max=songLength;



duration.textContent =
formatTime(songLength);




progress.addEventListener("input",()=>{


const value =
Number(progress.value);



currentTime.textContent =
formatTime(value);



const percent =
(value/songLength)*100;



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
Math.floor(seconds/60);



const secs =
seconds % 60;



return `${minutes}:${secs
.toString()
.padStart(2,"0")}`;


}









// LAST.FM CONNECTION


async function lastFM(method,params={}){


const url =
new URL(
"https://ws.audioscrobbler.com/2.0/"
);



url.search =
new URLSearchParams({

method,

api_key:LASTFM_API_KEY,

format:"json",

...params

});



const response =
await fetch(url);



return await response.json();


}








// LOAD EXPLORE


async function loadExplore(){


const explore =
document.querySelector("#explore");



if(!explore)
return;



const data =
await lastFM(
"chart.getTopTracks",
{
limit:10
}
);



const tracks =
data.tracks?.track;



if(!tracks)
return;



const container =
document.createElement("div");



container.className =
"music-results";



tracks.forEach(track=>{


const card =
document.createElement("div");



card.className =
"music-card";



card.innerHTML=`

<h3>${track.name}</h3>

<p>${track.artist.name}</p>

`;



card.onclick=()=>{


updatePlayer(
track.name,
track.artist.name
);


};



container.appendChild(card);



});



explore.appendChild(container);


}









// SEARCH


const searchInput =
document.querySelector(".search-box input");



if(searchInput){


searchInput.addEventListener(
"input",
async()=>{


const query =
searchInput.value.trim();



if(query.length < 2)
return;



const data =
await lastFM(
"track.search",
{
track:query,
limit:10
}
);



const results =
data.results?.trackmatches?.track;



showSearchResults(results);



});


}








function showSearchResults(tracks){


if(!tracks)
return;



const search =
document.querySelector("#search");



let container =
document.querySelector(".search-results");



if(!container){


container =
document.createElement("div");


container.className =
"search-results";


search.appendChild(container);


}



container.innerHTML="";



tracks.forEach(track=>{


const card =
document.createElement("div");



card.className =
"music-card";



card.innerHTML=`

<h3>${track.name}</h3>

<p>${track.artist}</p>

`;



card.onclick=()=>{


updatePlayer(
track.name,
track.artist
);


};



container.appendChild(card);


});


}









// UPDATE PLAYER


function updatePlayer(song,artist){


const title =
document.querySelector(".player h2");

const artistName =
document.querySelector(".player p");



if(title)
title.textContent=song;



if(artistName)
artistName.textContent=artist;



}








// SPLASH


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





loadExplore();