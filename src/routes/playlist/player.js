const trackElements = document.getElementsByClassName('track__single');

for (let i = 0; i < trackElements.length; i++) {
    const trackElement = trackElements[i];
    const songTitleElement = trackElement.querySelector('.songTitle');
    const songImageElement = trackElement.querySelector('.songImage');
    const audioPlayer = trackElement.querySelector('.audioPlayer');

    songTitleElement.addEventListener('click', playSong);
    songImageElement.addEventListener('click', playSong);

    function playSong() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
}