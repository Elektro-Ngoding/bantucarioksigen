import React, { useEffect, useState } from "react";
import { getProduct } from "../../../lib/getProduct";
import ShopCardAdmin from "../../Card/ShopCardAdmin";
import ShopModal from "../../Modal/shop";
import UpdateModal from "../../Modal/updateShop";

export default function DataShop(props: any) {
  const [addDataModal, setAddDataModal] = useState(false);
  const [updateDataModal, setUpdateDataModal] = useState(false);
  const [dataProductMitra, setDataProductMitra] = useState([]);

  //update
  const [idUpdate, setIdUpdate] = useState();
  const [namaBarangUpdate, setNamaBarangUpdate] = useState();
  const [filteredData, setFilteredData] = useState(dataProductMitra);
  useEffect(() => {
    getProduct()
      .then((res) => {
        const data = res;
        setDataProductMitra(data);
      })
      .catch((err) => {
        alert("data not found");
      });
  }, [props]);

  const modalUpdate = (id: any, namaBarang: any) => {
    setIdUpdate(id);
    setNamaBarangUpdate(namaBarang);
    setUpdateDataModal(true);
    if (id !== "") {
      const results = dataProductMitra.filter((res: any) => {
        return res._id.toLowerCase().startsWith(id.toLowerCase());
      });
      console.log(results);
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };
  return (
    <>
      <div>
        <div className="grid sm:px-1 w-1/4">
          <div
            onClick={() => {
              setAddDataModal(true);
            }}
            className="text-white bg-blue-500 hover:bg-blue-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Tambah Product
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 sm:p-5 gap-4 md:grid-cols-5 md:gap-2">
          {dataProductMitra.map((res: any) => {
            return (
              <>
                <ShopCardAdmin
                  _id={res._id}
                  id_mitra={res.id_mitra}
                  namaToko={res.namaToko}
                  namaBarang={res.data.namaBarang}
                  image_url={res.data.image_url}
                  provinsi={res.data.provinsi}
                  kota={res.data.kota}
                  product_price={res.data.product_price}
                  product_url={res.data.product_url}
                  public_id={res.data.public_id}
                  report={res.data.report}
                  created_date={res.data.created_date}
                  updated_date={res.data.updated_date}
                  modalUpdate={(id: any, namaBarang: any) => {
                    modalUpdate(id, namaBarang);
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
      {addDataModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    Add New Product
                  </p>
                  <svg
                    onClick={() => setAddDataModal(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                {/*body*/}
                <div className="px-4 pt-2 bg-gray-50 rounded">
                  <ShopModal
                    setAddDataModal={setAddDataModal}
                    _id={"admin"}
                    namaToko={"sumber dari google"}
                    provinsi={"not found"}
                    kota={"not found"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {updateDataModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="text-2xl font-semibold text-gray-800">
                    Update Product {namaBarangUpdate}
                  </p>
                  <svg
                    onClick={() => setUpdateDataModal(false)}
                    className="ml-5 mt-1 w-6 h-6 hover:bg-gray-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                {/*body*/}
                <div className="px-4 pt-2 bg-gray-50 rounded">
                  <>
                    {filteredData.map((res: any) => {
                      return (
                        <>
                          <UpdateModal
                            setUpdateDataModal={setUpdateDataModal}
                            _id={res._id}
                            id_mitra={res.id_mitra}
                            namaToko={res.namaToko}
                            namaBarang={res.data.namaBarang}
                            image_url={res.data.image_url}
                            provinsi={res.data.provinsi}
                            kota={res.data.kota}
                            product_price={res.data.product_price}
                            product_url={res.data.product_url}
                            public_id={res.data.public_id}
                            report={res.data.report}
                            created_date={res.data.created_date}
                            updated_date={res.data.updated_date}
                          />
                        </>
                      );
                    })}
                  </>
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
