const buttons =
document.querySelectorAll("nav button");


buttons.forEach(button=>{

button.onclick=()=>{

buttons.forEach(b=>{
b.classList.remove("active");
});


button.classList.add("active");

};

});