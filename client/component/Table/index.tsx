import { MDBDataTable } from "mdbreact";
import { useState } from "react";
import { deleteMitra } from "../../lib/deleteMitra";
import Modal from "../Modal/index";
interface DataTableProps {
  dataTab: Array<any>;
}
interface Type {
  id: string;
  namaToko: string;
  onClick: () => void;
}

const Table = (props: DataTableProps) => {
  const [showModal, setShowModal] = useState(false);

  const handlerUpdate = () => {
    setShowModal(true);
  };
  const handlerDelete = (id: Type, namaToko: Type) => {
    alert("you will delete partner " + namaToko);
    deleteMitra(id);
  };
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
        width: 100,
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
    rows: dataTab.map((data) => {
      return {
        namaToko: data.namaToko,
        status: data.status,
        provinsi: data.data.provinsi,
        kota: data.data.kota,
        alamat: data.data.alamat,
        kontak: data.data.kontak,
        updated_date: data.data.updated_date,
        update: (
          <a
            onClick={() => {
              handlerUpdate();
            }}
          >
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a onClick={() => handlerDelete(data._id, data.namaToko)}>
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      };
    }),
  };

  return (
    <>
      <MDBDataTable responsive striped bordered small data={data} />
      {showModal ? <Modal kondisi={true} /> : null}
    </>
  );
};

export default Table;
