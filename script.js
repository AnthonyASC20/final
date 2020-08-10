let loginButton = document.querySelector("#loginButton");
function mouseClicked(event) {
    event.preventDefault();
    location.replace("afterLogin.html");
    console.log("yes");
}

loginButton.addEventListener("click", mouseClicked);

//called when successful user log in
function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();

    console.log('User signed in!');
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    console.log(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

let userInput = "cellular respiration"
let khan = "khan academy"

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmLEzFQj-sI9IY7cc3fqTMW8bmfPcMGOA&type=video&q=' + userInput + khan)
        .then(response =>
        response.json()
        )
    .then(json =>
        console.log(json)
        );