import firebase from "firebase"

 const firebaseConfig = {
  apiKey: "AIzaSyCROGamWDykeIO16bJmbB_zuGwxKZ4Rfbg",
  authDomain: "school-attendance-app-2a8e2.firebaseapp.com",
  databaseURL: "https://school-attendance-app-2a8e2-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-2a8e2",
  storageBucket: "school-attendance-app-2a8e2.appspot.com",
  messagingSenderId: "225524007310",
  appId: "1:225524007310:web:586aa4ca43ef45fbf2e4df",
  measurementId: "G-6FGRPKBH34"
};
  firebase.initializeApp(firebaseConfig)


export default firebase.database()