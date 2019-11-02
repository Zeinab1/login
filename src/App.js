import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './App.css';


function App() {
  
 
  function handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  return (
  
    <div className="App">
      <div className="container">
      <div className="row">

      <div class="col-6"  >
        <h3>Login</h3>
        <p>Don't have an account? <span>Create your account,</span>it takes less than a minute</p>
      <form  onSubmit={handleSubmit} className="white" >
   
        <div className="md-form">
      
        <input type="email" id="inputEmail" className="form-control" ></input>
        <label htmlFor="inputEmail">Username</label>
        </div>
     
        <div className="md-form">
        
        <input type="password" id="inputPassword" className="form-control" ></input>
        <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="row">
          <div className="col-6">
          <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked"></input>
           <label className="custom-control-label" htmlFor="defaultUnchecked" >Remmember Me</label>
        </div>
          </div>
          <div className="col-6">
            <label className="forgot-pass-label">Forgot password?</label>
          </div>
        </div>
      
      </form>
      </div>

      <div className="col-6"  >     
         <div className="left-side">
            <div className="overlay">
              <div className="header">Welcome</div>
              <div className="border"></div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
            </div>
         </div>
      </div>
      <div className="row">
        <div className="col-12">
        <div className="login-button">
      <button class="btn btn-primary btn-rounded" type="submit">Login </button>
      </div>
        </div>
      
      
         <div className="col-12">
         <div className="inner">
       <label classNam="label-name">or login with </label>
       </div>
     
     <div className="inner">
     <label classNam="label-name">  <button type="button"  className="btn btn-sm btn-facebook btn-alignment-center"><span className="fab fa-facebook-f pr-1"></span>  </button>
        
        </label>

        
        </div>
         </div>
     
       </div>
      
        </div>
     </div>
   
     </div>
      
      
   
    
  
  
  );
 
}

export default App;
