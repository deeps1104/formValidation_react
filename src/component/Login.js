import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
   const [name,setName] = useState("")
    const [lastname,setLastname] =useState("")
    const [middlename,setMiddlename] =useState("")





    const nameHandler =(e) => {
      setName(e.target.value)
    }

    const middlenameHandler =(e) => {
      setMiddlename(e.target.value)
    }
  
    const lastNameHandler = (e) => {
      setLastname(e.target.value)
    }
   
     const getData = (e) => {
     let data = new FormData()
     
     data.append("first_name",name)
     data.append("middle_name",middlename)
     data.append("last_name",lastname)
     console.log(data)
     
      axios.patch("http://127.0.0.1:8000/app/profile/2/",data)
     .then ((response) => {
     }).catch(error => {
      console.log('There was an error!', error);
  })
     }
     
    
  return (
    <div className='login-form'>
      <div className='form1'>
        <div style={{width:"100%",marginBottom:"30px",alignItems:"center"}}>
        <h1 className='main'>Update User Names</h1>
      <hr />
        <div>
          <form className='login-field'>
            <input type="text" placeholder='FirstName' className='px-3 my-4' value={name} onChange={nameHandler}  /><br />
            <input type="text" placeholder='MiddleName' className='px-3 my-2' value={middlename} onChange={middlenameHandler}/> <br/>
            <input type="text" placeholder='Lastname' className='px-3 my-2' value={lastname} onChange={lastNameHandler}/>
          </form>
          </div>
          <div className='pt-4'>
            <button className='btn btn-primary px-5 login-btn' type='submit' onClick={getData}>Login</button>
          </div>
    </div>
    </div>
    </div> 

  )
}

export default Login