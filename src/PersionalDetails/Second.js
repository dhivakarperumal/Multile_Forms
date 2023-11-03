import React from 'react'

const Second = ({ formData, setFormData }) => {
  return (
   
     <div className="personal-info-container">
      <div>

      <div className='del'>
          <label className='de'><b>FirstName</b></label>
      </div>
    <input
      type="text"
      placeholder="First Name..."
      value={formData.firstName}
      onChange={(e) => {
        setFormData({ ...formData, firstName: e.target.value });
      }}
    />
    <div className='del'>
          <label className='de'><b>LastName</b></label>
        </div>
    <input
      type="text"
      placeholder="Last Name..."
      value={formData.lastName}
      onChange={(e) => {
        setFormData({ ...formData, lastName: e.target.value });
      }}
    />
    <div className='del'>
          <label className='de'><b>Date Of Birth</b></label>
        </div>
    <input
      type="date"
      
      value={formData.dateofbirth}
      onChange={(e) => {
        setFormData({ ...formData, dateofbirth: e.target.value });
      }}
    />

<div className='del'>
          <label className='de'><b>Email</b></label>
        </div>
        <input
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
{/* <div className='del'>
          <label className='de'><b>Country</b></label>
        </div>
    <input
      type="text"
      placeholder="Country Name..."
       value={formData.country}
       onChange={(e) => {
        setFormData({ ...formData, country: e.target.value });
      }}
    /> */}
    <div className='del'>
          <label className='de'><b>District</b></label>
        </div>
    <input
      type="text"
      placeholder="Enter a District Name"
       value={formData.dist}
       onChange={(e) => {
        setFormData({ ...formData, dist: e.target.value });
      }}
    />

<div className='del'>
          <label className='de'><b>Address</b></label>
        </div>
    <input
      type="text"
      placeholder="Enter a Address"
       value={formData.address}
       onChange={(e) => {
        setFormData({ ...formData, address: e.target.value });
      }}
    />
  </div>
   </div>
  )
}

export default Second
