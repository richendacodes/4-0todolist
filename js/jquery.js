$( document ).ready(function() {
 
 
// Make X buttons delete a row =================================================

  var delstudent = document.getElementsByClassName('btnDel');
  var newRowArray = document.getElementsByClassName('newRow');

  function deleteRow() {
    var i = this.parentNode.parentNode.rowIndex;
    document.getElementById("theList").deleteRow(i);
  }

// Create new row from input fields =============================================



  $(".btn-info").on("click", function(e) {
    e.preventDefault();
    
    var newItem = $("#newItem").val();
    

    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append('<input type="checkbox" name="myCheckbox" class="strikeout"/>').append("<span>" + (newItem) + "</span>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("X");
    var deleteTd = $("<td>").append(deleteBtn);

    newRow.append(wordTd).append(deleteTd);
    $("#theList").append(newRow);

    $("#newItem").val("").focus();
  });

  $("table").on("click", ".btn-danger", function() {
    if($("tr").length > 2) {
      $(this).parent().parent().remove();  
    }

    $(".checkbox").change(function() {
    if(this.checked) {  
      $("span").addClass("strikeout");
    }
  });

});















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







 
});