/*
  title: checkers board
  Author : Kailiang
  Email : yingkailiang0920@gmail.com 
*/


//variable Count boolean use to disdinguish every line of board
//varibble NO ,count nubmer of line of board 
var Count=false,NO=1; 

//add one row to exist table
function addRow()
{ 
Count=!Count; 
//add row
var newTr = testTbl.insertRow(testTbl.rows.length); 
//add column 
var newTd0 = newTr.insertCell(); 
var newTd1 = newTr.insertCell(); 
var newTd2 = newTr.insertCell(); 
var newTd3 = newTr.insertCell(); 
var newTd4 = newTr.insertCell(); 
var newTd5 = newTr.insertCell(); 
var newTd6 = newTr.insertCell(); 
var newTd7 = newTr.insertCell(); 

//add attribute 
if(!Count)
{
newTd0.style.background="white";
newTd0.height="50";
newTd1.style.background="green";
newTd2.style.background="white";
newTd3.style.background="green";
newTd4.style.background="white";
newTd5.style.background="green";
newTd6.style.background="white";
newTd7.style.background="green";
} 
else 
{
newTd0.style.background="green";
newTd0.height="50";
newTd1.style.background="white";
newTd2.style.background="green";
newTd3.style.background="white";
newTd4.style.background="green";
newTd5.style.background="white";
newTd6.style.background="green";
newTd7.style.background="white";
}  
 
NO++;
} //end func addrow


//display name on the top
function display()
{ 
 var player1 = n1.value.fontcolor("red");
 var player2 = n2.value.fontcolor("blue");
 document.getElementById("demo").innerHTML=player1 +"  vs  "+player2;
}//end func display

//get row index
function getRow(){ 
var ObjTd=window.event.srcElement; 
var ObjTr=ObjTd.parentElement; 
var y=ObjTr.rowIndex; 
var x=ObjTd.cellIndex; 
return y
} 

//get column index
function getCol(){ 
var ObjTd=window.event.srcElement; 
var ObjTr=ObjTd.parentElement; 
var y=ObjTr.rowIndex; 
var x=ObjTd.cellIndex; 
return x
} 

//fill checkers and remove checkers use "*" as checkers
function fill()
{
if(document.getElementById("testTbl").rows[getRow()].cells[getCol()].innerText=="*")
{
document.getElementById("testTbl").rows[getRow()].cells[getCol()].innerText=null;
return;
}
var checkers= document.getElementById("testTbl").rows[getRow()].cells[getCol()];
checkers.align ="center";
checkers.innerText="*";
}

//make all cell in the table onclick fill()
function enableFill()
{
 testTbl.rows[1].cells[1].onclick="fill()";
}

//create table ,main entrance
function createTab()
{
 display();
 //enableFill();
 for (var i=0;i<8;i++)
 {
  //add one row to table
  addRow();
 }
 
}//end func createTab

