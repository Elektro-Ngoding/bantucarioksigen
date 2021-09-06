import axios from "axios";
import Router from "next/router";

export const mitraAddProduct = async (
  _id,
  namaToko,
  namaProduct,
  product_url,
  provinsi,
  kota,
  idr,
  images
) => {
  const { data } = await axios.post(`${process.env.API_HOST_ROUTER_8}`, {
    id_mitra: _id,
    namaToko: namaToko,
    data: {
      namaBarang: namaProduct,
      product_price: idr,
      image_url: images,
      product_url: product_url,
      provinsi: provinsi,
      kota: kota,
      report: 0,
    },
  });
  try {
    if (data.status == 200) {
      alert(data.message);
      Router.push("/dashboard");
    }
  } catch (error) {
    alert("terjadi kesalahan");
  }
};

export const getProduct = async () => {
  const { data } = await axios.get(`${process.env.API_HOST_ROUTER_8}`);
  if (data === null) {
    return;
  } else {
    return data;
  }
};

export const getProductMitra = async (id) => {
  const { data } = await axios.get(`${process.env.API_HOST_ROUTER_8}${id}`);
  if (data === null) {
    return;
  } else {
    return data;
  }
};

export const deleteProduct = async (_id) => {
  const data = await axios
    .delete(`${process.env.API_HOST_ROUTER_8}${_id}`)
    .then((res) => {
      {
        res.status == 200 ? Router.push("/dashboard") : alert(res.message);
      }
    })
    .catch((err) => {
      {
        err ? alert(err) : null;
      }
    });
};

export const mitraUpdateProduct = async (
  _id,
  id_mitra,
  namaToko,
  namaProduct,
  idr,
  images_url,
  product_url,
  provinsi,
  kota,
  report
) => {
  const { data } = await axios.put(`${process.env.API_HOST_ROUTER_8}${_id}`, {
    id_mitra: id_mitra,
    namaToko: namaToko,
    data: {
      namaBarang: namaProduct,
      product_price: idr,
      image_url: images_url,
      product_url: product_url,
      provinsi: provinsi,
      kota: kota,
      report: report,
    },
  });
  try {
    if (data.status == 200) {
      Router.push("/dashboard");
    }
  } catch (error) {
    alert("terjadi kesalahan");
  }
};

export const mitraUpdateProductWithOutImages = async (
  _id,
  id_mitra,
  namaToko,
  public_id,
  namaProduct,
  idr,
  images_url,
  product_url,
  provinsi,
  kota,
  report
) => {
  const { data } = await axios.put(`${process.env.API_HOST_ROUTER_9}${_id}`, {
    id_mitra: id_mitra,
    namaToko: namaToko,
    data: {
      public_id: public_id,
      namaBarang: namaProduct,
      product_price: idr,
      image_url: images_url,
      product_url: product_url,
      provinsi: provinsi,
      kota: kota,
      report: report,
    },
  });
  try {
    if (data.status == 200) {
      Router.push("/dashboard");
    }
  } catch (error) {
    alert("terjadi kesalahan");
  }
};
