const subjectElement = document.getElementById("testSubject");
const topicElement = document.getElementById("testTopic");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault(); //does not refresh page
    const subject        = subjectElement.value;
    const topic         = topicElement.value;

    subjectElement.value = "";
    topicElement.value  = "";

    console.log(subject + "  " + topic);

    //Update database here
    // let value = {
    //     subject: subject,
    //     topic: topic
    // }

    // database.push(value);
}

// Set database "child_added" event listener here
// database.on('child_added', addMessage);

// let allMessages = document.querySelector('.allMessages');


// function addMessage(data) {
//     let value = data.val();
//     let subject= value.subject;
//     let topic = value.topic;

//     let p = document.createElement('p');
//     p.innerText = subject + " " + topic;
//     allMessages.appendChild(p);
// }

let userInput = "cellular respiration";
let khan = "khan academy";

fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9uKfXBjYpoiQjVbLmNgFbN8AQaDujiks&type=video&q=' + userInput + khan)
        .then(response =>
        response.json()
       ) 
    .then(json =>
        console.log(json)
        );

        // let url ="https://randomuser.me/api";

        // fetch(url)
        //     .then(function(response){
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then(function(myJson){
        //         console.log(myJson);
        //         let email= myJson[0].results.email;
        //         const p = document.createElement("p");
        //         p.innerText=email;
        //         document.body.appendChild(p);
        //     })




let mainPageButton = document.querySelector("#mainPageButton");
function mouseClicked(event) {
    event.preventDefault();
    location.replace("afterLogin.html");
}

mainPageButton.addEventListener("click", mouseClicked);

/*let loginRedirect = document.querySelector("#loginPageButton");
function mouseClicked2() {
    location.replace("index.html");
}

loginRedirect.addEventListener("click", mouseClicked2);*/

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



// fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmLEzFQj-sI9IY7cc3fqTMW8bmfPcMGOA&type=video&q=' + userInput + khan)
//         .then(response =>
//         response.json()
//         )
//     .then(json =>
//         console.log(json)
//         );