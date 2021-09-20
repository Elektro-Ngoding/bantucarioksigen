import { useEffect, useState } from "react";
import Address from "../component/Address/index";
import ShopCard from "../component/Card/ShopCard";
import Layout from "../component/Layout/Layout";
import Link from "next/link";
interface Type {
  dataCard: Array<any>;
}

function Explore(props: Type) {
  const { dataCard } = props;
  const [filteredData, setFilteredData] = useState(dataCard);
  const [load, setLoad] = useState<boolean>(false);
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    setFilteredData(dataCard);
  }, []);

  const handleLoad = (data: any) => {
    setLoad(false);
    if (data !== "") {
      const results = dataCard.filter((res) => {
        return res.data.provinsi.toLowerCase().startsWith(data.toLowerCase());
      });
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  const handleSearch = (data: string) => {
    setLoad(false);
    if (data !== "") {
      const results = dataCard.filter((res) => {
        return res.data.kota.toLowerCase().startsWith(data.toLowerCase());
      });
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <Layout
      pageTitle="Explore"
      pageDeskripsi="Informasi produk kelengkapan oksigen yang yang ada di setiap kota di Indonesia, yang dikelola langsung oleh mitra penjual"
      pageUrl={`/explore`}
    >
      <section className="overflow-hidden px-4 py-6 pb-4 space-y-4 pt-16">
        <div className="w-full sm:max-w-xl mx-auto pt-2 px-2">
          {alert ? (
            <>
              <div className="text-center pb-2 mb-2 lg:px-4 rounded">
                <div
                  className="rounded-full p-2 bg-blue-200 items-center text-black-500 leading-none lg:rounded-full flex lg:inline-flex"
                  role="alert"
                >
                  <Link href="/Auth/login">
                    <span className="cursor-pointer px-2 mr-3 font-semibold mr-2 text-left flex-auto text-gray-800 text-xs">
                      Jadilah Mitra Oksigen dan Tambahkan Produk Kamu Sekarang
                    </span>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current opacity-75 h-6 w-6 ml-3 hover:text-red-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setAlert(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : null}
          <div className="text-lg sm:text-xl mb-3 ">
            <Address
              handleLoad={(data: string) => handleLoad(data)}
              handleSearch={(data: string) => handleSearch(data)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pb-12 mb-2">
            {load ? (
              <div className="px-4 overflow-hidden bg-white py-6 space-y-4">
                <h1 className="animate-bounce text-center font-semibold text-gray-300 text-lg">
                  Pilih Kab.kota kamu
                </h1>
              </div>
            ) : (
              <>
                {filteredData.length === 0 ? (
                  <div className="px-4 overflow-hidden bg-white py-6 space-y-4">
                    <h1 className="animate-bounce text-center font-semibold text-gray-300 text-lg">
                      Data not found ....
                    </h1>
                  </div>
                ) : (
                  <>
                    {filteredData.map((res: any) => {
                      return (
                        <>
                          <ShopCard
                            image_url={res.data.image_url}
                            namaBarang={res.data.namaBarang}
                            product_price={res.data.product_price}
                            namaToko={res.namaToko}
                            product_url={res.data.product_url}
                            updated_date={res.data.updated_date}
                          />
                        </>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default Explore;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_HOST_ROUTER_8}`);
  const dataCard = await res.json();

  return {
    props: {
      dataCard,
    },
  };
}
