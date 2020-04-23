import React, {useState, useEffect, Component} from "react";
import firebase from '../../config' 

const Database = () => {
   
        const [users,setUsers] = useState([])

    
    const fetchData =  async () =>{
        console.log("inside")
            firebase.firestore()
                .collection('users')
                .onSnapshot((snapshot)=>{
                    debugger
                const newUsers = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                    
                }))
                setUsers(newUsers);
            }) 
    }
    useEffect(() => {
        fetchData();
      }, []);    
      return(
        
        <div>
            
            {users.map((user) =>
               
               <h2>här: {user.timestamp}</h2>
                
                )}
        </div>
    );
}
export default Database;