function scoreInsert(){
    let tableBody = $(".score").find("tbody");
    let user = "Renato";
    let wordNumber = $("#word-counter").text();
   
    let tableLine = newLine(user, wordNumber);
    tableLine.find(".remove-buttom").click(removeLine);
 
    tableBody.append(tableLine);                 
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
       $(this).parent().parent().remove();
 
    });
 }