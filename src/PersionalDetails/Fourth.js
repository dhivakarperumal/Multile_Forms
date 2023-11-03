import React from 'react'

const Fourth = ({ formData, setFormData }) => {
  return (
    <>

      <div className="personal-info-container">
        <div>

          <div className='del'>
            <label className='de'><b>Nationality</b></label>
          </div>
          <input
            type="text"
            placeholder="Enter a Nationality"
            value={formData.nationality}
            onChange={(e) => {
              setFormData({ ...formData, nationality: e.target.value });
            }}
          />

          <div className='del'>
            <label className='de'><b>Date Joinng </b></label>
          </div>
          <input
            type="date"

            value={formData.join}
            onChange={(e) => {
              setFormData({ ...formData, join: e.target.value });
            }}
          />


          <div className='del'>
            <label className='de'><b>Description Details</b></label>
          </div>
          <input
            type="text"
            placeholder="Enter Description Details"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />

          <div className='del'>
            <label className='de'><b>Other Details</b></label>
          </div>
          <input
            type="text"
            placeholder="Enter Other Details"
            value={formData.other}
            onChange={(e) => {
              setFormData({ ...formData, other: e.target.value });
            }}
          />
        </div>
      </div>

    </>
  )
}

export default Fourth
