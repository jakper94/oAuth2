import React, { Component } from "react";
import "./userinfo.scss";
import firebase from '../../firebase-config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import GetFromDatabase from '../useDatabase/getFromDatabase'




class UserInfo extends Component {

    //creates the
    state = {isSignedIn:false}
    state ={first:true}
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
        //                        <UpdateDatabase inputedUserId={firebase.auth().currentUser.uid} />     


    return(
            <div className="grid-container">
                
           {
               //checks if the user is signed in or not.
           this.state.isSignedIn
           ? 

           //if signed in the information is displayed and saved in the database
           <div className="signedIn-grid">
                <div className="user-info">
                        <GetFromDatabase 
                            userUid={firebase.auth().currentUser.uid} 
                            userEmail={firebase.auth().currentUser.email} 
                            userName={firebase.auth().currentUser.displayName}
                            userImg={firebase.auth().currentUser.photoURL}
                        />
                </div>
            
            <div className="right-div">
                <div className="sign-out-button" onClick ={()=>firebase.auth().signOut()}> sign out</div> 
            </div>
         </div>
           
           : 
           // if not signed in the text is displayed and buttons to log in.
           <div className="notSignedInGrid">
               <div className="startText"> 
               <h1> Welcome to oAuth2 page!</h1>
               <h4>To see user information log in with Github or Facebook</h4>
               </div>
           <div className="logInBoxes">
               <StyledFirebaseAuth
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}  /> 
           </div>
           
          </div>

            }
    </div>
    
   
    )
    }
    
}

export default UserInfo;

