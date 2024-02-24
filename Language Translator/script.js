let languageOptions = document.querySelectorAll("select");
let fromTranslate = document.querySelector(".from-trans");
let toTranslate = document.querySelector(".to-trans");
let fromVoice = document.querySelector(".from");
let toVoice = document.querySelector(".to");
let copyBtn = document.querySelector(".copy-btn");
let countCharacters = document.querySelector(".code-len");
let swapLanguage = document.querySelector(".swap-lang");

languageOptions.forEach((get, con) => {
  for (let countryCode in language) {
    let selected;
    if (con == 0 && countryCode == "en-GB") {
      selected = "selected";
    } else if (con == 1 && countryCode == "hi-IN") {
      selected = "selected";
    }

    let option = `<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`;
    get.insertAdjacentHTML("beforeend", option);
  }
});

fromTranslate.addEventListener('input',function(){
    let content = fromTranslate.value;
    fromTranslateContent = languageOptions[0].value;
    totranslateContent = languageOptions[1].value;

    let tranlateLink = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromTranslateContent}|${totranslateContent}`;

    fetch(tranlateLink).then(translate => translate.json()).then(data=>{
        toTranslate.value = data.responseData.translatedText;
    })
})

fromVoice.addEventListener('click',function(){
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromTranslate.value);
    fromTalk.lang = languageOptions[0].value;
    speechSynthesis.speak(fromTalk);
})

toVoice.addEventListener('click',function(){
    let toTalk;
    toTalk = new SpeechSynthesisUtterance(toTranslate.value);
    toTalk.lang = languageOptions[1].value;
    speechSynthesis.speak(toTalk);
})


copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(toTranslate.value);
})

fromTranslate.addEventListener('keyup',function(){
    countCharacters.innerHTML = `${fromTranslate.value.length}/5,000`;
})

swapLanguage.addEventListener('click',function(){
    let tempText = fromTranslate.value;
    fromTranslate.value = toTranslate.value;
    toTranslate.value = tempText;

    let tempOption = languageOptions[0].value;
    languageOptions[0].value = languageOptions[1].value;
    languageOptions[1].value = tempOption;
})