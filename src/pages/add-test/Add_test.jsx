import { useState } from "react";
import "./Add-test.css"

function Add_test() {
    const [newTest, setNewTest] = useState({});

    const handleChange = (e) => {
      setNewTest((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };

    console.log(newTest);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await fetch("http://127.0.0.1:8001/api/createQuestion", {
          method: "POST",
          headers: {
            "Content-Type": "appliction/json",
          },
          body: JSON.stringify(newTest),
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="p-3 my-2 newUser " style={{ flex: "4" }}>
        <h1 className="">Add Test</h1>
        <form className="row flex-wrap " data-aos="zoom-in" onSubmit={handleSubmit}>
          <div className="col-md-12">
            
            <div
              className="inputs  d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
                Question
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="question"
                name="question"
                onChange={handleChange}
              />
            </div>
            <div
              className=" inputs d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
               Choice1
              </label>
              <input
                className="form-control"
                type="text"
                placeholder=" Choice1"
                name=" choice1"
                onChange={handleChange}
              />
            </div>
            <div
              className=" inputs d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
               Choice2
              </label>
              <input
                className="form-control"
                type="text"
                placeholder=" Choice2"
                name=" choice2"
                onChange={handleChange}
              />
            </div>
            <div
              className=" inputs d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
               Choice3
              </label>
              <input
                className="form-control"
                type="text"
                placeholder=" Choice3"
                name=" choice3"
                onChange={handleChange}
              />
            </div>
            
            <div
              className=" inputs d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
             Answer
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="answer"
                name="answer"
                onChange={handleChange}
              />
            </div>
            <div
              className=" inputs d-flex flex-column mt-2"
              style={{ width: "400px" }}
            >
              <label
                className="mb-1 fw-bold text-secondary"
                style={{ fontSize: "14px" }}
              >
             Mark
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="mark"
                name="mark"
                onChange={handleChange}
              />
            </div>
            
          </div>
  
          <div className="col-3 mt-3">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    );
  }


export default Add_test
