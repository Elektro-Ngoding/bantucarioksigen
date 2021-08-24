import { useEffect, useState } from "react";
import Router from "next/router";
import Moment from "react-moment";
import Image from "next/image";
import Link from "next/link";
import { deleteProduct } from "../../lib/getProduct";

export default function ShopCardAdmin<T>(props: any) {
  const handleDelete = () => {
    {
      confirm(`you can delete ${props.namaBarang}`)
        ? deleteProduct(props._id)
        : null;
    }
  };

  const handleUpdate = () => {
    props.modalUpdate(props._id, props.namaBarang);
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col rounded-md overflow-hidden max-w-xs hover:bg-gray-100 shadow-md ">
        <Link href={props.product_url}>
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
          <p className="text-gray-900">{props.namaBarang}</p>
          <b>IDR: {props.product_price}</b>
          <p className="text-gray-900">{props.namaToko}</p>
          <p className="text-gray-500 text-xs sm:text-xs">
            update : <Moment fromNow>{props.updated_date}</Moment>
          </p>
        </div>
        <div className="flex items-center align-middle justify-between">
          <div className="grid grid-cols-2">
            <div
              onClick={handleUpdate}
              className="text-white bg-green-500 hover:bg-green-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Update
            </div>
            <div
              onClick={handleDelete}
              className="text-white bg-red-500 hover:bg-red-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
