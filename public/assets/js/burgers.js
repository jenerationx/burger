// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#devour").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("burger was devoured", newState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$("#add-burger").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burger-name").val().trim(),
    // devoured: false
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log(newBurger);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
