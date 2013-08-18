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


// Check battery
function readBattery()
{
  var battery = navigator.battery;
  //alert(battery.level);
  if(battery)
  {
    batteryState = document.getElementById("batteryState");
    // Set listeners for changes
    batteryState.innerHTML = 'Battery: '+battery.level*100+'%';
    battery.addEventListener('levelchange', function() { 
    batteryState.innerHTML = 'Battery: '+battery.level*100+'%';
    if(battery.level<0.15)
    {
      alert("low battery power");
    }
    },false);
  }
  else
    {
     alert("battery status cannot read");
    }
}//end function
 
   
// Geolocation
function readLocation()
{
    function showMap(position) {
      // Show a map centered at (position.coords.latitude, position.coords.longitude).
      gState = document.getElementById("gpsState");
      // Set listeners for changes
      gState.innerHTML = position.coords.latitude;
    }
    // One-shot position request.
    navigator.geolocation.getCurrentPosition(showMap);
}//end function readLocation     
 
