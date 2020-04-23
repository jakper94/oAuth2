import React, { Component } from "react";
import "./about.scss";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TimeStamp from 'react-timestamp'
firebase.initializeApp({
    apiKey: 'AIzaSyBotbpeEGirAvJQYQXkHUAQrVOQRCMyp-k',
    authDomain:'oauth2-school-project.firebaseapp.com'
})
class About extends Component {
    state = {isSignedIn:false}

    uiConfig ={
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isSignedIn:!!user})
            console.log("user",user)

        })
    }
      render() {
        /** note about database. userid|latest logged in| time when logged in|  */
      
    return(
        <section>

            <div className="grid-container">
           {
           this.state.isSignedIn
           ? 
           <div className="signedIn-grid">
                <div className="user-info">
                    <img src={firebase.auth().currentUser.photoURL}/>
                    <div className="currentUserInfo">
                        <h2> {firebase.auth().currentUser.displayName}</h2>
                        <p>Senast inloggad: <TimeStamp date={firebase.auth().currentUser.metadata.lastSignInTime} options={{ includeDay: true, twentyFourHour: true }}/> </p>
                    </div>
                </div>
            
            <div className="right-div"><div className="sign-out-button" onClick ={()=>firebase.auth().signOut()}> sign out</div> </div>
         </div>

           
           : 
           <div className="logInBoxes">
               <StyledFirebaseAuth
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}  /> 
           </div>
            }
    </div>
        </section>
    )
    }
}
export default About;