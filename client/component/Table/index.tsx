import { MDBDataTable } from "mdbreact";

interface DataTableProps {
dataTab: Array<any>
}


const Table = (props: DataTableProps) => {
  const { dataTab } = props;
  const data = {
    columns: [
      {
        label: "Toko",
        field: "namaToko",
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
        label: "Provinsi",
        field: "provinsi",
        sort: "asc",
        width: 200,
      },
      {
        label: "Kota/Kab",
        field: "kota",
        sort: "asc",
        width: 200,
      },
      {
        label: "Alamat",
        field: "alamat",
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
        field: "updated_date",
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
    rows : dataTab.map(data => {
      return {
          namaToko: data.namaToko,

          status: data.status,
          provinsi: data.data.provinsi,
          kota: data.data.kota,
          alamat: data.data.alamat,
          kontak: data.data.kontak,
          updated_date: data.data.updated_date,
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
      }
    })
  };

  return (
    <>
    <MDBDataTable responsive striped bordered small data={data} />;
    </>
  )

};

export default Table;
