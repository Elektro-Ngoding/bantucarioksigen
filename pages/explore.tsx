import ShopCard from "../component/Card/ShopCard";
import Layout from "../component/Layout/Layout";
import Address from "../component/Address/index";
import { useState, useEffect } from "react";

interface Type {
  dataCard: Array<any>;
}

export default function explore(props: Type) {
  const { dataCard } = props;
  const [filteredData, setFilteredData] = useState(dataCard);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setFilteredData(dataCard);
  }, []);

  const handleLoad = () => {
    setLoad(true);
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
    <Layout>
      <section className="overflow-hidden px-4 py-6 pb-4 space-y-4 pt-16">
        <div className="w-full sm:max-w-xl mx-auto pt-2 px-2">
          <div className="text-lg sm:text-xl mb-2">
            <Address
              handleLoad={() => {
                handleLoad();
              }}
              handleSearch={(data: string) => handleSearch(data)}
            />
            <hr />
          </div>
          <div className="grid grid-cols-3 gap-4">
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3006/product/");
  const dataCard = await res.json();

  return {
    props: {
      dataCard,
    },
  };
}
