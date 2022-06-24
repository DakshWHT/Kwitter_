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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name: user_name,
            Message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}    


window.addEventListener("keydown", mykeydown);
function mykeydown(e){
      keyPressed = e.keyCode;
      if (keyPressed == '13'){
            send();
      }
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         var name = message_data['Name'];
         message = message_data['Message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value=" + like + "onclick='updateLike(this.id);'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

         row = name_with_tag + message_with_tag +like_button + span_with_tag;      
         document.getElementById("output").innerHTML += row;

       } });  }); }
 getData();
  
function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_like = Number(likes) + 1;
	console.log(updated_like);

	firebase.database().ref(room_name).child(message_id).update({
		like: updated_like  
	 });

}
  
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
 }