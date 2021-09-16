import { useState, useEffect } from "react";
import AnalyticCard from "../../../Card/AnalyticCard";

interface Type {
  dataTab: Array<any>;
}

export default function Home(props: Type) {
  const { dataTab } = props;
  const [dataTerverifikasi, setDataTerverifikasi] = useState<any>();
  useEffect(() => {
    const results = dataTab.filter((res) => {
      return res.status.toLowerCase().startsWith("terverifikasi");
    });
    setDataTerverifikasi(results.length);
  }, [props]);
  return (
    <div className="bg-gray-100 pt-2 pb-3 px-3">
      <h1>Dashboard Admin</h1>
      <div className="grid grid-cols-12 gap-6">
        <AnalyticCard
          nameData={"DATA MITRA TERDAFTAR"}
          value={props.dataTab.length}
        />
        <AnalyticCard
          nameData={"DATA MITRA TERVERIFIKASI"}
          value={dataTerverifikasi}
        />
      </div>
    </div>
  );
}
