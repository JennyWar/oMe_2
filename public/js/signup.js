$(document).ready(function () {

    const username = $("#username");
    const password = $("#password");
    const passwordCheck = $("#password2");
    const image = $("#image");

    $(document).on("submit", "#signup-form", handleNewUser);

    function handleNewUser(event){
        event.preventDefault();
        //checks that username was entered
        if (!username.val().trim()) {
            swal("Oops!", 'Please enter a Username!', 'error');
            return;
        }
        //checks that password was entered
        if (!password.val().trim()) {
            swal("Oops!", 'Please enter a Password!', 'error');
            return;
        }
        //makes sure passwords match
        if (password.val().trim() != passwordCheck.val().trim()) {
            swal("Oops!", 'Passwords Do Not Match!', 'error');
            return;
        }
        if (!image.val().trim()) {
            swal("Oops!", 'Please enter a mugshot URL!', 'error');
            return;
        }
        insertUser({
            name: username.val().trim(),
            password: password.val().trim(),
            image: image.val().trim()
        });
    }

    function insertUser(userData) {
        $.post("/api/adduser", userData)
        .then(function(data){
            getUserView(data);
        });
    }

    function getUserView(data) {
        console.log(data);
        //if everything checks out stores username and password into session storage
        sessionStorage.userId = data.id;
        sessionStorage.username = data.name;
        sessionStorage.image = data.image;
        let userId = data.id;
        let userRoute = "/" + userId;
        swal({
            type: 'success',
            title: 'Welcome ' + data.name + "!",
            text: 'Thank you for joining oMe!.',
            timer: 3000,
            onOpen: () => {
                swal.showLoading()
            }
        }).then((result) => {
            window.location.href = userRoute;
        })
        
      }
});

