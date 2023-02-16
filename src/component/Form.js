// import React ,{Component}from 'react'
// // import './Form.css'

// export default class Form extends Component {
//   constructor(){
//         super()
//         this.state ={
//           Username:"",
//           email:"" ,
//           ContactNo:"",
//           password:"",
//           ConfirmPswd:""
//         }
//    }





//    handleClick(e) {
//     this.setState({Username:e.target.value})
//    }
//   render() {

//     return (
//       <div>
//       <h1> grttjj{this.state.Username}</h1>

//         <div class="box">
//                 <div class="form">
//                     <h2>Login</h2>
//                     <div class="inputBox">
                      
//                         <input type="text" value={this.state.Username}  onChange={(e) => this.state.Username(e)}/>
//                         <span>Username</span>
//                     </div>
    
//                     <div class="inputBox">
//                         <input type="email" required="required" value={this.state.email}/>
//                         <span>Email</span>
//                         <i></i>
//                     </div>
//                     <div class="inputBox">
//                         <input type="number" required="required"  value={this.state.ContactNo}/>
//                         <span>Contact Number</span>
//                         <i></i>
//                     </div>
//                     <div class="inputBox">
//                         <input type="password" required="required" value={this.state.password}/>
//                         <span>Password</span>
//                         <i></i>
//                     </div>
//                     <div class="inputBox">
//                         <input type="password" required="required" value={this.state.ConfirmPswd}/>
//                         <span>Confirm Password</span>
//                         <i></i>
//                     </div>
//                     <div class="links">
//                         <a href="#">Forgot password?</a>
//                         <a href="#">Sign Up</a>
//                     </div>
//                     <a href="#"><input type="submit" value="Login" onClick={this.handleClick}/></a>
//                 </div>
//             </div>
          
//       </div>
//       )
//   }
// }




import React, { Component } from 'react'
import girlImage from "../component/asssets/image1.png"
import "./Form.css"
export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:"",
      email:"" ,
      contactNo:"",
      password:"",
      confirmPswd:"",
    }
}

handleUserInput = (e) => {
  let nameVal = /^[A-Za-z]+$/;
  const value = e.target.value;     
  if(value ==""|| nameVal.test(value))

  this.setState({username: value});
}

handleUserEmail = (e) => {
  const value = e.target.value;
    this.setState({email: value});
  
}


handleUserNumber = (e) => {
  const value = e.target.value;
  if((value.charAt(0) != 9) && 
  (value.charAt(0) != 8) && (value.charAt(0) != 7)){
  alert("Please Start Your Number with 9, 8, 7");
}
else {
    this.setState({contactNo: value});

}
}

handleUserPassword =(e) => {
  const value = e.target.value;
  
      this.setState({password: value});
    
  
} 


handleConfirmPswd =(e) => {
  const value = e.target.value;
  this.setState({confirmPswd: value});
}


handleClick = (e) => {
  e.preventDefault()
let firstName = this.state.username;
let userEmail = this.state.email;
let userContact = this.state.contactNo;
let userPassword = this.state.password;
let userConfirmPswd =  this.state.confirmPswd

if(firstName==""){
  alert("Username should not be empty")
  return false;
} 


if (userEmail ==""){
  alert("email cant be empty")
  return false
  }
  else if (userEmail.indexOf("@") <=0){
    alert("Please Use @ for valid email")
    return false;

  }else if((userEmail.charAt(userEmail.length-4)!='.') && 
  (userEmail.charAt(userEmail.length-3)!='.')){
        alert("Please Valid . input");
        return false
}

 else if(userContact==""){
  alert("Contact should not be empty");
  return false
}

else if(isNaN(userContact)){
  alert("Please input Number Value");
  return false
}
else if(userContact.length <10){
  alert("Please Fill 10 Digit Number");
  return false
}
else if(userContact.length >10){
  alert("Please Fill 10 Digit Number");
  return false
}

 if (userPassword.length <= 0) {
 alert("Password should not be empty") ;
 return false
 }
 else if (userPassword.length >=6) {
 alert("Password length should be between 6 and 20");}
  return false



}

  render() 
  {

    return (
      <div class="container">
      <div class="row m-5 no-gutters">
      <div class="col-md-6 d-none d-md-block">
      <img src={girlImage} style={{minHeight:"100%"}} />
      </div>
      <div class="col-md-6 bg-white px-5">
      <h3 class="pb-3 h1">Sign Up Form</h3>
      
      <div class="form-style">
      <form>
        <div class="form-group pb-3">    
          <input  type="text" placeholder="Full Name" class="form-control" name='username'  aria-describedby="emailHelp" onChange={(e) => this.handleUserInput(e)} value={this.state.username}/>   
        </div>
        <div class="form-group pb-3">    
          <input type="email" placeholder="Email" class="form-control" name='email' aria-describedby="emailHelp" value={this.state.email} onChange={(e) => this.handleUserEmail(e)} />  
        </div>
        <div class="form-group pb-3"> 
          <input type="number" placeholder="Contact" class="form-control" name='contactNo'    onChange={(e)=>this.handleUserNumber(e)} aria-describedby="emailHelp" value={this.state.contactNo}/>   
        </div>
        <div class="form-group pb-3">   
          <input type="password" placeholder="Password" class="form-control" name='password' value={this.state.password} onChange={(e)=>this.handleUserPassword(e)}                       />
        </div>
        <div class="form-group pb-3">   
          <input type="text" placeholder="Confirm Password" class="form-control"  name='confirmPswd' value={this.state.confirmPswd} onChange={(e)=> this.handleConfirmPswd(e)} />
        </div>
        
         <div class="pb-3 mx-5" id='btn2'>
        <button type="submit" class="btn btn-primary font-weight-bold mt-5" id='btn1' onClick={this.handleClick}>Sign Up</button>
         </div>
      </form>
        <div class="text-center pt-4">
        Already have an account? <a href="#"> Log In </a>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
  }

}
