const LASTFM_API_KEY = "8a9d1b7046f57b17a8fd122bb46f714f";


const tabs = document.querySelectorAll("nav button");

const pages = [
    "home",
    "explore",
    "search",
    "library"
];

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{

        tabs.forEach(button=>{
            button.classList.remove("active");
        });

        tab.classList.add("active");

        document.querySelectorAll(".page").forEach(page=>{
            page.classList.remove("active-page");
        });

        document.getElementById(pages[index])
        ?.classList.add("active-page");

    });
});



// PLAY BUTTON

const playButton = document.querySelector(".play-button");

let playing = false;

playButton?.addEventListener("click",()=>{

    playing = !playing;

    playButton.classList.toggle(
        "playing",
        playing
    );

});



// PROGRESS

const progress = document.querySelector(".progress-bar");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const songLength = 210;

function formatTime(seconds){

    const minutes = Math.floor(seconds/60);

    const secs = seconds % 60;

    return `${minutes}:${secs
    .toString()
    .padStart(2,"0")}`;

}


progress?.addEventListener("input",()=>{

    let value = Number(progress.value);

    currentTime.textContent =
    formatTime(value);

    let percent =
    (value/songLength)*100;

    progress.style.background =
    `linear-gradient(
    to right,
    white ${percent}%,
    #333 ${percent}%,
    #333 100%)`;

});



// VOLUME

const volume = document.querySelector(".volume-bar");

volume?.addEventListener("input",()=>{

    let percent = volume.value;

    volume.style.background =
    `linear-gradient(
    to right,
    white ${percent}%,
    #333 ${percent}%,
    #333 100%)`;

});





// LAST FM

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





// IMAGE FINDER

function getImage(track){

    return (
        track.image?.[3]?.["#text"] ||
        track.album?.image?.[3]?.["#text"] ||
        ""
    );

}





// EXPLORE


async function loadExplore(){

const container =
document.getElementById(
"explore-results"
);


if(!container) return;


const data =
await lastFM(
"chart.getTopTracks",
{
limit:20
}
);


const tracks =
data.tracks?.track;


if(!tracks) return;



container.innerHTML="";



tracks.forEach(track=>{


const card =
document.createElement("div");


card.className =
"music-card explore-card";



let image =
getImage(track);



card.innerHTML = `

<img class="card-cover"
src="${image}">


<div>

<h3>${track.name}</h3>

<p>${track.artist.name}</p>

</div>

`;



card.onclick=()=>{

updatePlayer(
track.name,
track.artist.name,
image
);


};



container.appendChild(card);



});


}





// SEARCH


const searchInput =
document.querySelector(
"#search-input"
);



searchInput?.addEventListener(
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



showSearchResults(
data.results?.trackmatches?.track
);


});





function showSearchResults(tracks){


const container =
document.getElementById(
"search-results"
);



if(!container || !tracks)
return;



container.innerHTML="";



tracks.forEach(track=>{


const card =
document.createElement("div");


card.className =
"music-card explore-card";



card.innerHTML = `

<h3>${track.name}</h3>

<p>${track.artist}</p>

`;



card.onclick=()=>{

updatePlayer(
track.name,
track.artist,
""
);

};



container.appendChild(card);



});


}






// PLAYER UPDATE


function updatePlayer(song,artist,image){


document.getElementById(
"song-title"
).textContent=song;



document.getElementById(
"artist-name"
).textContent=artist;



if(image){

document.getElementById(
"album-cover"
).src=image;

}


}




window.addEventListener(
"load",
()=>{

loadExplore();

}
);loadExplore();