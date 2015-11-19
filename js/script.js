// // Make X buttons delete a row =================================================

// var delstudent = document.getElementsByClassName('btnDel');
// var newRowArray = document.getElementsByClassName('newRow');

// function deleteRow() {
//   var i = this.parentNode.parentNode.rowIndex;
//   document.getElementById("theList").deleteRow(i);
// }

// // Make checkbox strikeout line ================================================


// // function done() {
// //     var items = document.getElementsByTagName("td");

// //     td.setAttribute("class", "strikeout");
// //     alert("Done");

// // }

// // document.getElementById("btnMake").addEventListener("click", done());


// // document.form.checkbox.click()



// // Create new row from input fields =============================================

// function addRow() {

//     var tableID="theList";
//     var table = document.getElementById('theList');
//     var rowCount = table.rows.length;

//     if(rowCount<20){
//         var row = table.insertRow(rowCount);
//         row.setAttribute("class", "newRow");
//         var x = document.getElementById("exampleInputName2").value;
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         var element1 = document.createElement('input');


//         element1.type = "checkbox";
        
//         var element2 = document.createElement('text');
//         element2.innerHTML= document.getElementById("exampleInputName2").value;
        
//         var element3 = document.createElement('button');
//         element3.innerHTML="X";
//         element3.setAttribute("class", "btn btn-danger btnDel");
        
//         cell1.appendChild(element1);
//         cell2.appendChild(element2);
//         cell3.appendChild(element3);

//         element3.addEventListener("click", deleteRow);

//     } else if (rowCount>=20){
//         alert("Too many rows, please delete some");
//     }
// }

// document.getElementById("btnMake").addEventListener("click", addRow);


// for ( i = 0 ; i < delstudent.length; i++) {
//   delstudent[i].addEventListener("click", deleteRow);
// }
