/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

player.addEventListener("click",()=>{
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
})

video.addEventListener('play', () => {
  toggle.textContent = '❚❚'; // Update to pause symbol
});
video.addEventListener('pause', () => {
  toggle.textContent = '►'; // Update to play symbol
});

video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime/video.duration)*100;
 // console.log(video.currentTime/video.duration);
  progressBar.style.flexBasis = `${progress}%`;
});

// Change the volume when the volume slider value changes
ranges[0].addEventListener('input', () => {
  video.volume = ranges[0].value;
});

// Change the playback rate when the playback rate slider value changes
ranges[1].addEventListener('input', () => {
  video.playbackRate = ranges[1].value;
});

skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});