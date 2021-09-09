import { useEffect, useState } from "react";
import axios from "axios";
export default function Alert() {
  const [userLocation, setUserLocation] = useState("Daerah kamu");
  const [bencana, setBencana] = useState("covid19");
  const [locationStatus, setlocationStatus] = useState("loading ...");

  const getLocation = async () => {
    const data = await axios
      .get(`${process.env.API_GEOLOCATION}`)
      .then(async (data) => {
        const city = data.data.city;
        const latitude = data.data.latitude;
        const longitude = data.data.longitude;
        getRIsk(city, latitude, longitude);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRIsk = async (city: any, latitude: any, longitude: any) => {
    const data = await axios
      .post(`${process.env.API_GET_RISIKO}`, {
        latitude: latitude,
        longitude: longitude,
      })
      .then((res) => {
        setUserLocation(city);
        setBencana(res.data[0].bencana);
        setlocationStatus(res.data[0].status);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <a href="https://covid19.go.id/" target="_blank" rel="noreferrer">
      <div className="text-center pb-2 mb-2 lg:px-4 rounded">
        <div
          className="rounded-full p-2 bg-yellow-200 items-center text-black-500 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white ">
            Update
          </span>
          <span className="font-semibold mr-2 text-left flex-auto text-gray-800 text-xs">
            Situasi {bencana} di {userLocation} dalam kondisi {locationStatus}
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
