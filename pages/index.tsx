import { useEffect, useState } from "react";
import Address from "../component/Address";
import Alert from "../component/Alert";
import Card from "../component/Card";
import Layout from "../component/Layout/Layout";

interface DataProps {
  dataCard: Array<any>;
}

export default function Home(props: DataProps) {
  const { dataCard } = props;
  const [filteredData, setFilteredData] = useState(dataCard);
  const [saveData, setSaveData] = useState(dataCard);
  const [load, setLoad] = useState<boolean>(false);
  const [filterButton1, setFilterButton1] = useState(false);
  const [filterButton2, setFilterButton2] = useState(false);
  const [filterButton3, setFilterButton3] = useState(false);

  useEffect(() => {
    setFilteredData(dataCard);
  }, []);

  const handleLoad = (data: any) => {
    setLoad(false);
    if (data !== "") {
      const results = dataCard.filter((res) => {
        return res.data.provinsi.toLowerCase().startsWith(data.toLowerCase());
      });
      setSaveData(results);
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
      setSaveData(results);
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };
  const filterButton = (value: any) => {
    if (value === 1) {
      {
        filterButton1 === true
          ? setFilterButton1(false)
          : setFilterButton1(true);
      }
      if (filterButton1 === false) {
        const results = filteredData.filter((res) => {
          return res.status.toLowerCase().startsWith("terverifikasi");
        });
        setFilterButton3(false);
        setFilteredData(results);
      } else {
        setFilteredData(saveData);
      }
    } else if (value === 2) {
      alert("Data ketrsediaan oksigen gratis dalam pengembangan");
    } else if (value === 3) {
      setFilterButton1(false);
      setFilteredData(saveData);
      {
        filterButton3 === true
          ? setFilterButton3(false)
          : setFilterButton3(true);
      }
      if (filterButton3 === false) {
        const results = filteredData.filter((res) => {
          return res.data.statusBuka.toLowerCase().startsWith("buka");
        });

        setFilteredData(results);
      } else {
        setFilteredData(saveData);
      }
    } else {
      null;
    }
  };

  return (
    <Layout
      pageTitle="Beranda"
      pageDeskripsi="Informasi ketersediaan oksigen yang yang ada di setiap kota di Indonesia, yang dikelola langsung oleh mitra penjual"
      pageUrl={`/`}
    >
      <head>
        <script
          data-ad-client="ca-pub-4542342955406169"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head>
      <section className="flex flex-col flex-1 py-16">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
          <Alert />
          <div className="w-full sm:max-w-xl mx-auto pb-5 space-y-4">
            <form>
              <Address
                handleLoad={(data: string) => handleLoad(data)}
                handleSearch={(data: string) => handleSearch(data)}
              />
            </form>
            <div>
              <div className="flex gap-1">
                <span
                  className={
                    filterButton1
                      ? "bg-gray-900 text-white rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                      : "bg-white text-gray-900 rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                  }
                  onClick={() => filterButton(1)}
                >
                  Dikelola Mitra
                </span>
                <span
                  className={
                    filterButton2
                      ? "bg-gray-900 text-white rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                      : "bg-white text-gray-900 rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                  }
                  onClick={() => filterButton(2)}
                >
                  Gratis
                </span>
                <span
                  className={
                    filterButton3
                      ? "bg-gray-900 text-white rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                      : "bg-white text-gray-900 rounded-full p-2 border border-gray-300 font-bold text-xs cursor-pointer"
                  }
                  onClick={() => filterButton(3)}
                >
                  Buka
                </span>
              </div>
            </div>
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
