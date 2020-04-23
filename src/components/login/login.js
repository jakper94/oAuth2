import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import "./login.scss"


export default class login extends Component {
    
    state= {
        isLoggedIn: false,
        userID:'',
        name: '',
        email:'',
        picture: '',
        user_photos: ''
    }
    
    
    componentClicked = () =>{
        console.log("clicked")
    }
    logOutClicked = (e) =>{
        e.preventDefault();
        this.setState({
            isLoggedIn:false,
            userID:'',
            name: '',
            email:'',
            picture: ''
            
        })

    }
    responseFacebook = response => { 
        console.log(response)
        this.setState({ 
            isLoggedIn: true,
            userID: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url

             
        });
    }
    render() {
        let fbContent;
        var date = new Date();
       

        if(this.state.isLoggedIn) {
            fbContent = (
            <div className="fbContent">
                <img src={this.state.picture} alt={this.state.name}/>
        <h2>Welcome {this.state.name}</h2>
        Email: {this.state.email}
        <button className="logOutBotton" onClick={this.logOutClicked}>log out</button>
            </div>
            )
            

        } else {
            fbContent = (<FacebookLogin className="logInButton"
                appId = "226360325102093"
                autoLoad = {true}
                fields = "name,email,picture"
                onClick={this.componentClicked}
                icon="fa-facebook"
                callback={this.responseFacebook}    
                />
                


            )
            
        }
        return (
            <div>
                 {fbContent}
                 
            </div>
        )
    }
}

