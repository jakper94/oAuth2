import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore'

//web app's firebase configuration what to put in can be find in firebase project 
const 

",
    apiKey: "your api key",
    authDomain: "oauth2-school-project.firebaseapp.com",
    databaseURL: "https://oauth2-school-project.firebaseio.com",
    projectId: "oauth2-school-project",
    storageBucket: "oauth2-school-project.appspot.com",
    messagingSenderId: "",
    appId:"",
    measurementId: ""
}
firebase.initializeApp(firebaseConfig)

export default firebase;
