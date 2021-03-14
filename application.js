var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector("#output-text");


function getTranslationUrl(text){
    return {
        "success": {
            "total": 1
        },
        "contents": {
            "translated": "\"\"",
            "text": "\"\"",
            "translation": "naga def"
        }
    }
}

function errorHandler(error){
    console.log("error occured",error)
}
function clickEventHandler(){
    // outputText.innerText=inputText.value;

    var inputTxt = inputText.value;
    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json=>{
        var translated = json.contents.translated;
        outputText.innerText = translated;
    }
    )
    .catch(errorHandler)

}
btnTranslate.addEventListener("click",clickEventHandler)
