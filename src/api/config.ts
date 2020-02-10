const env = process.env.NODE_ENV || "development";
export let BASE_URL = "";
export let BASE_CDN = "";
export let PIC_PREFIX = "test/";

if (env === "production") {
  BASE_URL = "";
}
