const dbRef = firebase.database().ref();
const hobbiesRef = dbRef.child('hobbies');
hobbiesRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});
function send(){
  var hobby1 = document.getElementById("hobby1_field").value;
  var hobby2 = document.getElementById("hobby2_field").value;
  var hobby3 = document.getElementById("hobby3_field").value;
  var hobby4 = document.getElementById("hobby4_field").value;
  hobbiesRef.push().set({
      hobby1: hobby1,
      hobby2: hobby2,
      hobby3: hobby3,
      hobby4: hobby4
  });
}