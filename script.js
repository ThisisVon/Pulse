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



        const selectedPage = document.getElementById(pages[index]);



        if(selectedPage){

            selectedPage.classList.add("active-page");

        }


    });


});







// PLAY / PAUSE MORPH


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








// SPLASH ANIMATION


window.addEventListener("load", ()=>{


    const splash = document.querySelector(".splash");



    if(splash){


        setTimeout(()=>{


            splash.classList.add("hide");



            setTimeout(()=>{


                splash.remove();


            },1200);



        },2500);


    }


});