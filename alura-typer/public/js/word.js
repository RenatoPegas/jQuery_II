$("#btn-change").click(randomSentence);

function randomSentence(){
    $.get("http://localhost:3000/frases", changeRandomSentence);
}

function changeRandomSentence(data){
    
    let sentence = $(".sentence");
    let randomNumber = Math.floor(Math.random() * data.length);
    sentence.text(data[randomNumber].texto);
    updateSize();
    updateTime(data[randomNumber].tempo);
    
}