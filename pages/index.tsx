import { useEffect, useState } from "react";
import Address from "../component/Address";
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
      <section className="flex flex-col flex-1 py-16">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
          <div className="w-full sm:max-w-xl mx-auto pb-8 space-y-4">
            <form>
              <Address
                handleLoad={() => {
                  handleLoad();
                }}
                handleSearch={(data: string) => handleSearch(data)}
              />
            </form>
            {/* </MDBContainer> */}
          </div>
          {load ? (
            <div className="px-4 pt-4  mb-2 sm:px-6 relative bg-gray-50 rounded">
              <div className="px-4 pt-4 pb-2 sm:px-6 relative hover:bg-gray-50">
                <h1 className="animate-bounce text-gray-300">Pilih Kab.kota kamu</h1>
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
  const res = await fetch("http://localhost:3006/dataoksigen/");
  const dataCard = await res.json();

  return {
    props: {
      dataCard,
    },
  };
}
