/*--SetVolume Functions--*/
	/*-- SetVolume: Altera o valor do volume do player utilizando o valor do volume atual --*/
	function setVolume(value){
	 var vol = player.volume;
	 vol += value;
	 if (vol >= 0 && vol <= 1) {
	    player.volume = vol;
	 } else {
	    player.volume = (vol < 0) ? 0 : 1;                        
	 }
	}

	/*--setTime: Altera o tempo do video de acordo com a posição atual--*/
	function setTime(tvalue){
	 if (tvalue == 0) {
	   player.currentTime = tvalue;
	 }
	 else {
	   player.currentTime += tvalue;
	 }
	}

/*--End SetVolume Functions--*/

/*--Audio Feedback Functions--*/
	/*--Permite indicar o caminho do som que será tocado no feedback e permite a chamada desses audio no body--*/
	var audioplay = new Audio('assets/play.mp3');
	var audiopause = new Audio('assets/pause.mp3');
	var audiomaisvolume = new Audio('assets/maisvolume.mp3');
	var audiomenosvolume = new Audio('assets/menosvolume.mp3');
	var audioavancar = new Audio('assets/avancar.mp3');
	var audioretroceder = new Audio('assets/retroceder.mp3');
	var audiomodoalternado = new Audio('assets/modoalternado.mp3');

	function audioPlay(){		
		audioplay.play();
	}
	function audioPause(){		
		audiopause.play();
	}
	function audioMaisVolume(){
		audiomaisvolume.play();
	}
	function audioMenosVolume(){
		audiomenosvolume.play();
	}
	function audioAvancar(){
		audioavancar.play();
	}
	function audioRetroceder(){
		audioretroceder.play();
	}
	function audioModoAlternado(){
		audiomodoalternado.play();
	}

/*--End Audio Feedback Functions--*/

/*--Static Color Feedback Functions--*/
	/*--Permite indicar a cor que será utilizada no feedback e permite a chamada dessa cor no body--*/
	var colorplay = "red"
	var colorplayfont = "white"
	var colorpause = "yellow"
	var colorpausefont = "black"
	var colormaisvolume = "blue"
	var colormaisvolumefont = "white"
	var colormenosvolume = "green"
	var colormenosvolumefont = "white"
	var coloravancar = "orange"
	var coloravancarfont = "white"
	var colorretroceder = "purple"
	var colorretrocederfont = "white"

	function colorPlay(){
		document.body.style.background = colorplay;
		document.getElementById("fontColor").style.color = colorplayfont;
	}
	function colorPause(){
		document.body.style.background = colorpause;
		document.getElementById("fontColor").style.color = colorpausefont;
	}
	function colorMaisVolume(){
		document.body.style.background = colormaisvolume;
		document.getElementById("fontColor").style.color = colormaisvolumefont;
	}
	function colorMenosVolume(){
		document.body.style.background = colormenosvolume;
		document.getElementById("fontColor").style.color = colormenosvolumefont;
	}
	function colorAvancar(){
		document.body.style.background = coloravancar;
		document.getElementById("fontColor").style.color = coloravancarfont;
	}
	function colorRetroceder(){
		document.body.style.background = colorretroceder;
		document.getElementById("fontColor").style.color = colorretrocederfont;
	}

/*--End Static Color Feedback Functions--*/

/*--Blink Color Feedback Functions--*/
	/*--Função para piscar a cor no body quando chamado--*/
	
	function blink(colorblink,colorfontblink){
		intervalo=0;
		for(nTimes=0;nTimes<1;nTimes++){
			intervalo += 200;
			setTimeout(
				function(){
				  document.bgColor = colorblink;
				  //document.style = colorfontblink;
				},intervalo);
			intervalo += 200;
			setTimeout("document.bgColor='#FFFFFF';",intervalo);
		}	
	}

	var colorplay_blink = "red"
	var colorplayfont_blink = "white"
	var colorpause_blink = "yellow"
	var colorpausefont_blink = "black"
	var colormaisvolume_blink = "blue"
	var colormaisvolumefont_blink = "white"
	var colormenosvolume_blink = "green"
	var colormenosvolumefont_blink = "white"
	var coloravancar_blink = "orange"
	var coloravancarfont_blink = "white"
	var colorretroceder_blink = "purple"
	var colorretrocederfont_blink = "white"

	function blinkPlay(){
		blink(colorplay_blink,colorplayfont_blink);
	}
	function blinkPause(){
		blink(colorpause_blink,colorpausefont_blink);
	}
	function blinkMaisVolume(){
		blink(colormaisvolume_blink,colormaisvolumefont_blink);
	}
	function blinkMenosVolume(){
		blink(colormenosvolume_blink,colormenosvolumefont_blink);
	}
	function blinkAvancar(){
		blink(coloravancar_blink,coloravancarfont_blink);
	}
	function blinkRetroceder(){
		blink(colorretroceder_blink,colorretrocederfont_blink);
	}

/*--End Blink Color Feedback Functions--*/
	


