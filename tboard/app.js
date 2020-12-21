var unoaudio = new Audio('audio/waaaa1.mp3');
var dosaudio = new Audio('audio/demacia.mp3');
var tresaudio = new Audio('audio/nooo.mp3')
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");

uno.onclick = function(){unoaudio.play();}
dos.onclick = function(){dosaudio.play();}
tres.onclick = function(){tresaudio.play();}

