// ========================================== START CODING BELOW!!
    $(document).ready(function() { 

    // Initialize Firebase

    var config = {
    apiKey: "AIzaSyB2hoQ5M1tvIpt1145a2F9psfm8cKAXkrQ",
    authDomain: "train-schedule-d2e33.firebaseapp.com",
    databaseURL: "https://train-schedule-d2e33.firebaseio.com",
    projectId: "train-schedule-d2e33",
    storageBucket: "",
    messagingSenderId: "563159162164"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    // Capture Button Click
    $("#submit").on("click", function(event) {
      event.preventDefault();
      
      // Grabbed values from text boxes
      var name = $("#train-name").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = $("#first-train").val().trim();
      var frequency = $("#frequency").val().trim();
      

      // These values on the right are from the var above.
      // Code for handling the push
      database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
      // clears text boxes
      $("#train-name").val("");
      $("#destination").val("");
      $("#first-train").val("");
      $("#frequency").val("");

    });

        // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().on("child_added", function(childSnapshot) {
      // console.log(childSnapshot.val().name);
      // Log everything that's coming out of snapshot to html
      var tableData = $("<tr>");
      tableData.append("<td>" + childSnapshot.val().name + "</td>");
      tableData.append("<td>" + childSnapshot.val().destination + "</td>");
      tableData.append("<td>" + childSnapshot.val().firstTrain + "</td>");
      tableData.append("<td>" + childSnapshot.val().frequency + "</td>");
      $("#trainTable").append(tableData);
      

      // TODO: add code to dynamically write firebase vasriables to the screen...
      // $ ("#name").html(childSnapshot.val().name);

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      //Started to draw the divs to the screen... but got super lost...
      var rowDiv = $('<div>');
      rowDiv.addClass("row");
      var colDiv = $('<div>');
      colDiv.addClass("col-sm-3");

    });




}); //end of document ready function