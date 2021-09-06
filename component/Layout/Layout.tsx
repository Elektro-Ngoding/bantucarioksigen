import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
interface Type {
  children: any;
  pageTitle: string;
  pageDeskripsi: string;
  pageUrl: string;
}
const Layout = (props: Type) => {
  const { children, pageTitle, pageDeskripsi, pageUrl } = props;
  return (
    <>
      <Head>
        <title>BantuCari | {pageTitle}</title>
        <meta
          property="og:description"
          content="BantuCari adalah situs yang memuat informasi ketersediaan oksigen yang langsung dikelola oleh para mitra penjual. Dengan harapan dapat mempercepat warga dalam pencarian oksigen dalam situasi pandemi COVID-19"
        />
        <meta
          property="og:description"
          name="description"
          content={pageDeskripsi}
        />
        <meta property="og:url" content={`${process.env.BASE_URL}${pageUrl}`} />
      </Head>
      <main className="flex flex-col w-full min-h-screen bg-gray-100">
        <>
          <Navbar />
        </>
        {children}
        <>
          <Footer />
        </>
      </main>
    </>
  );
};

export default Layout;
