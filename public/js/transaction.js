$(document).ready(function() {

    const item = $("#item");
    const borrower = $("#borrower");
    const owner = $("#owner");
    const dueDate = $("#dueDate");
    //Click events
    $(document).on("click", "button.addTransaction", handleTransaction);
    // $(document).on("click", "button.addBorrow", handleAddBorrow);
    // $(document).on("click", "button.addLend", handleAddLend);


    function handleTransaction(event) {
        event.preventDefault();
        // Wont submit the transaction if fields are blank
        if (!item.val().trim() || !borrower.val().trim() || !dueDate.val() || !owner.val()) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newTransaction = {
            item_name: item.val().trim(),
            owner_id: owner.val().trim(),
            borrower_id: borrower.val().trim(),
            due_date: dueDate.val()
        };
        submitTransaction(newTransaction);

    }

    // Submits a new transaction
    function submitTransaction(trans) {
        $.post("/transaction", trans)
    }
});
//
//     function handleAddLend(event) {
//         event.preventDefault();
//         // Wont submit the post if we are missing a body, title, or author
//         if (!item.val().trim() || !owner.val().trim() || !dateDue.val()) {
//             return;
//         }
//
//         // Constructing a newPost object to hand to the database
//         var newLend = {
//             item_id: item
//                 .val()
//                 .trim(),
//             owner_id: owner
//                 .val()
//                 .trim(),
//             borrower_id: borrower.val(),
//             due_date: dueDate.val()
//         };
//         submitLend(newLend);
//
//     }
//
//     // Submits a new post and brings user to blog page upon completion
//     function submitLend(Lend) {
//         $.post("/:user/addBorrow", post, function() {
//             window.location.href = "/:user";
//         });
//     }
//
// });
