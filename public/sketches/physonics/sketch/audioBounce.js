function audioBounce(note) {
    var osc, env, filt;
    let att, dec, sus, rel;
    osc = new p5.Oscillator('sawtooth');
    env = new p5.Envelope();
    filt = new p5.LowPass();
    att = 0.001;
    dec = 0.2;
    sus = 0.4;
    rel = 2;

    filt.freq(note * 1.5);
    osc.freq(note);
    osc.disconnect();
    filt.process(osc);
    env.setADSR(att, dec, sus, rel);
    env.scale(0,1,0,.05);
    osc.amp(env);
    osc.start();
    env.play();
  }

function generateScale(f) {

    let a = pow(2, (1 / 12));
    let scaleFreqs = [f * pow(a, 0), f * pow(a, 2), f * pow(a, 4), f * pow(a, 5), f * pow(a, 7), f * pow(a, 9), f * pow(a, 11)];
    return scaleFreqs;
}