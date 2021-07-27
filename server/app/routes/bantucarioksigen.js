const express = require("express");
const router = express.Router();
const OksigenModel = require("../models/OksigenModel");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const dataOksigen = new OksigenModel({
    namaToko: req.body.namaToko,
    status: req.body.status,
    username: req.body.username,
    password: hashPassword,
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
    res.json({
      message: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const dataOksigenGet = await OksigenModel.find();
    res.json(dataOksigenGet);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    const dataOksigenUpdate = await OksigenModel.updateOne({
      namaToko: req.body.namaToko,
      status: req.body.status,
      username: req.body.username,
      password: hashPassword,
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
    res.json(dataOksigenUpdate);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const dataOksigenDelete = await OksigenModel.deleteOne({
      _id: req.params.id,
    });
    res.json("delete succes");
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dataOksigenDetail = await OksigenModel.findById({
      _id: req.params.id,
    });
    res.json(dataOksigenDetail);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get("/cari", async (req, res) => {
  try {
    const dataOksigenDetail = await OksigenModel.findOne({
      username: "grahaoksigen",
    });
    res.json(dataOksigenDetail);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

module.exports = router;
