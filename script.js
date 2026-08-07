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


    tabs.forEach(button=>{
        button.classList.remove("active");
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







// PLAY / PAUSE BUTTON


const playButton = document.querySelector(".play-button");

const playIcon = document.querySelector(".play-icon");

const pauseIcon = document.querySelector(".pause-icon");



let playing = false;



playButton.addEventListener("click", ()=>{


playing = !playing;



if(playing){


playIcon.style.display="none";


pauseIcon.style.display="block";



}

else{


playIcon.style.display="block";


pauseIcon.style.display="none";


}


});






// REMOVE SPLASH SCREEN


window.addEventListener("load", ()=>{


setTimeout(()=>{


const splash =
document.querySelector(".splash");



if(splash){

splash.remove();

}


},3500);



});