const audioPlayer = document.getElementById('audioPlayer');


audioPlayer.addEventListener('play', () =>) {
    console.log('Cancion reproduciendose');
};

audioPlayer.addEventListener('pause', () =>) {
    console.log('Cancion pausada');
};

audioPlayer.addEventListener('ended', () =>) {
    console.log('Cancion terminada');
};



