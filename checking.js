console.log("checking is loaded");
document.addEventListener("DOMContentLoaded", function () {
    var btnlogin = document.getElementById("login");
    var btnlogout = document.getElementById("logout");
    var profile = document.querySelector(".profile");
    var username = document.getElementById("us");
    var whole = document.querySelector("whole");
    var avater = document.querySelector(".avatar");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user.photoURL);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            btnlogin.classList.add("hidden");
            avater.src = user.photoURL;

            // login button will be replaced by ("hidden")
            profile.classList.remove("hidden");
            username.innerHTML = user.email;

            // ...
        } else {
        }
    });
    var btnlogout = document.getElementById("logout").addEventListener("click", function (event) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                Swal.fire({
                    title: "Welcome",
                    text: "You have successfully log out!",
                    icon: "success",
                    didClose: () => {
                        window.location.href = "index.html";
                        btnlogin.classList.remove("hidden");
                        profile.classList.add("hidden");
                    },
                });
            })
            .catch((error) => {
                // An error happened.
            });
    });
});
