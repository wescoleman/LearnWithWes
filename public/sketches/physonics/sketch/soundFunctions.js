function generateScale(f) {

    let a = pow(2, (1 / 12));
    let scaleFreqs = [f * pow(a, 0), f * pow(a, 2), f * pow(a, 4), f * pow(a, 5), f * pow(a, 7), f * pow(a, 9), f * pow(a, 11)];
    return scaleFreqs;
}