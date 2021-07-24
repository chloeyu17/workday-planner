//Display current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss A"));

//Button to clear local storage and refresh the page
$("#clear").click(function() {
  localStorage.clear();
  location.reload()
});

//Saves description upon save button click, creates description and time variables to save in local storage for future use
$(document).ready(function() {
  $(".saveBtn").on("click", function() {

   let eventDesc = $(this).siblings(".description").val();
   let time = $(this).parent().attr("id");

   localStorage.setItem(time, eventDesc);
  });

  function timeUpdate() {
    //Get current number of hours
    let currentTime = moment().hours();

    //Compares the Military time hour to the current hour to determine whether the event is in the past, present, or future.
    $(".time-block").each(function() {
      let timeBlock = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (timeBlock < currentTime) {
        $(this).addClass("past");
      } 
      else if (timeBlock === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  timeUpdate();

  //Updates time every hour
  setInterval(timeUpdate, 15000);

  //Loads saved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});