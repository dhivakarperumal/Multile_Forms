import React,{ useState} from 'react';
import FirstStep from './FirstStep';
import Second from './Second';
import Thired from './Thired';
import Fourth from './Fourth';
import './style.css';
import axios from 'axios';

const PersionalDetails = () => {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(
    {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobile:"",
    dateofbirth:"",
    country:"",
    address:"",
    dist:"",
    deg:"",
    college:"",
    major:"",
    cgpa:"",
    nationality: "",
    other: "",
  }
  );

  const FormTitles = ["Register Now", "Personal Details", "Education Details","Other Details "];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Second formData={formData} setFormData={setFormData} />;
    } 
    else if (page === 2) {
      return <Thired formData={formData} setFormData={setFormData} />;
    }
    else {
      return <Fourth formData={formData} setFormData={setFormData} />;
    }
  };

 

 

  return (
    <>
      <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "0%" : page === 1 ? "33%" : page === 2 ? "50%" : "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button 
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Submit");
                alert("Success Fully ");
                console.log(formData);
                axios.post("https://651ae52a340309952f0e03d2.mockapi.io/dhiva",formData)
                .then(res=>setFormData(res))
               
               

              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>


  
    </>
  )
}

export default PersionalDetails
