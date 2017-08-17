function playAudio(phrase, category) {
    var fileName = phrase + '.wav';
    var location = 'clips' + '/' + category + '/' + fileName;
    var audio = new Audio(location);
    audio.play();
}
