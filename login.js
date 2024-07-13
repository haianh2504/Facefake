document.addEventListener("submit", function (e) {
    e.preventDefault();
    let imeol = document.getElementById("gg").value.trim();
    let pastword = document.getElementById("secure").value;
    firebase
        .auth()
        .signInWithEmailAndPassword(imeol, pastword)
        .then((userCredential) => {
            // Signed in
            Swal.fire({
                title: "Welcome",
                text: "You have successfully sign in your own account!",
                icon: "success",
                didClose: () => {
                    window.location.href = "index.html";
                },
            });
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Swal.fire({
                title: "Oops!",
                text: "There might be something wrong!",
                icon: "error",
            });
        });
});
