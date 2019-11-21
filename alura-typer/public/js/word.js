$("#btn-change").click(randomSentence);

function randomSentence(){

    $("#spinner").show();

    $.get("http://localhost:3000/frases/", changeRandomSentence)  //o comando get passa o endereço e uma função pra executar
    .fail( () => {

        $("#error").show();

        setTimeout( ()=>{
            $("#error").hide();
        }, 1500)
       
    })
    .always(() =>{
        $("#spinner").hide();
    })
}

function changeRandomSentence(data){
    
    let sentence = $(".sentence");
    let randomNumber = Math.floor(Math.random() * data.length);   //para usar um numero aleatorio o Math.floor arrendonda o numero atravess de um aleatorio
    sentence.text(data[randomNumber].texto);
    updateSize();
    updateTime(data[randomNumber].tempo);
    
}