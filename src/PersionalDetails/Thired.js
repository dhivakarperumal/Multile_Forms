import React from 'react';

const Thired = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <div>

        <div className='del'>
          <label className='de'><b>Degree</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a Degree"
          value={formData.deg}
          onChange={(e) => {
            setFormData({ ...formData, deg: e.target.value });
          }}
        />
        <div className='del'>
          <label className='de'><b>University/College</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a College Name"
          value={formData.college}
          onChange={(e) => {
            setFormData({ ...formData, college: e.target.value });
          }}
        />
        <div className='del'>
          <label className='de'><b>Major/Field of Study</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a Spilaizhations"
          value={formData.major}
          onChange={(e) => {
            setFormData({ ...formData, major: e.target.value });
          }}
        />

        <div className='del'>
          <label className='de'><b>CGPA</b></label>
        </div>
        <input
          type="text"
          placeholder="Enter a CGPA"
          value={formData.cgpa}
          onChange={(event) =>
            setFormData({ ...formData, cgpa: event.target.value })
          }
        />

      </div>
    </div>
  )
}

export default Thired
