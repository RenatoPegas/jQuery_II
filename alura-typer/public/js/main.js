let initialTime = $("#timer").text();  
let field = $(".type-field");                            //variavel do campo

$(document).ready(() => {

   updateSize();
   countInit();
   chronometerInit();
   avaliateField();
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
            field.toggleClass("disabled-field");           //adiciona classe css no campo 
         }
         
      }, 1000);

   });
}


function avaliateField(){

   let sentence = $(".sentence").text();

   field.on("input", () => {

      let digit = field.val();
      let compare = sentence.substr(0, digit.length);

      if(digit == compare){
         field.addClass("green-field");
         field.removeClass("red-field");
      }else{
         field.addClass("red-field");
         field.removeClass("green-field");
      }

   });
}

function gameReset() {
   
      field.attr("disabled", false);                     //volta a habilitar o campo
      field.val("");                                     //zera os caracterer do campo
      $("#word-counter").text("0");                      //zera contador de palavras
      $("#char-counter").text("0");                      //zera contador de caracteres
      $("#timer").text(initialTime);                     //volta o temporizador
      chronometerInit();                                 //reinicializa chronometro
      field.toggleClass("disabled-field");                
      field.removeClass("green-field");
      field.removeClass("red-field");
   
}

