import Card from "../component/Card";
import Layout from "../component/Layout/Layout";
import { useState, useEffect } from "react";

interface DataProps {
  dataCard: Array<any>;
}

export default function bookmark(props: DataProps) {
  const { dataCard } = props;
  const [dataSaved, setDataSaved] = useState([]);
  const [filteredData, setFilteredData] = useState(dataCard);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("bookMark") || "{}");
      if (getData) {
      const results = dataCard.filter((res) => {
        return res._id.toLowerCase().startsWith(getData);
      });
      setFilteredData(results);
    } else {
      console.log("array gaada isi");
    }
  }, []);
 
  return (
    <Layout>
      <section className="flex flex-col flex-1 py-16">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
          <div className="w-full sm:max-w-xl mx-auto pb-8 space-y-4">
            <h3 className="text-gray-400">
              <b>BookMark</b>
            </h3>
          </div>
          {filteredData.length === 0 ? (
            <div className="px-4 pt-4  mb-2 sm:px-6 relative bg-gray-50 rounded">
              <div className="px-4 pt-4 pb-2 sm:px-6 relative hover:bg-gray-50">
                <h1 className="animate-bounce text-gray-300">Data Not Found</h1>
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
                    />
                  </>
                );
              })}
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
