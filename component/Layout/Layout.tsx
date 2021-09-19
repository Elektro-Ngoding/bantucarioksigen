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
        <meta property="og:url" content={`${process.env.HOST}${pageUrl}`} />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon-256x256.png"
          rel="icon"
          type="image/png"
          sizes="256x256"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#1e3a8a" />
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
