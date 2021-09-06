const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = {
  env: {
    BASE_URL: process.env.API_HOST,
    API_HOST_ROUTER: process.env.API_HOST_ROUTER,
    API_HOST_ROUTER_1: process.env.API_HOST_ROUTER_1,
    API_HOST_ROUTER_2: process.env.API_HOST_ROUTER_2,
    API_HOST_ROUTER_2_1: process.env.API_HOST_ROUTER_2_1,
    API_HOST_ROUTER_3: process.env.API_HOST_ROUTER_3,
    API_HOST_ROUTER_4: process.env.API_HOST_ROUTER_4,
    API_HOST_ROUTER_5: process.env.API_HOST_ROUTER_5,
    API_HOST_ROUTER_6: process.env.API_HOST_ROUTER_6,
    API_HOST_ROUTER_6_1: process.env.API_HOST_ROUTER_6_1,

    API_HOST_ROUTER_7: process.env.API_HOST_ROUTER_7,

    API_HOST_ROUTER_8: process.env.API_HOST_ROUTER_8,
    API_HOST_ROUTER_9: process.env.API_HOST_ROUTER_9,

    API_HOST_ROUTER_10: process.env.API_HOST_ROUTER_10,

    API_GEOLOCATION: process.env.API_GEOLOCATION,
    API_GET_RISIKO: process.env.API_GET_RISIKO,
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
