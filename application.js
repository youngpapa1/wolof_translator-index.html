var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector("#output-text");


function getTranslationUrl(text){
    translated = "naga def"
    outputText.innerText = translated
    return;
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
