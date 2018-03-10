$(document).ready(function() {

    //Click events
    $(document).unbind().one("click", "button.borrow", handleBorrow);
    $(document).unbind().one("click", "button.lend", handleLend);
    $(document).unbind().one("click", "button.confirmItem", handleItem);

    function handleBorrow(event) {
        event.preventDefault();
        console.log('go add a borrow');
        var itemStr = $("#itemBorrowed").val();
        var itemArr = itemStr.split(',');
        var item = itemArr[0];
        var owner = itemArr[1];
        var dueDate = $("#dueDate");
        var borrower = userId;
        console.log(owner);
        console.log(item);
        console.log(borrower);
        // Wont submit the transaction if fields are blank
        if (!item || !borrower || !dueDate.val() || !owner) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newBorrow = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower,
            due_date: dueDate.val()
        };
        console.log(newBorrow);
        submitBorrow(newBorrow);

    }

    // Submits a new transaction
    function submitBorrow(trans) {
        console.log('posting now');
        $.post("/ome/addBorrow", trans).then(function () {
            location.reload();
        })
    }

    function handleLend(event) {
        event.preventDefault();
        console.log('go add a borrow');
        var itemStr = $("#itemLent").val();
        var itemArr = itemStr.split(',');
        var item = itemArr[0];
        var owner = itemArr[1];
        var dueDate = $("#dueDateLend");
        var borrower = $("#borrower");
        console.log(owner);
        console.log(item);
        console.log(borrower);
        // Wont submit the transaction if fields are blank
        if (!item || !borrower || !dueDate.val() || !owner) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newLend = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower.val(),
            due_date: dueDate.val()
        };
        console.log(newLend);
        submitLend(newLend);
    }
});
