import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

function Driving_schools() {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    const getSchool = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/listSchools");

        const data = await res.json();
        setSchoolData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSchool();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/deleteSchool/${id}`,{
        method:"DELETE"
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const school = [
  //   {
  //     _id: "45",
  //     username: "school-name",
  //   },
  //   {
  //     _id: "46",
  //     username: "school-name",
  //   },
  //   {
  //     _id: "15",
  //     username: "school-name",
  //   },
  // ];

  const columns = [
    {
      field: "user",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='d-felx align-items-center'>
            <img
              className='rounded-circle me-2'
              style={{ width: "32px", height: "32px", objectFit: "cover" }}
              src={
                params.row.img ||
                "https://i.pinimg.com/564x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
              }
              alt=''
            />
            {params.row.username}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: " Delete",
      width: 300,
      renderCell: (params) => {
        return (
          <div className='d-flex align-items-center gap-2'>
            <button className='btn btn-danger' onClick={() => handleDelete(params.row._id)}>Delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <div className='p-3 m-3 position-relative' style={{ flex: "4" }}>
      <div className='d-flex align-items-center justify-content-between'>
        <h1 className='mb-3'>schools List</h1>
      </div>
      <form
        className='w-100 position-relative my-3'
        role='search'
        data-aos='fade-up'>
        <input
          className='form-control bg-white fw-bold'
          type='search'
          placeholder='school Name'
          style={{ fontFamily: "inherit " }}
        />
        <Search
          className=' fs-3  position-absolute top-50'
          style={{
            fontSize: "30",
            right: "25px",
            transform: "translatey(-50%)",
          }}
        />
      </form>

      <DataGrid
        rows={schoolData}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default Driving_schools;
