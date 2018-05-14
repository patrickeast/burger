$(() => {
    $(".eatBurger").on("click", function(event) {
      let id = $(this).data("id");
      let devouredBurger = $(this).data("devouredBurger");
  
      let eatenBurger = {
        devoured: devouredBurger
      };
  
    
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: eatenBurger
      }).then(
        () => {
          console.log("changed sleep to", devouredBurger);
         
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
    
      event.preventDefault();
  
      let kitchen = {
        name: $("#ca").val().trim(),
        devoured: false
        
      };
  
    
      $.ajax("/api/cats", {
        type: "POST",
        data: kitchen
      }).then(
        () => {
          console.log("created new cat");
         
          location.reload();
        }
      );
    });
  
  
  });