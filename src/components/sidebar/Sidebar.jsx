import React from "react" 


import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar p-2">
      <div className="">
        <div
          className="text-secondary fw-bold "
          style={{ fontSize: "13px", opacity: "0.6" }}
        >
          Static
        </div>
        <ul className="p-2">
          <Link to="/">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
             
              Home
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <div
          className="text-secondary fw-bold "
          style={{ fontSize: "13px", opacity: "0.6" }}
        >
          Dashboard
        </div>
        <ul className="p-2">
          <Link to="/drivingschools">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
          
            Driving Schools
            </li>
          </Link>
          <Link to="/Addschool">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
            
          Add School
            </li>
          </Link>
          <Link to="/self-test">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
            
            Self Tests
            </li>
          </Link>
          <Link to="/addtest">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
              
           Add Test
            </li>
          </Link>
          <Link to="/insurancecompany">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
              
             Insurance companies
            </li>
          </Link>
          <Link to="/roles">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
       
             Add Company
            </li>
          </Link>
          <Link to="/pointorder">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
          
           
            </li>
          </Link>
        </ul>
      </div>
      <div className="">
        <div
          className="text-secondary fw-bold "
          style={{ fontSize: "13px", opacity: "0.6" }}
        >
         
        </div>
        <ul className="p-2">

          <Link to="/complaints">
            <li
              className="d-flex align-items-center gap-1 text-secondary rounded"
              style={{ cursor: "pointer" }}
            >
             
            
            </li>
          </Link>
        </ul>
        


      </div>
    </div>
  );
}

export default Sidebar;
