var btnTranslate = document.querySelector("#translatebtn");
var txtInput = document.querySelector("#input-ctn");
var outputDiv = document.querySelector("#output-ctn");


var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input 
}

function errorHandler(error){
    console.log("error occured", error);
}


function clickHandler(){
    var inputText = txtInput.value;   // input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(reponse => reponse.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;   // output
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)