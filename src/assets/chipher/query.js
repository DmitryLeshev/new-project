/* eslint-disable */
import Kuz from "./kuznyechik";
import { deleteCookie, getCookie } from "./cookie-operations";
import NodeRSA from "node-rsa";
import axios from "axios";
let kuz = new Kuz(localStorage.getItem("cryptKey"));

let host = "http://192.168.1.119";
// let host = "http://192.168.1.72";
if (process.env.NODE_ENV === "production") host = "location.host";
axios.defaults.withCredentials = true;

const axiosConfig = {
  headers: {
    "content-Type": "application/json",
    Accept: "/",
    "Cache-Control": "no-cache",
  },
  withCredentials: true,
};

export { q, startNewSession, makeSession as checkSession };

let running_promise = false;

let key_get_promise = new Promise((resolve) => {
  resolve();
});
async function q(path, args = {}) {
  await key_get_promise;
  if (!localStorage.hasOwnProperty("cryptKey")) {
    key_get_promise = new Promise(async function (resolve) {
      running_promise = true;
      await makeSession();
      running_promise = false;
      resolve();
    });
  }

  kuz.setKey(localStorage.getItem("cryptKey"));
  return kuz
    .encrypt(JSON.stringify({ path: path, args: args }))
    .then(async (params) => {
      return axios.post(host, params, axiosConfig);
    })
    .then(async (response) => {
      if (response.data === "invalid-key" && running_promise === false) {
        key_get_promise = new Promise(async function (resolve) {
          running_promise = true;
          await makeSession();
          running_promise = false;
          resolve();
        });
        return q(path, args);
      }
      return kuz.decrypt(response.data).then((dec) => {
        // return dec;
        try {
          return JSON.parse(dec);
        } catch (e) {
          return dec;
        }
      });
    });
}

async function startNewSession() {
  if (localStorage.hasOwnProperty("cryptKey"))
    localStorage.removeItem("cryptKey");
  if (getCookie("PHPSESSID") !== undefined) deleteCookie("PHPSESSID");
}

function makeSession() {
  let crypt = new NodeRSA({ b: 1024 });
  let publicKey = window.btoa(
    unescape(encodeURIComponent(crypt.exportKey("pkcs8-public")))
  );
  return axios.post(host, "publicKey" + publicKey).then((response) => {
    let cryptKey = crypt.decrypt(response.data, "utf8");
    localStorage.setItem("cryptKey", cryptKey);
    kuz.setKey(cryptKey);
    if (response.data === "invalid-key") return startNewSession();
    return true;
  });
}
