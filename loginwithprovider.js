document.getElementById("google").addEventListener("click", function (a) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result);
            var btnlogin = document.getElementById("login");
            var btnlogout = document.getElementById("logout");
            var profile = document.querySelector(".profile");
            var username = document.getElementById("us");
            var whole = document.querySelector("whole");
            Swal.fire({
                title: "Welcome",
                text: "You have successfully sign in with your Google account!",
                icon: "success",
                didClose: () => {
                    window.location.href = "index.html";
                    btnlogin.classList.add("hidden");
                    // login button will be replaced by ("hidden")
                    profile.classList.remove("hidden");
                    username.innerHTML = user.email;
                },
            });
            // IdP data available in result.additionalUserInfo.profile.
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
});
document.getElementById("facebook").addEventListener("click", function (c) {
    c.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;
            // IdP data available in result.additionalUserInfo.profile.
            // ...

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
});
