import React, { ChangeEvent, useState } from "react";
import ImageUploading from "react-images-uploading";
import { mitraAddProduct } from "../../lib/getProduct";

interface Type {
  setAddDataModal: any;
  _id: any;
  namaToko: any;
  provinsi: any;
  kota: any;
}
export default function Shop(props: Type) {
  const { setAddDataModal, _id, namaToko, provinsi, kota } = props;
  const [namaProduct, setNamaProduct] = useState();
  const [product_url, setProduct_url] = useState();
  const [idr, setIdr] = useState();
  const [images, setImages] = React.useState([]);

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
    const image_url = images.map((res: any) => {
      return res.data_url;
    });

    mitraAddProduct(
      _id,
      namaToko,
      namaProduct,
      product_url,
      provinsi,
      kota,
      idr,
      image_url
    );
    props.setAddDataModal(false);
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
                    props.setAddDataModal(false);
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
