const buttons =
document.querySelectorAll("nav button");


const pages = [
"home",
"search",
"library"
];


buttons.forEach((button,index)=>{


button.onclick = ()=>{


buttons.forEach(btn=>{
btn.classList.remove("active");
});


button.classList.add("active");



document.querySelectorAll(".page")
.forEach(page=>{
page.classList.add("hidden");
});



document
.getElementById(pages[index])
.classList.remove("hidden");


};


});