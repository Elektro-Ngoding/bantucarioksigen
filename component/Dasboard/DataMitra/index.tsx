import { useState } from "react";
import ModalAddMitra from "../../Modal/addMitra";
import Table from "../../Table";
interface Type {
  dataTab: Array<any>;
}

export default function DataMitra(props: Type) {
  const { dataTab } = props;

  const [modalAddData, setModalAddData] = useState(false);
  return (
    <>
      <div className="bg-gray-100 pt-2 pb-3">
        <div className="text-center">
          <h1>
            <b>Data Mitra</b>
          </h1>
        </div>

        <div className="flex flex-start px-3">
          <div className="rounded" onClick={() => setModalAddData(true)}>
            <div className="bg-primary rounded text-white p-3">
              <b aria-hidden="true">Tambah Data</b>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="rounded">
            <Table dataTab={props.dataTab} />
          </div>
        </div>
      </div>
      {modalAddData ? (
        <>
          <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="px-2 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    {" "}
                    Add New Mitra
                  </p>
                  <svg
                    onClick={() => setModalAddData(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div className="bg-gray-50 rounded">
                  <ModalAddMitra setModalAddData={setModalAddData} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
