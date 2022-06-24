const firebaseConfig = {
  apiKey: "AIzaSyBxzUaFU8vBZlyb760g23cSx3s-_tVJrRY",
  authDomain: "kwitter-dacb3.firebaseapp.com",
  databaseURL: "https://kwitter-dacb3-default-rtdb.firebaseio.com",
  projectId: "kwitter-dacb3",
  storageBucket: "kwitter-dacb3.appspot.com",
  messagingSenderId: "673571393228",
  appId: "1:673571393228:web:f98b754076e67100e93c69"
};


  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
      });
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
}
