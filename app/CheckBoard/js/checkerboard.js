/*
  title: checkers board
  Author : Kailiang
  Email : yingkailiang0920@gmail.com 
*/

//display name on the top
//input number and read from contact who has this number 
function display()
{
 //temporary store name
 var name1="";
 var name2="";
 //use contact API 
 var options1 = {filterBy: ["givenName"],
               filterOp: "equals",
               filterValue:n1.value, 
               sortBy: "givenName",
               sortOrder: "ascending"
};

var request1 = navigator.mozContacts.find(options1);

var options2 = {filterBy: ["givenName"],
               filterOp: "equals",
               filterValue:n2.value, 
               sortBy: "givenName",
               sortOrder: "ascending"
};

var request2 = navigator.mozContacts.find(options2);

request1.onsuccess = function() {
    alert(request1.result.length);
    if(request1.result.length > 0) {
        console.log("Found " + request1.result.length + " contacts");
            for (var j=0; j<request1.result[0].name.length; j++) {
              name1= name1  + request1.result[0].name[j];
            }
    } else {
        console.log("No contacts found.");
    }
};

request1.onerror = function() {
    alert("Error finding contacts.");
};
request2.onsuccess = function() {
    if(request2.result.length > 0) {
        console.log("Found " + request2.result.length + " contacts");
            for (var j=0; j<request2.result[0].name.length; j++) {
              name2= name2 + request2.result[0].name[j];
            }
    } else {
        console.log("No contacts found.");
    }
};

request2.onerror = function() {
    alert("Error finding contacts.");
};

//display name on top
 var player1 = name1.value.fontcolor("red");
 var player2 = name2.value.fontcolor("blue");
 document.getElementById("demo").innerHTML=player1 +"  vs  "+player2;
}//end func display

//put chess in board
  var col;
  var row;
  var chessColor=false;   
  $(document).ready(function(){
	$('td').click(function(e){
         col = $(this).parent().children().index($(this));
	 row = $(this).parent().parent().children().index($(this).parent());
         console.log('col: '+col+ ' ,row: '+row);
         var image1 = $('<img />').attr('src','img/write.png');
         var image2 = $('<img />').attr('src','img/green.png');
         if(chessColor==false) 
         {
           $(this).append(image1);
         }
	 else
         {
           $(this).append(image2);
         } 
         chessColor=!chessColor;
        });
   });


