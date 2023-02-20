import React, { useState } from 'react';
import axios from 'axios'
import "./Create.css"
import { Button, Form } from 'semantic-ui-react'

    export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data1,setData1]  = useState([]) 
    const [update , setUpdate] = useState([])

   const updateData = (e) => {
  let updatedata = new FormData()
  updatedata.append("first_name",firstName)
  updatedata.append("middle_name",middleName)
  updatedata.append("last_name",lastName)
  console.log(updatedata)
   axios.patch("http://127.0.0.1:8000/app/profile/",updatedata)
  .then ((response) => {
    debugger
    setUpdate(response.updatedata)
  }).catch(error => {
   console.log('There was an error!', error);
})
}
  
    const postData = (e) => {
   let data = new FormData()
      data.append("first_name",firstName)
      data.append("middle_name",middleName)
      data.append("last_name",lastName)
       axios.get("http://127.0.0.1:8000/app/profile/",data)
      .then ((response) => {
        setData1(response.data)
      }).catch(error => {
       console.log('There was an error!', error);
   })
  }
  
    return (
        <div>
        <h2 className="main-header text-center py-3 fs-1">React Crud Operations</h2>
            {/* <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                    
                </Form.Field>
                <Form.Field>
                    <label>Middle Name</label>
                    <input placeholder='Middle Name' onChange={(e) => setMiddleName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form> */}
            <table class="table">
      <thead class="table table-dark">
        <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Middle</th>
      <th scope="col">Last</th>
       </tr>
      </thead>
  <tbody class="thead-light">
    {data1.map((item) => {
    return (
     <tr> 
      <td scope='row'>{item.id}</td>
      <td> {item.first_name}</td>
      <td>{item.middle_name}</td>
      <td>{item.last_name}</td>
      <td></td>
       </tr>
  )})}
    
  </tbody>
</table>
             {/* <ul>
  {data1.map((item) => {
    
     return (
      <li >
        {item.id}<br/>
        {item.first_name} <br/>
        {item.middle_name}<br/>
        


      </li>
   )})}

      </ul> */}

            <Button onClick={postData} type='submit'className='btn btn-primary'>Submit</Button> 
            <Button onClick={updateData} type='submit' className='m-5 btn btn-success'>Update</Button>
        </div>
    )
}