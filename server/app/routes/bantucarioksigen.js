const express = require('express');
const router = express.Router();
const OksigenModel = require("../models/OksigenModel");

router.post("/", async (req, res) => {
  const dataOksigen = new OksigenModel({
    namaToko: req.body.namaToko,
    status: req.body.status,
    auth: {
      username: req.body.auth.username,
      password: req.body.auth.password,
    },
    data: {
      provinsi: req.body.data.provinsi,
      kota: req.body.data.kota,
      alamat: req.body.data.alamat,
      kontak: req.body.data.kontak,
      statusBuka: req.body.data.statusBuka,
      stokBarang: req.body.data.stokBarang,
      antrian: req.body.data.antrian,
      waktuBuka: req.body.data.waktuBuka,
    },
  });

  try {
    const dataOksigenPost = await dataOksigen.save();
    res.json(dataOksigenPost);
  } catch (error) {
    res.json(
      {
        message: error,
      });
  }
});

router.get("/", async (req, res) => {
  try {
    const dataOksigenGet = await OksigenModel.find();
    res.json(dataOksigenGet)
  } catch (error) {
    res.json(
      {
        message: error,
      },
    );
  }
});


module.exports = router;