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
 //use contact API 
 var options1 = {filterBy: ["givenName"],
               filterOp: "equals",
               filterValue:n1.value, 
               sortBy: "givenName",
               sortOrder: "ascending"
};

var request1 = navigator.mozContacts.find(options1);

request1.onsuccess = function() {
    //alert("request1:"+request1.result.length);
    if(request1.result.length > 0) {
        console.log("Found " + request1.result.length + " contacts");
            for (var j=0; j<request1.result[0].name.length; j++) {
              name1= name1  + request1.result[0].name[j];
            }
          alert(name1+" ,wellcome to the game");
    } else {
        console.log("No contacts found.");
    }
};

request1.onerror = function() {
    alert("request1 Error finding contacts.");
};

//display name on top
 //document.getElementById("demo").innerHTML= player;
}//end func display



