import { useEffect, useState } from "react";
import { getDetailMitra } from "../../lib/detailMitra";

const DetailMitra = (props: any) => {
  const [username, setUsername] = useState();
  useEffect(() => {
    getDetailMitra(props._id).then((res) => {
      setUsername(res.username);
    });
  }, []);

  return (
    <>
      <div className="py-2 mb-2">
        <div>
          <form>
            <div className="grey-text">
              <div className="grid grid-cols-1 space-y-1">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Nama Toko
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="namaToko"
                  value={props.namaToko}
                />
              </div>
              <div className="grid grid-cols-1 space-y-1">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Username
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="username"
                  value={username}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 space-y-1">
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Waktu Buka
                  </label>
                  <input
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="time"
                    name="waktuBuka"
                    value={props.waktuBuka}
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Waktu Tutup
                  </label>
                  <input
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="time"
                    name="waktuTutup"
                    value={props.waktuTutup}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 space-y-1">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Status Buka
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="statusBuka"
                  value={props.statusBuka}
                />
              </div>
              <div className="grid grid-cols-1 space-y-1">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Stok Barang
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="stokBarang"
                  value={props.stokBarang}
                />
              </div>
              <div className="grid grid-cols-1 space-y-1">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Antrian
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="antrian"
                  value={props.antrian}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailMitra;
