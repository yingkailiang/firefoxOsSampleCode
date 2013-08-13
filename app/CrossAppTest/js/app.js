/*
  title: checkers board
  Author : Kailiang
  Email : yingkailiang0920@gmail.com 
*/

//Contact API
function display()
{

var cursor = navigator.mozContacts.getAll({});

cursor.onsuccess = function() {
    if(cursor.result) {
        for(var i=0; i<cursor.result.name.length; i++) {
           alert("Got contact with name: " + cursor.result.name[i]);
        }
        cursor.continue();
    }
};

cursor.onerror = function() {
    alert("Error getting contacts");
};

}//end func display


