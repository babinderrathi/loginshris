import React from 'react'
import LoginForm from './Loginform';
import Loginpage from './Loginpage';
import './App.css';

function App() {
  const details = {
    username: "Shri",
    password: "12345"
}
const [user , setuser] = React.useState({name:"", 
password:""});

  const login = userLogin => {
  
    if (userLogin.password == details.password &&  userLogin.name == details.username) {
      console.log("password match");
      console.log("userName match");
      setuser({
        name: userLogin.name,
        password: userLogin.password
      });
    }
    else {
      console.log("Didn't match")
    }
  }

return (
  <div>
    
    {(user.password !== "") ? (
      <Loginpage/>
      
    ) : (
      <div class="bg">
          <LoginForm login={login}> </LoginForm>
          </div>
    )}    
        
 </div>
);
}

export default App
