import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { Search } from "@material-ui/icons";

function Self_tests() {
  const [testsData, setTestsData] = useState([]);

  useEffect(() => {
    const getTests = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/api/listInsuranceCompanies"
        );

        const data = await res.json();
        setTestsData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTests();
  }, [testsData]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/api/deleteQuestion/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const school = [
  //   {
  //     _id: "45",
  //     username: "question1",
  //     choice1: "choice name1",
  //     choice2: "choice name2",
  //     choice3: "choice name3",
  //     answer: "answer name",
  //     mark: "3",
  //   },
  //   {
  //     _id: "46",
  //     username: "question2",
  //     choice1: "choice name1",
  //     choice2: "choice name2",
  //     choice3: "choice name3",
  //     answer: "answer name",
  //     mark: "3",
  //   },
  //   {
  //     _id: "15",
  //     username: "question3",
  //     choice1: "choice name1",
  //     choice2: "choice name2",
  //     choice3: "choice name3",
  //     answer: "answer name",
  //     mark: "3",
  //   },
  // ];

  const columns = [
    {
      field: "user",
      headerName: "Questions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='d-felx align-items-center'>{params.row.username}</div>
        );
      },
    },
    {
      field: "choice1",
      headerName: "choice1",
      width: 200,
    },
    {
      field: "choice2",
      headerName: "choice2",
      width: 200,
    },
    {
      field: "choice3",
      headerName: "choice3",
      width: 200,
    },
    {
      field: "answer",
      headerName: "Answer",
      width: 200,
    },
    {
      field: "mark",
      headerName: "Mark",
      width: 200,
    },
    {
      field: "action",
      headerName: " Delete",
      width: 300,
      renderCell: (params) => {
        return (
          <div className='d-flex align-items-center gap-2'>
            <button
              className='btn btn-danger'
              onClick={() => handleDelete(params.row._id)}>
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className='p-3 m-3 position-relative' style={{ flex: "4" }}>
      <div className='d-flex align-items-center justify-content-between'>
        <h1 className='mb-3'>Tests</h1>
      </div>
      <form
        className='w-100 position-relative my-3'
        role='search'
        data-aos='fade-up'>
        <input
          className='form-control bg-white fw-bold'
          type='search'
          placeholder='search'
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
        rows={testsData}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default Self_tests;
