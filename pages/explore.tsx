import ShopCard from "../component/Card/ShopCard";
import Layout from "../component/Layout/Layout";
import Addres from "../component/Address/index";

interface Type {
  dataCard: Array<any>;
}

export default function explore(props: Type) {
  const { dataCard } = props;

  return (
    <Layout>
      <section className="overflow-hidden px-4 py-6 pb-4 space-y-4 pt-16">
        <div className="w-full sm:max-w-xl mx-auto pt-2 px-2">
          <div className="text-lg sm:text-xl mb-2">
            <Addres />
            <hr />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {dataCard.map((res: any) => {
              return (
                <>
                  <ShopCard
                    image_url={res.data.image_url}
                    namaBarang={res.data.namaBarang}
                    product_price={res.data.product_price}
                    namaToko={res.namaToko}
                    product_url={res.data.product_url}
                  />
                </>
              );
            })}
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
