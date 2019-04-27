// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var newState = {
      devoured: "true"
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("burger was devoured", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#add-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#burger-name").val().trim() === "") {
      alert("Please enter a burger name");
      return false;
    }
    else { // Here we grab the form elements
      var newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    }
  });
});