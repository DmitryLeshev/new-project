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

export { q, startNewSession, checkSession };

function q(path, args = {}) {
  if (!localStorage.hasOwnProperty("cryptKey")) {
    return checkSession().then((val) => q(path, args));
  }
  kuz.updateKey(localStorage.getItem("cryptKey"));

  return kuz
    .encrypt(JSON.stringify({ path: path, args: args }))
    .then((params) => {
      return axios.post(host, params, axiosConfig);
    })
    .then((response) => {
      if (response.data === "invalid-key") {
        return checkSession().then((val) => q(path, args));
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

function startNewSession() {
  if (localStorage.hasOwnProperty("cryptKey"))
    localStorage.removeItem("cryptKey");
  if (getCookie("PHPSESSID") !== undefined) deleteCookie("PHPSESSID");
  return checkSession();
}

function checkSession() {
  if (
    !localStorage.hasOwnProperty("cryptKey") ||
    localStorage.getItem("cryptKey") === ""
  ) {
    let crypt = new NodeRSA({ b: 1024 });
    let publicKey = window.btoa(
      unescape(encodeURIComponent(crypt.exportKey("pkcs8-public")))
    );
    return axios.post(host, "publicKey" + publicKey).then((response) => {
      let cryptKey = crypt.decrypt(response.data, "utf8");
      localStorage.setItem("cryptKey", cryptKey);
      kuz.updateKey(cryptKey);
      if (response.data === "invalid-key") startNewSession();
      return true;
    });
  } else {
    let crypt = new NodeRSA({ b: 1024 });
    let publicKey = window.btoa(
      unescape(encodeURIComponent(crypt.exportKey("pkcs8-public")))
    );
    return axios.post(host, "publicKey" + publicKey).then((response) => {
      let cryptKey = crypt.decrypt(response.data, "utf8");
      localStorage.setItem("cryptKey", cryptKey);
      kuz.updateKey(cryptKey);
      if (response.data === "invalid-key") startNewSession();
      return true;
    });
  }
}
