import { MDBDataTable } from "mdbreact";
const Table = () => {
  const data = {
    columns: [
      {
        label: "Toko",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100
      },
      {
        label: "Kota/Kab",
        field: "kota",
        sort: "asc",
        width: 200,
      },
      {
        label: "Lokasi",
        field: "lokasi",
        sort: "asc",
        width: 150,
      },
      {
        label: "Kontak",
        field: "kontak",
        sort: "asc",
        width: 100,
      },
      {
        label: "Update date",
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
        status: "terverikasi",
        kota: "Bandar Lampung",
        lokasi: "Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35123",
        kontak: "081328123123",
        date: "2021/07/30",
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
        name: "Prescott Bartlett",
        status: "terverikasi",
        kota: "Bandar Lampung",
        lokasi: "Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35123",
        kontak: "081328123123",
        date: "2021/07/30",
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
        name: "Prescott Bartlett",
        status: "terverikasi",
        kota: "Bandar Lampung",
        lokasi: "Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35123",
        kontak: "081328123123",
        date: "2021/07/30",
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
        name: "Prescott Bartlett",
        status: "terverikasi",
        kota: "Bandar Lampung",
        lokasi: "Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35123",
        kontak: "081328123123",
        date: "2021/07/30",
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
        name: "Prescott Bartlett",
        status: "terverikasi",
        kota: "Bandar Lampung",
        lokasi: "Jl. Teuku Umar No.38B, Sidodadi, Kec. Kedaton, Kota Bandar Lampung, Lampung 35123",
        kontak: "081328123123",
        date: "2021/07/30",
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

  return <MDBDataTable responsive striped bordered small data={data} />;
};

export default Table;
