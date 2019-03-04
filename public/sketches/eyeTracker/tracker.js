window.onload = function(){
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    var osc = new Tone.OmniOscillator();
    var env = new Tone.AmplitudeEnvelope();
    osc.connect(env);
    env.toMaster();
    osc.start();
    env.triggerAttack();
    startButton.addEventListener("click", function(event){
    	webgazer.resume();
    	console.log("eye tracking resumed");
    });
    stopButton.addEventListener("click", function(event){
    	webgazer.pause();
    	console.log("eye tracking paused");
        env.triggerRelease();
        osc.stop();
    });

    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        webgazer.util.bound(data);
        // var xprediction = data.x; //these x coordinates are relative to the viewport
        // var yprediction = data.y; //these y coordinates are relative to the viewport
        // console.log(elapsedTime); //elapsed time is based on time since begin was called
        // console.log("X: " + xprediction);
        // console.log("Y: " + yprediction);
        osc.frequency.value = data.x;
        
    }).begin()
    .showPredictionPoints(true);

}
