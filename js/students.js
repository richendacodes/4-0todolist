// Make X buttons delete a row =================================================

var delstudent = document.getElementsByClassName('btnDel');
var newRowArray = document.getElementsByClassName('newRow');

function deleteRow() {
    var i = this.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}


// Create new row from input fields =============================================

function addRow() {

    var tableID="studentTable";
    var table = document.getElementById('studentTable');
    var rowCount = table.rows.length;

    if(rowCount<20){
        var row = table.insertRow(rowCount);
        row.setAttribute("class", "newRow");
        var x = document.getElementById("exampleInputName2").value;
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var element1 = document.createElement('text');
        element1.innerHTML= document.getElementById("exampleInputName1").value;
        var element2 = document.createElement('text');
        element2.innerHTML= document.getElementById("exampleInputName2").value;
        var element3 = document.createElement('text');
        element3.innerHTML= document.getElementById("exampleInputEmail1").value;
        var element4 = document.createElement('button');
        element4.innerHTML="X";
        element4.setAttribute("class", "btn btn-default btnDel");
        console.log(element4);
        cell1.appendChild(element1);
        cell2.appendChild(element2);
        cell3.appendChild(element3);
        cell4.appendChild(element4);
        element4.addEventListener("click", deleteRow);
    } else if (rowCount>=20){
        alert("Too many rows, please delete some");
    }
    console.log(delstudent.length);
}

document.getElementById("btnMake").addEventListener("click", addRow);


for ( i = 0 ; i < delstudent.length; i++) {
  delstudent[i].addEventListener("click", deleteRow);
}

// Randomly delete =================================================================

//Randomly select a row

// window.onload = function StartTimer() {
//   setInterval(function(){
//      var tds = document.getElementById("studentTable").getElementsByTagName("tr");
//     // get a random int between 0 (inclusive) and tds.length (exclusive)
//     var rand = Math.floor( Math.random() * tds.length );
//     // highlight tr at that index
//      tds[rand].style.backgroundColor = "#375297";
//     // tds[rand].style.color = "#000";
//     var i = this.parentNode.parentNode.rowIndex;
//     document.getElementById("studentTable").deleteRow(i);
//     alert("Time's Up! Your score is ");
//   }, 5000);
// }


// Randomly delete a row on click

// function randomDel() {      
//   // get all TRs that are descendants of table#studentTable:
//   var tds = document.getElementById("studentTable").getElementsByTagName("tr");
//   // get a random int between 0 (inclusive) and tds.length (exclusive)
//   var rand = Math.floor( Math.random() * tds.length );
//   // highlight tr at that index
//   //   tds[rand].style.backgroundColor = "#375297";
//   //tds[rand].style.color = "#000";
//   var i = this.parentNode.parentNode.rowIndex;
//     document.getElementById("studentTable").deleteRow(i);;
// }

// for ( i = 0 ; i < delstudent.length; i++) {
//   delstudent[i].addEventListener("click", randomDel);
// }