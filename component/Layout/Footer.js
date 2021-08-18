import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Footer() {
  const router = useRouter();
  const [userLogIn, setUserLogIn] = useState(false);
  useEffect(() => {
    const user = sessionStorage.getItem("userLogIn");
    if (user === "false") {
      setUserLogIn(false);
    } else if (user === "true") {
      setUserLogIn(true);
    } else {
      setUserLogIn(false);
    }
  }, []);
  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-30">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center justify-evenly w-full">
          <li className="relative">
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-blue-600 font-semibold hover:text-blue-600"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="text-xs truncate">Beranda</span>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/explore">
              <a
                className={
                  router.pathname == "/explore"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-blue-600 font-semibold hover:text-blue-600"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs truncate">Explore</span>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/bookmark">
              <a
                className={
                  router.pathname == "/bookmark"
                    ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-blue-600 font-semibold hover:text-blue-600"
                    : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="text-xs truncate">BookMark</span>
              </a>
            </Link>
          </li>
          <li className="relative">
            {userLogIn ? (
              <Link href="/Mitra">
                <a
                  className={
                    router.pathname == "/Mitra"
                      ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-blue-600 font-semibold hover:text-blue-600"
                      : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs truncate">Mitra</span>
                </a>
              </Link>
            ) : (
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-blue-600 font-semibold hover:text-blue-600"
                      : "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md text-gray-600 hover:text-blue-600"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs truncate">About</span>
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
