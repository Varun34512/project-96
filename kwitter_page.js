var firebaseConfig = {
    apiKey: "AIzaSyCDs4fAJYupLqETCR2A19GVAaFDjb5QwsI",
    authDomain: "lets-chat-5233e.firebaseapp.com",
    databaseURL: "https://lets-chat-5233e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5233e",
    storageBucket: "lets-chat-5233e.appspot.com",
    messagingSenderId: "954912555465",
    appId: "1:954912555465:web:841ba4d2e65f2a12d36818",
    measurementId: "G-YTJ9H937PH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    })
    document.getElementById("msg").value = "" ;
}
