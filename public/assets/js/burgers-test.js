// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".eatBurger").on("click", (event) => {
        console.log("Button Clicked.");
        let id = $(this).data("id");
        console.log(id);
        let newBurger = $(this).data("devoured");
        console.log(newBurger);
        let goodBurger = {
            devoured: newBurger
        };
        console.log(goodBurger);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: goodBurger
        }).then(
            () => {
                console.log("changed devoured state to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-update-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let kitchen = {
            name: $("#ca").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: kitchen
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});