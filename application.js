var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector("#output-text");


function getTranslationUrl(text){
  outputText.innerTex ="";
  for(var i = 0; i < words.length; i++)
  {
    if(words[i].word.fr == text)
    {
      outputText.innerText = words[i].word.wo;
      return;
    }
  }
}

function errorHandler(error){
    console.log("error occured",error)
}
function clickEventHandler(){
    // outputText.innerText=inputText.value;

    var inputTxt = inputText.value;
    getTranslationUrl(inputTxt);

}
btnTranslate.addEventListener("click",clickEventHandler)

words =
  [
    {"word" : { "fr" : "bonjour", "wo" : "naga def" }},
    {"word" : { "fr" : "hello", "wo" : "naga def" }},
    {"word" : { "fr" : "こんにちは", "wo" : "naga def" }},
    {"word" : { "fr" : "un", "wo" : "benn" }},
    {"word" : { "fr" : "deux", "wo" : "ñaar" }},
    {"word" : { "fr" : "trois", "wo" : "ñett" }},
    {"word" : { "fr" : "quatre", "wo" : "ñeent" }},
    {"word" : { "fr" : "cinq", "wo" : "juróom" }},
    {"word" : { "fr" : "six", "wo" : "juróom-benn" }},
    {"word" : { "fr" : "sept", "wo" : "juróom-ñaar" }},
    {"word" : { "fr" : "huit", "wo" : "juróom-ñett" }},
    {"word" : { "fr" : "neuf", "wo" : "juróom-ñeent" }},
    {"word" : { "fr" : "dix", "wo" : "fukk" }}
];
