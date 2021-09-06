import React, { ChangeEvent, useState } from "react";
import ImageUploading from "react-images-uploading";
import {
  mitraUpdateProduct,
  mitraUpdateProductWithOutImages,
} from "../../lib/getProduct";
interface Type {
  setUpdateDataModal: any;
  _id: any;
  id_mitra: any;
  namaToko: any;
  namaBarang: any;
  image_url: any;
  provinsi: any;
  kota: any;
  product_price: any;
  product_url: any;
  public_id: any;
  report: any;
  created_date: any;
  updated_date: any;
}

export default function updateShop(props: Type) {
  const { _id, id_mitra, namaToko, public_id, provinsi, kota, report } = props;

  const [namaProduct, setNamaProduct] = useState(props.namaBarang);
  const [product_url, setProduct_url] = useState(props.product_url);
  const [idr, setIdr] = useState(props.product_price);
  const [images, setImages] = useState([]);
  const [imageWitOutUpdate, setImageWitOutUpdate] = useState(props.image_url);
  const maxNumber = 69;
  const onChangeImage = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };
  const handleChangeProduct = (target: any) => {
    let value = target.value;
    setNamaProduct(value);
  };
  const handleChangeProductUrl = (target: any) => {
    let value = target.value;
    setProduct_url(value);
  };
  const handleChangeIdr = (target: any) => {
    let value = target.value;
    setIdr(value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (images.length > 0) {
      const image_url = images.map((res: any) => {
        const url = res.data_url;
        mitraUpdateProduct(
          _id,
          id_mitra,
          namaToko,
          namaProduct,
          idr,
          url,
          product_url,
          provinsi,
          kota,
          report
        );
      });
    } else {
      setImageWitOutUpdate(props.image_url);
      mitraUpdateProductWithOutImages(
        _id,
        id_mitra,
        namaToko,
        public_id,
        namaProduct,
        idr,
        imageWitOutUpdate,
        product_url,
        provinsi,
        kota,
        report
      );
    }
    props.setUpdateDataModal(false);
  };
  return (
    <>
      <div>
        <div>
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="grey-text">
                <div className="grid grid-cols-1 space-y-1">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Nama Product
                  </label>
                  <input
                    onChange={(event: ChangeEvent<{ value: string }>) => {
                      const target = event.target;
                      handleChangeProduct(target);
                    }}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                    type="text"
                    name="namaBarang"
                    placeholder="Nama Product"
                    defaultValue={props.namaBarang}
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1 pt-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Product URL
                  </label>
                  <input
                    required
                    onChange={(event: ChangeEvent<{ value: string }>) => {
                      const target = event.target;
                      handleChangeProductUrl(target);
                    }}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="text"
                    name="product_url"
                    placeholder="https://tokope...."
                    defaultValue={props.product_url}
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1 pt-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Harga Product
                  </label>
                  <input
                    onChange={(event: ChangeEvent<{ value: string }>) => {
                      const target = event.target;
                      handleChangeIdr(target);
                    }}
                    className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    type="number"
                    name="product_idr"
                    placeholder="10,000"
                    required
                    defaultValue={props.product_price}
                  />
                </div>
                <div className="pt-2 rounded">
                  <img
                    src={props.image_url}
                    alt="image"
                    width="120"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-1 space-y-1 pt-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wide">
                    Gambar Product
                  </label>

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChangeImage}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div
                        {...dragProps}
                        className="upload__image-wrapper border-2 rounded p-1 bg-gray-100 grid justify-items-center"
                      >
                        {imageList.length >= 1 ? null : (
                          <>
                            <div
                              className="text-blue-500 mt-4"
                              onClick={onImageUpload}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={isDragging ? "h-8 w-8" : "h-6 w-6"}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                            </div>
                          </>
                        )}
                        &nbsp;
                        {imageList.length >= 2 ? (
                          <div onClick={onImageRemoveAll}>
                            Remove all images
                          </div>
                        ) : null}
                        <div className="grid grid-cols-1 pb-2">
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item ">
                              <img
                                src={image.data_url}
                                alt="image-uploaded"
                                width="120"
                              />
                              <div className="image-item__btn-wrapper py-1">
                                <div
                                  onClick={() => onImageUpdate(index)}
                                  className="bg-green-500 text-white rounded p-1"
                                >
                                  Update
                                </div>
                                <div
                                  onClick={() => onImageRemove(index)}
                                  className="bg-red-500 text-white rouded p-1"
                                >
                                  Remove
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ImageUploading>

                  {/* {({ imageList, dragProps, isDragging }) => (
 
                    )} */}
                </div>
                <p className="text-sm text-gray-300">
                  <span>File type: png,jpg,jpeg</span>
                </p>
              </div>
              <div className="flex flex-cols-3 flex-row-reverse mb-2">
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-400 font-bold uppercase text-sm px-3 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Add Data
                </button>
                <div
                  onClick={() => {
                    props.setUpdateDataModal(false);
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
