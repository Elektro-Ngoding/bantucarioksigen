import { useEffect, useState } from "react";
import Address from "../component/Address";
import Alert from "../component/alert";
import Card from "../component/Card";
import Layout from "../component/Layout/Layout";

interface DataProps {
  dataCard: Array<any>;
}

export default function Home(props: DataProps) {
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
      pageTitle="Beranda"
      pageDeskripsi="Informasi ketersediaan oksigen yang yang ada di setiap kota di Indonesia, yang dikelola langsung oleh mitra penjual"
      pageUrl={`/`}
    >
      <section className="flex flex-col flex-1 py-16">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
          <Alert />
          <div className="w-full sm:max-w-xl mx-auto pb-8 space-y-4">
            <form>
              <Address
                handleLoad={(data: string) => handleLoad(data)}
                handleSearch={(data: string) => handleSearch(data)}
              />
            </form>
            {/* </MDBContainer> */}
          </div>
          {load ? (
            <div className="px-4 pt-4  mb-2 sm:px-6 relative bg-gray-50 rounded">
              <div className="px-4 pt-4 pb-2 sm:px-6 relative hover:bg-gray-50">
                <h1 className="animate-bounce text-gray-300">
                  Pilih Kab.kota kamu
                </h1>
              </div>
            </div>
          ) : (
            <>
              {filteredData.length === 0 ? (
                <div className="px-4 pt-4  mb-2 sm:px-6 relative bg-gray-50 rounded">
                  <div className="px-4 pt-4 pb-2 sm:px-6 relative hover:bg-gray-50">
                    <h1 className="animate-bounce text-gray-300">
                      Data Not Found
                    </h1>
                  </div>
                </div>
              ) : (
                <>
                  {filteredData.map((card: any) => {
                    return (
                      <>
                        <Card
                          _id={card._id}
                          namaToko={card.namaToko}
                          status={card.status}
                          provinsi={card.data.provinsi}
                          kota={card.data.kota}
                          alamat={card.data.alamat}
                          kontak={card.data.kontak}
                          statusBuka={card.data.statusBuka}
                          stokBarang={card.data.stokBarang}
                          antrian={card.data.antrian}
                          waktuBuka={card.data.waktuBuka}
                          waktuTutup={card.data.waktuTutup}
                          updated_date={card.data.updated_date}
                          save={false}
                          handleRefreshBookmark={null}
                        />
                      </>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_HOST_ROUTER}`);
  const dataCard = await res.json();
  return {
    props: {
      dataCard,
    },
  };
}
