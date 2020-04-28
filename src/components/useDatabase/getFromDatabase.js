import React, {useState, useEffect }from 'react'
import firebase from '../../firebase-config'
import TimeStamp from 'react-timestamp'

function addUser(uid, email, name, imgUrl){

    const date = new Date().getTime();
    const timestamp = Math.floor(date/1000)

    firebase
        .firestore()
        .collection('users').doc(uid)
        .get().then(
            doc => {
                //if user exist no new user is added to the database in firestore
            if (doc.exists) {
                //if user not exist, the user id is set to the collection key in the database and  the timestamp uid, email, name and imgURL is saved
            } else{
                firebase
                .firestore()
                .collection('users')
                .doc(uid).set({
                    userID: uid,
                    email: email,
                    name: name,
                    imgUrl: imgUrl,
                    timestamp: timestamp

                })
            }
        }
        )
}
//the function gets the user information from firestore database 
function GetInfoFromUser(uid) {
    const [users,setUsers] = useState([]);     
        
    useEffect(()=>{
        const unsubscribe = firebase
        .firestore()
            .collection('users')
            .where('userID', '==', uid)
            .onSnapshot((snapshot)=>{
            const newUsers = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setUsers(newUsers);
        })
        return () => unsubscribe()       
    },[])
        return users;
}
function updateUser(inputedUser){

    const date = new Date().getTime();
    const timestamp = Math.floor(date/1000)
      //updates the timestamp in the database 
        firebase.firestore()
            .collection('users').doc(inputedUser)
            .update({
             timestamp
            })
      
}

const GetFromDatabase =({userUid, userEmail, userName, userImg})=>{
    const [firstRender, setFirstRender]= useState(true)
    if (firstRender){
        addUser(userUid,userEmail,userName,userImg) 
    }
    const users = GetInfoFromUser(userUid);
    if (firstRender){
        updateUser(userUid)
        setFirstRender(false)
    }
    return (
      <div>
          {users.map(user=>(
          <div key={user.id}>
              <img src={user.imgUrl} alt={firebase.auth().currentUser.name}/>
              <div className="currentUserInfo">
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                  <p>Senast inloggad: 
                      <TimeStamp 
                      date={user.timestamp} 
                      options={{ includeDay: true, 
                      twentyFourHour: true }}/> 
                    </p>
            </div>
          </div>  
          ))}
      </div>
    )
}
export default GetFromDatabase