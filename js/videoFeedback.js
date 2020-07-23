function play() {
    if (player.pause) {
        player.play();
    }

    audioPlay(); //sound feedback

    blinkPlay(); //visual feedback
    document.getElementById("result").innerHTML = "play";

    window.navigator.vibrate(50); //tactile feedback
    
    console.log("play"); //log
}


function pause() {
    if (player.play) {
        player.pause();
    }

    audioPause(); //sound feedback

    blinkPause(); //visual feedback
    document.getElementById("result").innerHTML = "pause";

    window.navigator.vibrate(50); //tactile feedback
    
    console.log("pause"); //log
}


function volumeMais() {
    setVolume(.1) //up by 10%
    
    audioMaisVolume(); //sound feedback
    blinkMaisVolume(); //visual feedback
    document.getElementById("result").innerHTML = "mais volume";

    window.navigator.vibrate(50); //tactile feedback
    
    console.log("mais volume"); //log     
}


function volumeMenos() {
    setVolume(-.1); //down by 10%
    
    audioMenosVolume(); //sound feedback

    blinkMenosVolume(); //visual feedback
    document.getElementById("result").innerHTML = "menos volume";

    window.navigator.vibrate(50); //tactile feedback

    console.log("menos volume"); //log     
}


function avancar() {
    setTime(10);
    
    audioAvancar(); //sound feedback

    blinkAvancar(); //visual feedback
    document.getElementById("result").innerHTML = "avançar";

    window.navigator.vibrate(50); //tactile feedback

    console.log("avançar"); //log
}


function retroceder() {
    setTime(-10);
    
    audioRetroceder(); //sound feedback

    blinkRetroceder(); //visual feedback
    document.getElementById("result").innerHTML = "retroceder";

    window.navigator.vibrate(50); //tactile feedback
    
    console.log("retroceder"); //log        
}