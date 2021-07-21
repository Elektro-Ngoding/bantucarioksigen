import React from "react";
import { MDBDataTable } from "mdbreact";
const TableComponent = () => {
  const data = {
    columns: [
      {
        label: "Toko",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Update",
        field: "update",
        sort: "asc",
        width: 100,
      },
      {
        label: "Delete",
        field: "delete",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Prescott Bartlett",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        update: (
          <a href="#">
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a href="#">
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        update: (
          <a href="#">
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a href="#">
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      },
      {
        name: "Martena Mccray",
        position: "Post-Sales support",
        office: "Edinburgh",
        age: "46",
        date: "2011/03/09",
        update: (
          <a href="#">
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a href="#">
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      },
      {
        name: "Unity Butler",
        position: "Marketing Designer",
        office: "San Francisco",
        age: "47",
        date: "2009/12/09",
        update: (
          <a href="#">
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a href="#">
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default TableComponent;
