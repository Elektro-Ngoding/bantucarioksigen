import { MDBDataTable } from "mdbreact";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteMitra } from "../../lib/deleteMitra";
import { activeMitra } from "../../lib/activeMitra";
import Modal from "../Modal/index";
import Moment from "react-moment";
interface DataTableProps {
  dataTab: Array<any>;
}
interface Type {
  id: string;
  namaToko: string;
  onClick: () => void;
}

const Table = (props: DataTableProps) => {
  const router = useRouter();
  const [_id, set_id] = useState<string>();
  const [modal, setModal] = useState(false);
  const [namaToko, setNamaToko] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [provinsi, setProvinsi] = useState<string>();
  const [kota, setKota] = useState<string>();
  const [alamat, setAlamat] = useState<string>();
  const [kontak, setKontak] = useState<number>();
  const [statusBuka, setStatusBuka] = useState<string>();
  const [stokBarang, setStokBarang] = useState<string>();
  const [antrian, setAntrian] = useState<string>();
  const [waktuBuka, setWaktuBuka] = useState<string>();
  const handleUpdate = (
    id: string,
    Toko: string,
    Status: string,
    Provinsi: string,
    Kota: string,
    Alamat: string,
    Kontak: number,
    StatusBuka: string,
    StokBarang: string,
    Antrian: string,
    WaktuBuka: string
  ) => {
    setModal(true);
    set_id(id);
    setNamaToko(Toko);
    setStatus(Status);
    setProvinsi(Provinsi);
    setKota(Kota);
    setAlamat(Alamat);
    setKontak(Kontak);
    setStatusBuka(StatusBuka),
      setStokBarang(StokBarang),
      setAntrian(Antrian),
      setWaktuBuka(WaktuBuka);
  };

  const handleDelete = (id: Type, namaToko: Type) => {
    const res = confirm("you will delete partner " + namaToko);

    {
      res ? deleteMitra(id) : null;
    }
  };

  const handleAktivasi = (
    id: string,
    Toko: string,
    Status: string,
    Provinsi: string,
    Kota: string,
    Alamat: string,
    Kontak: number,
    StatusBuka: string,
    StokBarang: string,
    Antrian: string,
    WaktuBuka: string
  ) => {
    const action = confirm(`you are activate account mitra ${namaToko} ?`);

    {
      action
        ? activeMitra(
            id,
            Toko,
            Status,
            Provinsi,
            Kota,
            Alamat,
            Kontak,
            StatusBuka,
            StokBarang,
            Antrian,
            WaktuBuka
          )
        : null;
    }
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
        label: "Aktivasi",
        field: "aktivasi",
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
        aktivasi: (
          <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
            <button
              className="text-white bg-pink-500 active:bg-blue-600 font-bold uppercase text-sm px-1 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={() => {
                handleAktivasi(
                  data._id,
                  data.namaToko,
                  data.status,
                  data.data.provinsi,
                  data.data.kota,
                  data.data.alamat,
                  data.data.kontak,
                  data.data.statusBuka,
                  data.data.stokBarang,
                  data.data.antrian,
                  data.data.waktuBuka
                );
              }}
            >
              Aktivasi
            </button>
          </div>
        ),
        provinsi: data.data.provinsi,
        kota: data.data.kota,
        alamat: data.data.alamat,
        kontak: data.data.kontak,
        updated_date: <Moment fromNow>{data.data.updated_date}</Moment>,
        update: (
          <a
            onClick={() => {
              handleUpdate(
                data._id,
                data.namaToko,
                data.status,
                data.data.provinsi,
                data.data.kota,
                data.data.alamat,
                data.data.kontak,
                data.data.statusBuka,
                data.data.stokBarang,
                data.data.antrian,
                data.data.waktuBuka
              );
            }}
          >
            <div className="btn btn-success">Update</div>
          </a>
        ),
        delete: (
          <a onClick={() => handleDelete(data._id, data.namaToko)}>
            <div className="btn btn-danger">Delete</div>
          </a>
        ),
      };
    }),
  };

  return (
    <>
      <MDBDataTable responsive striped bordered small data={data} />
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-end p-1 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Data Mitra {namaToko}
                  </h3>
                </div>
                {/*body*/}
                <Modal
                  _id={_id}
                  namaToko={namaToko}
                  status={status}
                  provinsi={provinsi}
                  kota={kota}
                  alamat={alamat}
                  kontak={kontak}
                  statusBuka={statusBuka}
                  stokBarang={stokBarang}
                  antrian={antrian}
                  waktuBuka={waktuBuka}
                />
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Table;
