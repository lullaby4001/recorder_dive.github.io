// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/auth_state_listener.js";
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const diveLinker = new DiveLinker("dive");

window.onload = function(){
    diveLinker.enableBlock(false);
    diveLinker.start();
}

var answer1 = 0;
// var answer2 = 0;

console.log(diveWorld.outputList.outA.value);
console.log(diveWorld.outputList.outB.value);
console.log(diveWorld.outputList.outC.value);

setInterval(()=>{
  // console.log("1")
    if (diveWorld.outputList.click.value == 1){
        diveWorld.outputList.click.value = 0;
        if (diveWorld.outputList.outA.value == 2){
            answer1 +=1;
        }
        if (diveWorld.outputList.outB.value == 3){
            answer1 +=1;
        }
        if (diveWorld.outputList.outC.value == 1){
            answer1 +=1;
        }
        console.log(answer1);
        var uid = window.localStorage.getItem("uid");
        console.log(window.localStorage.getItem("uid"));
        
        writeUserData(uid, answer1, 1);
    }
},50)

// console.log(diveWorld.outputList.click.value);



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUb-Q_ws3Pd8j4RbmcXtclkSUTUCcR5lw",
  authDomain: "recorder-dive-121e4.firebaseapp.com",
  databaseURL: "https://recorder-dive-121e4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recorder-dive-121e4",
  storageBucket: "recorder-dive-121e4.appspot.com",
  messagingSenderId: "653216881906",
  appId: "1:653216881906:web:5bdf3e79c4b0a22003c46b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function writeUserData(uuid, score1, score2) {
console.log(uuid);
  set(ref(db, 'answers/' + uuid), {
    answer1 : score1,
    answer2 : score2
  });

}