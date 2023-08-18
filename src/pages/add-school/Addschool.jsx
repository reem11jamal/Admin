import { useState } from "react";
import "./Add-school.css";

function Addschool() {
  const [newSchool, setNewSchool] = useState({});

  const handleChange = (e) => {
    setNewSchool((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://127.0.0.1:8001/api/createSchoolAccount", {
        method: "POST",
        headers: {
          "Content-Type": "appliction/json",
        },
        body: JSON.stringify(newSchool),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='p-3 my-2 newUser ' style={{ flex: "4" }}>
      <h1 className=''>Add School</h1>
      <form className='row flex-wrap ' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div
              className='inputs d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                School name
              </label>
              <input
                className='form-control'
                type='text'
                placeholder=' school name'
                name='name'
                onChange={handleChange}
              />
            </div>
            <div
              className='inputs  d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                Email
              </label>
              <input
                className='form-control'
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
            </div>
            <div
              className=' inputs d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                Password Confirmation
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='password'
                name='password_confirmation'
                onChange={handleChange}
              />
            </div>
            <div
              className=' inputs d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                Passsword
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='password'
                name='password'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className=' inputs d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                City
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='Location'
                name='city'
                onChange={handleChange}
              />
            </div>
            <div
              className=' inputs d-flex flex-column mt-2'
              style={{ width: "400px" }}>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                Location
              </label>
              <input
                className='form-control'
                type='text'
                placeholder='Location'
                name='location'
                onChange={handleChange}
              />
            </div>
            <div className='mb-1'>
              <label
                className='mb-1 fw-bold text-secondary'
                style={{ fontSize: "14px" }}>
                About
              </label>
              <textarea
                name='desc'
                onChange={handleChange}
                className='form-control'
                placeholder='About'
                style={{ height: "100px", width: "400px" }}></textarea>
            </div>
          </div>
        </div>

        <div className='col-3 mt-3'>
          <button className='btn btn-primary'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Addschool;
