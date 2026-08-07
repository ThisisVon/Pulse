const buttons = document.querySelectorAll("nav button");

const pages = [
    "home",
    "search",
    "library"
];


// Bottom navigation switching

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {


        buttons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");



        document.querySelectorAll(".page").forEach(page => {

            page.classList.add("hidden");

        });



        const selectedPage = document.getElementById(pages[index]);

        if(selectedPage){

            selectedPage.classList.remove("hidden");

        }


    });


});




// Splash screen removal

window.addEventListener("load", () => {


    setTimeout(() => {


        const splash = document.querySelector(".splash");


        if(splash){

            splash.remove();

        }


    }, 3500);


});