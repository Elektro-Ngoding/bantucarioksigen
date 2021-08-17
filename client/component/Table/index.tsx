import { MDBDataTable } from "mdbreact";
import { useState } from "react";
import Moment from "react-moment";
import { activeMitra } from "../../lib/activeMitra";
import { deleteMitra } from "../../lib/deleteMitra";
import ModalDetail from "../Modal/detail";
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
  const [_id, set_id] = useState<string>();
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
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
  const [waktuTutup, setWaktuTutup] = useState<string>();

  const handleCloseModal = () => {
    setModal(false);
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
    WaktuBuka: string,
    WaktuTutup: string
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
            WaktuBuka,
            WaktuTutup
          )
        : null;
    }
  };
  const handleDetail = (
    id: string,
    Toko: string,
    StatusBuka: string,
    StokBarang: string,
    Antrian: string,
    WaktuBuka: string,
    WaktuTutup: string
  ) => {
    setModalDetail(true);
    set_id(id);
    setNamaToko(Toko);
    setStatusBuka(StatusBuka),
      setStokBarang(StokBarang),
      setAntrian(Antrian),
      setWaktuBuka(WaktuBuka);
    setWaktuTutup(WaktuTutup);
  };

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
    WaktuBuka: string,
    WaktuTutup: string
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
    setWaktuTutup(WaktuTutup);
  };

  const handleDelete = (id: Type, namaToko: Type) => {
    const res = confirm("you will delete partner " + namaToko);

    {
      res ? deleteMitra(id) : null;
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
        label: "Detail",
        field: "detail",
        sort: "asc",
        width: 100,
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
          <div className="border-0 rounded-lg relative flex flex-col outline-none focus:outline-none">
            <div
              className="text-white bg-pink-500 active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  data.data.waktuBuka,
                  data.data.waktuTutup
                );
              }}
            >
              Aktivasi
            </div>
          </div>
        ),
        provinsi: data.data.provinsi,
        kota: data.data.kota,
        alamat: data.data.alamat,
        kontak: data.data.kontak,
        updated_date: <Moment fromNow>{data.data.updated_date}</Moment>,
        detail: (
          <div className="border-0 rounded-lg relative flex flex-col outline-none focus:outline-none">
            <div
              onClick={() =>
                handleDetail(
                  data._id,
                  data.namaToko,
                  data.data.statusBuka,
                  data.data.stokBarang,
                  data.data.antrian,
                  data.data.waktuBuka,
                  data.data.waktuTutup
                )
              }
              className="text-white bg-blue-900 active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Detail
            </div>
          </div>
        ),
        update: (
          <div className="border-0 rounded-lg relative flex flex-col outline-none focus:outline-none">
            <div
              className="text-white bg-green-500 active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  data.data.waktuBuka,
                  data.data.waktuTutup
                );
              }}
            >
              Update
            </div>
          </div>
        ),
        delete: (
          <div className="border-0 rounded-lg relative flex flex-col outline-none focus:outline-none">
            <div
              onClick={() => handleDelete(data._id, data.namaToko)}
              className="text-white bg-red-500 active:bg-blue-600 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Delete
            </div>
          </div>
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
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    {" "}
                    Update Data Mitra {namaToko}
                  </p>
                  <svg
                    onClick={() => setModal(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                <div className="bg-gray-50 rounded">
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
                    waktuTutup={waktuTutup}
                    handleCloseModal={() => handleCloseModal()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {modalDetail ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    Detail Mitra {namaToko}
                  </p>
                  <svg
                    onClick={() => setModalDetail(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                {/*body*/}
                <div className="px-4 pt-2 bg-gray-50 rounded">
                  <ModalDetail
                    _id={_id}
                    namaToko={namaToko}
                    statusBuka={statusBuka}
                    stokBarang={stokBarang}
                    antrian={antrian}
                    waktuBuka={waktuBuka}
                    waktuTutup={waktuTutup}
                  />
                </div>
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
