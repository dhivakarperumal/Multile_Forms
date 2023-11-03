import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Container} from 'react-bootstrap';
import './datas.css';

const Datas = () => {
    const [formData,setFormData]=useState([])

    const getDatas= async () =>{
        const res=await axios.get("https://651ae52a340309952f0e03d2.mockapi.io/dhiva")
        setFormData(res.data)
      }
      useEffect(()=>{
        getDatas()
         
      },[])
  return (
    <>
    <br></br>
    <Container fluid className='mt-5' >
       <div className='Tables_bots'>
    <Table>
      <thead>
          <th>S.NO</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Password</th>
          <th>MobileNo</th>
          <th>DOB</th>
          <th>Nationality</th>
          <th>Distric</th>
          <th>Address</th>
          <th>Degree</th>
          <th>College</th>
          <th>Major</th>
          <th>CGPA</th>
          <th>Others</th>
          <th>DOJ</th>
       
      </thead>
      <tbody>
      {
        formData.map(u=>(
        <tr>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>{u.mobile}</td>
            <td>{u.dateofbirth}</td>
            <td>{u.nationality}</td>
            <td>{u.dist}</td>
            <td>{u.address}</td>
            <td>{u.deg}</td>
            <td>{u.college}</td>
            <td>{u.major}</td>
            <td>{u.cgpa}</td>
            <td>{u.description}</td>
            <td>{u.join}</td>
        </tr>
    ))
    }    
        
      </tbody>
    </Table>
      
    </div>

    </Container>
   </>
  )
}

export default Datas


//username: "",
  //   email: "",
  //  : "",
  //   confirmPassword: "",
  //   firstName: "",
  //   lastName: "",
  //   mobile:"",
  //   dateofbirth:"",
  //   country:"",
  //   address:"",
  //   dist:"",
  //   deg:"",
  //   college:"",
  //   major:"",
  //   cgpa:"",
  //   nationality: "",
  //   other: "",