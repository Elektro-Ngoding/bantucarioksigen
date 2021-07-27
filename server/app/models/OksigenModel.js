const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOURI,
  { useUnifiedTopology: true },
  { useNewUrlParser: true }
);

const OksigenSchema = mongoose.Schema({
  namaToko: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
    max: 1024,
  },
  data: {
    provinsi: {
      type: String,
      require: true,
    },
    kota: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    kontak: {
      type: Number,
      required: true,
    },
    statusBuka: {
      type: String,
    },
    stokBarang: {
      type: String,
    },
    antrian: {
      type: String,
    },
    waktuBuka: {
      type: String,
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("Oksigen", OksigenSchema);
