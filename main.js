document.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var checking = document.getElementById("checkingpass").value;
    console.log(email, password, checking);
    if (email === "" || password === "" || checking === "") {
        Swal.fire({
            title: "Email,password,repassword are unfilled",
            text: "That thing is still around?",
            icon: "error",
        });
        return;
    } else if (password !== checking) {
        Swal.fire({
            title: "Passwords are not the same",
            text: "That thing is still around?",
            icon: "error",
        });
    } else {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var checking = document.getElementById("checkingpass").value;
        let user = {
            email: email,
            password: password,
            checking: checking,
        };
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                localStorage.setItem("User", JSON.stringify(user));
                Swal.fire({
                    title: "Welcome",
                    text: "You have created your own account!",
                    icon: "success",
                    didClose: () => {
                        window.location.href = "login.html";
                    },
                });
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Swal.fire({
                    title: "Oops!",
                    text: "This account has been created before!",
                    icon: "error",
                });
                // ..
            });
    }
});
