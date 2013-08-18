/////////////////////////////////////////
//save input to givenname 
/////////////////////////////////////////
function saveContact()
{
  //get name from input text
  var givename=document.getElementById("txName").value;
  //contact webAPI
  var contact = new mozContact();
  contact.init({name: givename, givenName: givename});

  var request = navigator.mozContacts.save(contact);

  request.onsuccess = function() {
     alert("Success saving contact. New contact ID: " + contact.id);
  };

  request.onerror = function() {
     alert("Error saving contact.");
  };
}//end func saveContact


//Contact API
function readContact()
{
 //temporary store name
 var name1="";
 
 var options1 = {filterBy: ["givenName"],
               filterOp: "equals",
               filterValue:txName.value, 
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
          //alert(name1+" ,wellcome to the game");
          //attack happen here
          //"<img src=x onerror=alert(11111)>";
          spName.innerHTML = name1;
    } else {
        console.log("No contacts found.");
    }
 }; 
 request1.onerror = function() {
    alert("request1 Error finding contacts.");
 };

}//end func display


