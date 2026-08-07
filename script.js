const button = document.getElementById("play");

let playing = false;


button.onclick = () => {

  playing = !playing;


  button.innerHTML =
  playing ? "⏸" : "▶";

};