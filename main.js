var bar = document.getElementById('bar');

var menu = document.getElementById('menu');
var dark = document.getElementById('moon')

bar.addEventListener('click', function() {

  if (menu.className === 'hidden') {
    menu.classList.remove('hidden');
  }
  else {
    menu.classList.add('hidden');
  }
});

dark.addEventListener('click', function() {

  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    dark.src = 'sun.jpg';
  } else {
    dark.src = 'moon.jpg';

  }
});


var music = document.getElementById('music');
var music_weav = document.getElementById('music_weav');

window.addEventListener('click',function(){
//  music.src = 'bg-music.mp3';
  music.play();
  music_weav.classList.remove('hidden');
  
})

