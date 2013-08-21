function sendSMS()
{
  var tel = document.getElementById("txTel").value;
  var context = document.getElementById("txCon").value;
  
  // SMS object
  var sms = navigator.mozSms;
  // Send a message
  sms.send(tel, context);
  
  //recieve sms message
  sms.onreceived = function (event) {
  // Read message
  alert(event.message);
  // show context in span,attack happen here: "<img src=x onerror=alert(11111)>";
  spName.innerHTML = context;`
  };
} //end func sendSMS


