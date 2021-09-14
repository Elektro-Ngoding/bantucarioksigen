import ShopCard from "../component/Card/ShopCard";
import Layout from "../component/Layout/Layout";
import Address from "../component/Address/index";
import { useState, useEffect } from "react";
import withAuth from "../HOC/withAuth";
interface Type {
  dataCard: Array<any>;
}

function Explore(props: Type) {
  const { dataCard } = props;
  const [filteredData, setFilteredData] = useState(dataCard);
  const [load, setLoad] = useState<boolean>(false);
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
