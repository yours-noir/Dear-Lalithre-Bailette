function start() {
  document.body.classList.remove("not-loaded");
  document.querySelector(".Tiptap").style.display = "none";

  // Putar lagu
  const music = document.getElementById("bg-music");
  music.volume = 0.7;
  music.play();
}
