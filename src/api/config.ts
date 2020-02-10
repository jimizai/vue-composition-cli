const env = process.env.NODE_ENV || "development";
export let BASE_URL = "http://tapi.alinjie.cn";
export let BASE_CDN = "https://pic.iyoufou.com";
export let PIC_PREFIX = "test/";

if (env === "production") {
  BASE_URL = "";
}
