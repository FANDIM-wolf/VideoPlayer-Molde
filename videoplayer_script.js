/*

Video player for playing any videos in web-browser 

Author : Mikhail Shishov 
Email : fandimfromitaly@yandex.ru
*/

const player = document.getElementById('player');
    const video = document.getElementById("video");
    const play = document.getElementById('play');
    const position = document.getElementById('durationBar');
    const posH = position.firstElementChild;
    video.volume = 0.5;


    play.addEventListener('click' , ()=>{
        if(video.paused){
            video.play();
            play.style.backgroundImage = 'url(images/play.png)';
        }
        else{

            video.pause();
            play.style.backgroundImage = 'url(images/pause.png)';
        }
    });    
    
    function progressUpdate() {
	// Set position of playing
    const positionBar = document.getElementById("positionBar");
 
    positionBar.style.width = (video.currentTime / video.duration * 100)  + "%";
	
	// Set text in bar
	displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = (Math.round(video.currentTime*100)/100);
    }

    // rewind for some seconds
    position.addEventListener('click' ,(evt) => {
        // offsetx is x coordinate in div 
        //clientWidth
        video.currentTime = evt.offsetX / position.clientWidth * video.duration;
        
    });

// open full screen
function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}