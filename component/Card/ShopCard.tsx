import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
interface Type {
  image_url: any;
  namaBarang: any;
  product_price: any;
  namaToko: any;
  product_url: any;
  updated_date: any;
}

export default function ShopCard<T>(props: Type) {
  return (
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
        <div>
          <p className="text-gray-500 truncate font-bold">{props.namaBarang}</p>
        </div>
        <div className="w-full sm:grid grid-cols-2">
          <b className="p-1 rounded bg-red-500 text-white truncate">
            Rp: {props.product_price}
          </b>
        </div>
        <p className="text-gray-900 pt-1">{props.namaToko}</p>
        <p className="text-gray-500 text-xs sm:text-xs">
          <Moment fromNow>{props.updated_date}</Moment>
        </p>
      </div>
    </div>
  );
}
