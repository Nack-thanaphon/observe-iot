import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxJ4w-vcidkU6OqEX6VJLNQKGLvK462KU",
  authDomain: "realtime-iot-58104.firebaseapp.com",
  databaseURL: "https://realtime-iot-58104-default-rtdb.firebaseio.com",
  projectId: "realtime-iot-58104",
  messagingSenderId: "592292999074",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export default database;