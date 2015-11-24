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

 
});