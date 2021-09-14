import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { removeUser } from "../../lib/auth";
import { getMitra } from "../../lib/mitraAction";
import DataMitra from "./DataMitra";
import DataShop from "./DataShop";
import Header from "./Header/header";
import HeaderAdmin from "./Header/HeaderAdmin/header";
import Home from "./Home";
import HomeAdmin from "./Home/HomeAdmin";
import Profile from "./Profile";
import Shop from "./Shop";
import Sidebar from "./Sidebar";
import SidebarAdmin from "./Sidebar/SidebarAdmin";
interface Type {
  dataTable: Array<any>;
}

function DashboardMitra(props: Type) {
  const { dataTable } = props;
  const [dataShop, setDataShop] = useState<boolean>(false);
  const [dataMitra, setDataMitra] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [shop, setShop] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [_id, set_id] = useState();
  const [namaToko, setNamaToko] = useState();
  const [status, setStatus] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kota, setKota] = useState();
  const [alamat, setAlamat] = useState();
  const [kontak, setKontak] = useState();
  const [statusBuka, setStatusBuka] = useState<string>();
  const [stokBarang, setStokBarang] = useState<string>();
  const [antrian, setAntrian] = useState<string>();
  const [waktuBuka, setWaktuBuka] = useState();
  const [waktuTutup, setWaktuTutup] = useState();
  const [role, setRole] = useState("mitra");
  const verify = async () => {
    const data = await axios
      .get(`${process.env.API_HOST_ROUTER_7}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        const id = res.data.id_mitra;
        const Role = res.data.role;
        setRole(Role);
        if (Role === "mitra") {
          getMitra(id)
            .then((res) => {
              if (res === null) {
                removeUser();
                Router.push("/");
              } else {
                set_id(res._id || null);
                setNamaToko(res.namaToko || null);
                setStatus(res.status || null);
                setProvinsi(res.data.provinsi || null);
                setKota(res.data.kota || null);
                setAlamat(res.data.alamat || null);
                setKontak(res.data.kontak || null);
                setStatusBuka(res.data.statusBuka || null);
                setStokBarang(res.data.stokBarang || null);
                setAntrian(res.data.antrian || null);
                setWaktuBuka(res.data.waktuBuka || null);
                setWaktuTutup(res.data.waktuTutup || null);
              }
            })
            .catch((err) => {
              removeUser();
              Router.push("/Auth/login");
              console.log(err);
            });
        } else if (Role === "admin") {
          setRole(Role);
        }
      })
      .catch(() => {
        return null;
      });
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      {role === "admin" ? (
        <SidebarAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          dataShop={dataShop}
          setDataShop={setDataShop}
          dataMitra={dataMitra}
          setdataMitra={setDataMitra}
        />
      ) : (
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          shop={shop}
          setShop={setShop}
          profile={profile}
          setProfile={setProfile}
        />
      )}
      {/* Content area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {role === "admin" ? (
          // admin header
          <HeaderAdmin
            profile={profile}
            setProfile={setProfile}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        ) : (
          <Header
            profile={profile}
            setProfile={setProfile}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
        <section className="flex flex-col flex-1 mb-5">
          <div className="md:max-w-full  mx-auto pt-4 px-4 sm:max-w-xl lg:w-full">
            <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
              {/* Content */}
              <div className="relative">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
                  Tidak ada kebaikan yang sia-sia 👋
                </h1>
                <p>
                  Bersama kita bangun sistem ini menjadi ajang berbagi kebaikan
                  melalui informasi
                </p>
              </div>
            </div>
            {role === "admin" ? (
              // content admin
              <>
                {dataMitra ? (
                  <DataMitra dataTab={dataTable} />
                ) : (
                  <>
                    {dataShop ? (
                      <DataShop />
                    ) : (
                      <HomeAdmin dataTab={dataTable} />
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {profile ? (
                  <Profile
                    _id={_id}
                    namaToko={namaToko}
                    status={status}
                    provinsi={provinsi}
                    kota={kota}
                    alamat={alamat}
                    kontak={kontak}
                    statusBuka={statusBuka}
                    stokBarang={stokBarang}
                    antrian={antrian}
                    waktuBuka={waktuBuka}
                    waktuTutup={waktuTutup}
                  />
                ) : (
                  <>
                    {shop ? (
                      <Shop
                        _id={_id}
                        namaToko={namaToko}
                        provinsi={provinsi}
                        kota={kota}
                      />
                    ) : (
                      <Home
                        _id={_id}
                        namaToko={namaToko}
                        status={status}
                        provinsi={provinsi}
                        kota={kota}
                        alamat={alamat}
                        kontak={kontak}
                        statusBuka={statusBuka}
                        stokBarang={stokBarang}
                        antrian={antrian}
                        waktuBuka={waktuBuka}
                        waktuTutup={waktuTutup}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardMitra;
