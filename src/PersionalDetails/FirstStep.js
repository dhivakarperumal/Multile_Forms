import React from 'react';
import './style.css';
const FirstStep = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div>
        <div className='del'>
          <label className='de'><b>Username</b></label>
        </div>
        <input
          type="text"
          placeholder="Username"
          name='username'
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData,username: event.target.value })
          }
        />

      
        <div className='del'>
          <label className='de'><b>Email</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a Email Address"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />

        <div className='del'>
          <label className='de'><b>Mobile No</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a MobileNo"
          value={formData.mobile}
          onChange={(event) =>
            setFormData({ ...formData, mobile: event.target.value })
          }
        />
        <div className='del'>
          <label className='de'><b>Password</b></label>
        </div>
        <input
          type="password"
          placeholder="Enter a Password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <div className='del'>
          <label className='de'><b>ConfirmPassword</b></label>
        </div>
        <input
          type="password"
          placeholder="Enter a Confirm Password"
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
      </div>
    </div>
  )
}

export default FirstStep
