// var count = 0;
var btn = document.getElementById("menuBtn");
var y = document.getElementById("header_id");
var p = document.getElementById("textDiv_id");

btn.addEventListener('click', e => {
  const x = document.getElementById("links_id");
  x.classList.toggle('open');
})