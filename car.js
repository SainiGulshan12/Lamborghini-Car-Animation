function playAudio(){
var audio = document.createElement('audio');
audio.setAttribute('src', './Images/sound.mp3');
audio.loop=true;
audio.play()
}
document.addEventListener('click', playAudio);
