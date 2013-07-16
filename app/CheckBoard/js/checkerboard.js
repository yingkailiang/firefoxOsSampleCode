/*
  title: checkers board
  Author : Kailiang
  Email : yingkailiang0920@gmail.com 
*/

//Battery API
function showBattery()
{
  // batteryState.style.width = level;
  // batteryState.innerHTML = 'Battery: ' + level;
} //end function showBattery

//Contact API
function display()
{
 //temporary store name
 var name1="";
 
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
}; request1.onerror = function() {
    alert("request1 Error finding contacts.");
};

var battery = navigator.battery;
//alert(battery.level);
if(battery)
{
   batteryState = document.getElementById("batteryState");
// Set listeners for changes
   batteryState.innerHTML = 'Battery: '+battery.level*100+'%';
   battery.addEventListener('levelchange', function() { 
   batteryState.innerHTML = 'Battery: '+battery.level*100+'%';
   },false);
}
else
{
 alert("battery status cannot read");
}
}//end func display


