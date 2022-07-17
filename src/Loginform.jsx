import React from "react";
import './App.css'

function LoginForm({login}) {
    const [details , setDetails] = React.useState({
        name:"", password:""
      });
    
      const handleSubmit = e =>{
        e.preventDefault();
    
        login(details);
    }
    
    return (

      
        <div class="container">

            <h1 className="text-green-700">LOGIN</h1>


        <form onSubmit={handleSubmit}>
        <div className="">

<div className="form" >
        <label className="label">Name 
        </label>
         <input
         className="input" type="text" 
         name="name" 
         id="name" onChange= 
         {e=>setDetails({...details, 
          name: e.target.value})} value= 
         {details.name}/>
        </div>

            
        <div className="form">
        <label className="label">Password </label>
        <input  className="input" type="password" 
         name="password" id="password" onChange= 
        {e=>setDetails({...details, 
        password: e.target.value})} value= 
        {details.password}/>
        </div>

                <div>
                    
          <input className="button" 
                        type="submit" value="Login"  >
           </input>
        </div>


            </div>
            </form>

            </div>
    );
}

export default LoginForm;