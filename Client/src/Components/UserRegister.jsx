import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
import Form from 'react-bootstrap/Form';


function UserRegister() {

   
    
    const [newFormDetails,setNewFormDetails] =useState({
        name:"",
        email:"",
        password:"",
        location:""
    })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fields = Object.fromEntries(formData);
        console.log('feild check',fields);


        axios.post("/register", fields)
    
            .then((response)=> {
                console.log("react responseponse",response)
                console.log("All Data",response.data)
                console.log("this is new List details",response.config.data)
                const nameDataGet=response.config.data
                const parsedData = JSON.parse(nameDataGet);
               // const nameData = parsedData.title;
              console.log('check1234',parsedData)
            }).catch((e) =>{
                console.log('error',e);
            });
            // responseet the form fields after submission
            setNewFormDetails({
                name:"",
                email:"",
                password:"",
                location:""
            });
    };
        const handleChange=(event) =>{
            const {name, value} =event.target;
            setNewFormDetails({
                ...newFormDetails,
                [name]:value,
            })
        }
        
    // const [commentLength,setCommentLength] =useState(0)
    // const handleCommentLength=(num)=>{
    //     setCommentLength(num)
    //     console.log(num)
    // }
    
    
    
      return (
        <>
        <div className="register-form">
        <form onSubmit={handleSubmit}>
            <h1>Your Details</h1>
            <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control type="text" placeholder="Name" style={{ width: '300px' }} name="name" onChange={handleChange}  value={newFormDetails.name} />
            </FloatingLabel>
            <br/>
       

            <FloatingLabel controlId="floatingEmail" label="Email addresponses" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" style={{ width: '300px' }} name='email'   onChange={handleChange} value={newFormDetails.email} />
            </FloatingLabel>
            <br/>


            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="more than 8 chalacters" style={{ width: '300px' }} name='password'  onChange={handleChange} value={newFormDetails.password}/>
            </FloatingLabel>
            <br/>

            <FloatingLabel controlId="floatingLocation" label="Location">
                <Form.Control type="text" placeholder="location" style={{ width: '300px' }} name="location"  onChange={handleChange}  value={newFormDetails.location} />
            </FloatingLabel>


           <input type="submit"></input>
           </form>
        </div>
        </>
      );
}

export default UserRegister





