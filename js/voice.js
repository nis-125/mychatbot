const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("You can speak now!!")
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
} 

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    // speech.pitch = '10';
    // speech.rate = '1.5';
    // if(text.includes('time'))
    // speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes() + " right now";
    // else if(text.includes('my birthday'))
    // speech.text = "Do you really THINK you r famous!. how the hell do i know it";
    // else if(text.includes('love'))
    // speech.text = "Of course , not! lol";
    window.speechSynthesis.speak(speech);
}