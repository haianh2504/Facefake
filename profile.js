var profilename = document.querySelector(".name-profile");
var profilemail = document.querySelector(".email-profile");
var avatar = document.querySelector(".avatar-profile");
var online = document.querySelector(".online-profile") || "";
var img = document.getElementById("img");
// || "": Nếu không có
console.log(profilename, profilemail, avatar, online);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        profilename.innerHTML = user.displayName;
        online.innerHTML = "Ngày tạo: " + new Date(user.metadata.lastSignInTime).toLocaleDateString("VI-VN");
        profilemail.innerHTML = user.email;
        avatar.src = user.photoURL;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        profilename.value = user.displayName;
        profilemail.value = user.email;
        img.value = user.photoURL;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
document.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.img.value);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: e.target.name.value,
        email: e.target.email.value,
        photoURL: e.target.img.value,
    })
        .then(() => {
            // Update successful
            window.location.href = "./profile.html";
            // ...
        })
        .catch((error) => {
            // An error occurred
            // ...
        });
});
