import Link from "next/link";
import Layout from "../component/Layout/Layout";
import Image from "next/image";

export default function about() {
  return (
    <Layout
      pageTitle="Tentang Kami"
      pageDeskripsi="Sistem ini adalah bentuk dari inisiatif dalam membantu menyelesaikan permasalahan kesulitan oksigen yang saat ini terjadi maupun untuk kesiapan di masa mendantang, dengan tujuan untuk memudahkan masyarakat dalam mencari informasi oksigen, dengan memberikan informasi ketersediaan oksigen yang dikelola langsung oleh mitra penjuals"
      pageUrl={`/about`}
    >
      <section className="flex flec-col flex-1 py-16 ">
        <div className="w-full sm:max-w-xl mx-auto pt-4 px-4">
          <div className="mt-4 md:flex md:items-center md:justify-between bg-white my-2 rounded">
            <div className="flex-1 min-w-0 space-y-2 p-2">
              <span className="text-sm leading-6 text-gray-500 sm:text-base sm:truncate">
                Tentang Kami
              </span>
              <div className="flex flex-cols-2">
                <Image
                  src="https://res.cloudinary.com/fandilladp/image/upload/v1630872655/assets/logo--bantucari_ug8xzx.svg"
                  width={200}
                  height={100}
                  alt="logo bantucari"
                />
              </div>
              <p className="flex items-center text-sm leading-5 text-gray-700 sm:text-base">
                Sistem ini adalah bentuk dari inisiatif dalam membantu
                menyelesaikan permasalahan kesulitan oksigen yang saat ini
                terjadi maupun untuk kesiapan di masa mendantang, dengan tujuan
                untuk memudahkan masyarakat dalam mencari informasi oksigen,
                dengan memberikan informasi ketersediaan oksigen yang dikelola
                langsung oleh mitra penjual, sistem ini dibangun dari kolaborasi
                banyak individu, komunitas dan institusi yang tergerak untuk
                berkontribusi dalam peanganan pandemi di indonesia. BantuCari
                bersifat inklusif, independent dan non-partisan
              </p>
              <p className="flex items-center text-sm leading-5 text-gray-700 sm:text-base">
                BantuCari Terbuka dengan beragam kolaborasi individu, komunitas,
                perushaan/brand yang ingin bekerja sama dapat berkolaborasi
                dengan BantuCari dengan cara mengirim email ke alamat :
              </p>
              <a href="mailto:relawanbantucari@gmail.com">
                relawanbantucari@gmail.com
              </a>
              <div className="flex flex-wrap justify-center items-center relative bg-gray-200 p-3">
                <a href="mailto:relawanbantucari@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-1 text-black hover:text-blue-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/elektro-ngoding/bantucarioksigen"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    className="w-8 h-8 mx-1 text-black hover:text-blue-900"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 overflow-hidden bg-white py-6 space-y-4 rounded">
            <h2 className="text-center font-semibold text-gray-700 text-lg">
              Terima kasih kepada para kolaborator BantuCari
            </h2>
            <div className="flex flex-wrap justify-center items-center relative">
              <a
                href="https://el.itera.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2"
              >
                <div className="display: block; overflow: hidden; position: absolute; inset: 0px; box-sizing: border-box; margin: 0px;">
                  <Image
                    src="https://res.cloudinary.com/fandilladp/image/upload/v1630872661/assets/logo-el_vkyhhq.svg"
                    alt="logo kolaborator el.itera"
                    width={100}
                    height={100}
                    className="hover:shadow-md"
                  />
                </div>
              </a>
              <a
                href="https://hme.el.itera.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2"
              >
                <div className="display: block; overflow: hidden; position: absolute; inset: 0px; box-sizing: border-box; margin: 0px;">
                  <Image
                    src="https://res.cloudinary.com/fandilladp/image/upload/v1630872656/assets/logo-hme_lk5qon.svg"
                    alt="logo kolabolator hme.itera"
                    width={200}
                    height={100}
                    className="hover:shadow-md"
                  />
                </div>
              </a>
              <a
                href="https://github.com/elektro-ngoding"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2"
              >
                <div className="display: block; overflow: hidden; position: absolute; inset: 0px; box-sizing: border-box; margin: 0px;">
                  <Image
                    src="https://res.cloudinary.com/fandilladp/image/upload/v1630872654/assets/elektro-ngoding_io9q3l.svg"
                    alt="logo"
                    width={60}
                    height={100}
                    className="hover:shadow-md"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
