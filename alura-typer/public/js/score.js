$("#btn-score").click(showScore);

function scoreInsert(){
    let tableBody = $(".score").find("tbody");
    let user = "Renato";
    let wordNumber = $("#word-counter").text();
   
    let tableLine = newLine(user, wordNumber);
    tableLine.find(".remove-buttom").click(removeLine);
 
    tableBody.append(tableLine); 

    $(".score").slideDown(1000);         
    scoreScroll();       
 }

 function scoreScroll(){
    
   let scorePosition = $(".score").offset().top;  //offset mostra a posição do placar]
   $('body').animate(
   {

      scrollTop: scorePosition + 'px'

   }, 1000);
 }
 
 function newLine(user, wordNumber){
     let line = $("<tr>");
     let userCollum = $("<td>").text(user);
     let wordCollum = $("<td>").text(wordNumber);
     let removeCollum = $("<td>");
 
     let link = $("<a>").addClass("remove-buttom").attr("href", "#");
     let icon =$("<i>").addClass("small").addClass("material-icons").text("delete");
 
     link.append(icon);
     removeCollum.append(link);
     line.append(userCollum);
     line.append(wordCollum);
     line.append(removeCollum);
 
     return line;
 }
 
 function removeLine(){
    $(".remove-buttom").click( function(event){
 
       event.preventDefault();
       let line = $(this).parent().parent();
       line.fadeOut(1000);                          //suaviza a sumida
       
       setTimeout(()=> {                             //executa função depois de 1 segundo
         line.remove();
       }, 1000)
        

    });
 }

 function showScore(){
   //  $(".score").toggle();
    $(".score").stop().slideToggle(1000);   // mostra e esconde o placar com o suavidade 
    
 }