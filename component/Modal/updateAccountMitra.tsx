import axios from "axios";
import { passwordStrength } from "check-password-strength";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { getDetailMitra } from "../../lib/detailMitra";
import { resCAPTCHA } from "../../lib/updateMitra";
interface Type {
  setModalAccount: any;
  _id: any;
}
export default function UpdateAccountMitra(props: Type) {
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState(null);
  const [token, setToken] = useState();
  const [ip, setIP] = useState("");
  const [strength, setStrength] = useState<string>();

  const getData = async () => {
    const res = await axios.get(`${process.env.API_GEOLOCATION}`);
    setIP(res.data);
  };
  useEffect(() => {
    getData();
    getDetailMitra(props._id).then((res) => {
      setUsername(res.username);
      setId(res._id);
    });
  }, []);

  const handlePassword = (event: any) => {
    const value = passwordStrength(event.target.value).value;
    setStrength(value);
    setPassword(event.target.value);
  };

  function onChange(value: any) {
    setToken(value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (strength === "Strong" || strength === "Medium" || strength === "Weak") {
      resCAPTCHA(token, ip, id, password).then((res) => {
        props.setModalAccount(false);
      });
    } else {
      alert(
        "password kamu sangat lemah, Kombinasikan Huruf besar, karakter dan angka"
      );
    }
  };
  return (
    <>
      <div>
        <div>
          <div className="p-2">
            <form method="post" onSubmit={handleSubmit}>
              <div className="grey-text">
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Nama Mitra
                  </label>
                  <input
                    onChange={(event) => console.log(event.target.value)}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="text"
                    name="namaToko"
                    placeholder="Nama Mitra"
                    disabled
                    defaultValue={username}
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1 pt-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Password
                  </label>
                  <input
                    onChange={(event) => handlePassword(event)}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="password"
                    name="password"
                    placeholder="New Password"
                  />
                  {strength === "Strong" ? (
                    <span className="text-green-500 font-bold">
                      Password Kuat
                    </span>
                  ) : (
                    <>
                      {strength === "Medium" ? (
                        <span className="text-yellow-500 font-bold">
                          Password Sedang
                        </span>
                      ) : (
                        <>
                          {strength === "Weak" ? (
                            <span className="text-blue-500 font-bold">
                              Password Lemah
                            </span>
                          ) : (
                            <span className="text-red-500 font-bold">
                              Password Sangat Lemah
                            </span>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
              {/* <p className="py-2 text-blue-500 font-bold cursor-pointer hover:text-red-500">
                Change Password
              </p> */}
              <div className="mt-3">
                <ReCAPTCHA
                  sitekey="6LeFeTUcAAAAAJWW9uaarr2lJaim0fPqao6jaxJo"
                  onChange={onChange}
                />
              </div>
              <div className="mt-2 flex flex-cols-3 flex-row-reverse mb-2">
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Add Data
                </button>
                <div
                  onClick={() => {
                    props.setModalAccount(false);
                  }}
                  className="text-white bg-red-500 hover:bg-red-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  cancel
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
