let initialTime = $("#timer").text();  
let field = $(".type-field");                            //variavel do campo

$(document).ready(() => {

   updateSize();
   countInit();
   chronometerInit();
   $("#btn-restart").click(gameReset);

})


function updateSize(){
   let sentence = $(".sentence").text();                    //frase esctita
   let wordSize = sentence.split(" ").length;               //conta as palavras pela separação de espaço e armazena na vairavel
   let sentenceSize = $("#sentence-size");                  //o tamanho de caracteres ns frase
   sentenceSize.text(wordSize);                             //contador de caracteres
}


function countInit(){
 
   field.on("input", () => {                             //on click event, do something

      let content = field.val();                         //pega valor do input

      let wordQtd = content.split(/\S+/).length -1;      //conta por split 
      $("#word-counter").text(wordQtd);                  //contador de palavras

      let characterQtd = content.length;                 //contador de caracteres
      $("#char-counter").text(characterQtd);
   });                                

}


function chronometerInit () {

   let timer = $("#timer").text();                       //variavel do contator

   field.one("focus", () => {                            //quando entrar no campo de digitação, começe a diminuir o tempo

      let interval = setInterval( () => {
         
         timer--;
         $("#timer").text(timer); 
         if(timer < 1){
            field.attr("disabled", true);                //desabilita campo quando contador chegar a 0
            clearInterval(interval);                     //finaliza o contador quando o timer chegar a 0
         }
         
      }, 1000);

   });
}


function gameReset() {
   
      field.attr("disabled", false);
      field.val("");
      $("#word-counter").text("0");
      $("#char-counter").text("0");
      $("#timer").text(initialTime);     
      chronometerInit();      
   
}

