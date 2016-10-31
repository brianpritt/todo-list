// Business Logic
function Note(task, date, location, notes) {
  this.task = task;
  this.date = date;
  this.location = location;
  this.notes = notes;
}

Note.prototype.fullTitle = function(){
  return this.task + ", " + this.date;
}

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("#task").val();
    var inputtedDate = $("#date").val();
    var inputtedLocation = $("#location").val();
    var inputtedNotes = $("#notes").val();

    if (inputtedTask === "" || inputtedDate === "") {
      $("#warning").show();
      $("#warning").text("Please fill all fields");
    } else {
      $("#warning").hide();
      var newTask = new Note(inputtedTask, inputtedDate, inputtedLocation, inputtedNotes);
      $("#list").append("<div class='well'><li><span class='glyphicon glyphicon-expand'></span>" + newTask.fullTitle() + "<span class='delete glyphicon glyphicon-remove'></span></li></div>");

      $("#task").val("");
      $("#date").val("");
      $("#location").val("");
      $("#notes").val("");
    }

    $(".glyphicon-expand").last().click(function(){
      $("#warning").hide();
      $("#currentTask").show();
      $(".task").text(newTask.task);
      $(".date").text(newTask.date);
      $(".location").text(newTask.location);
      $(".notes").text(newTask.notes);
    });
    $(".delete").click(function(){
      $(this).parents(".bg-styling").hide();
      $("#currentTask").hide();

    });

  }); //add task submit function

}); // document ready
