import ShopCardAdmin from "../../Card/ShopCardAdmin";

export default function DataShop() {
  return (
    <>
      <div className="bg-gray-100 pt-2 pb-3 px-3">
        <h1>halaman Shop</h1>
      </div>
      <div className="bg-gray-100 pt-2 pb-3 px-3 flex">
        <ShopCardAdmin />
        <ShopCardAdmin />
        <ShopCardAdmin />
        <ShopCardAdmin />
        <ShopCardAdmin />
      </div>
    </>
  );
}
