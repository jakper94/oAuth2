import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore'

//web app's firebase configuration
const firebaseConfig={
    apiKey: "AIzaSyBotbpeEGirAvJQYQXkHUAQrVOQRCMyp-k",
    authDomain: "oauth2-school-project.firebaseapp.com",
    databaseURL: "https://oauth2-school-project.firebaseio.com",
    projectId: "oauth2-school-project",
    storageBucket: "oauth2-school-project.appspot.com",
    messagingSenderId: "482612794556",
    appId: "1:482612794556:web:2951e7b8e31bbc2b826cb9",
    measurementId: "G-9QC6FSRXZQ"
}
firebase.initializeApp(firebaseConfig)

export default firebase;