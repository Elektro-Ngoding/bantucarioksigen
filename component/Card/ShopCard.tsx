import { useEffect, useState } from "react";
import Router from "next/router";
import Moment from "react-moment";
import Image from "next/image";
import Link from "next/link";
interface Type {
  image_url: any;
  namaBarang: any;
  product_price: any;
  namaToko: any;
  product_url: any;
}

export default function ShopCard<T>(props: Type) {
  return (
    <div className="bg-gray-50 flex flex-col rounded-md overflow-hidden max-w-xs hover:bg-gray-100 shadow-md ">
      <Link href="tokopedia">
        <a className="flex-shrink-0 hover:cursor-pointer">
          <div className="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
            <Image
              src={props.image_url}
              alt="thumbnail"
              width={280}
              height={200}
            />
          </div>
        </a>
      </Link>
      <div className="p-1 space-y-1 h-0 flex-1 text-xs sm:text-sm">
        <div>
          <p className="text-gray-500 truncate">{props.namaBarang}</p>
        </div>
        <div className="w-full sm:grid grid-cols-2 px-1">
          <b className="px-1 rounded bg-red-500 text-white truncate">Rp: {props.product_price}</b>
        </div>
        <div className="flex items-center align-middle justify-between">
          <p className="text-gray-500">{props.namaToko}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 align-middle hover:has-tooltip"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              alert("report");
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
