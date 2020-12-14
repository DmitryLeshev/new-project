import gostCrypto from "./gostCrypto";
import gostCoding from "./gostCrypto/gostCoding";

global.gostEngine = require("./gostCrypto/gostEngine");

class Kuz {
  constructor(key) {
    this.key = key;
  }

  encrypt(source_data) {
    let encoded_data;
    source_data = source_data.trim();
    return gostCrypto.subtle
      .importKey(
        "raw",
        gostCoding.prototype.Hex.decode(this.key),
        "GOST R 34.12-ECB",
        true,
        ["encrypt", "decrypt"]
      )
      .then((key) =>
        gostCrypto.subtle.encrypt(
          {
            name: "GOST R 34.12-ECB",
            length: 128,
          },
          key,
          gostCoding.prototype.Chars.decode(source_data, "utf8")
        )
      )
      .then((data) => {
        encoded_data = data;

        return this.stribogHash512(source_data);
      })
      .then((hash) => {
        return hash + gostCoding.prototype.Hex.encode(encoded_data);
      });
  }

  decrypt(crypted_data) {
    let data = crypted_data.substr(128);
    let hash = crypted_data.substr(0, 128);
    let decoded;
    return new Promise((resolve, reject) => {
      gostCrypto.subtle
        .importKey(
          "raw",
          gostCoding.prototype.Hex.decode(this.key),
          "GOST R 34.12-ECB",
          true,
          ["encrypt", "decrypt"]
        )
        .then(function (key) {
          return gostCrypto.subtle.decrypt(
            {
              name: "GOST R 34.12-ECB",
              length: 128,
            },
            key,
            gostCoding.prototype.Hex.decode(data)
          );
        })
        .then((dec) => {
          decoded = gostCoding.prototype.Chars.encode(dec, "utf8");
          //remove char with 0 code from string which appear at encoding
          let charToRemove = String.fromCharCode(0);
          while (decoded.charAt(0) === charToRemove) {
            decoded = decoded.substring(1);
          }
          while (decoded.charAt(decoded.length - 1) === charToRemove) {
            decoded = decoded.substring(0, decoded.length - 1);
          }
          return this.stribogHash512(decoded);
        })
        .then((data_hash) => {
          if (hash === data_hash || true) {
            resolve(decoded);
          } else {
            reject("Wrong hash");
          }
        });
    });
  }

  stribogHash512(data) {
    return gostCrypto.subtle
      .digest(
        {
          name: "GOST R 34.11",
          length: 512,
        },
        gostCoding.prototype.Chars.decode(data, "utf8")
      )
      .then((hash) =>
        gostCoding.prototype.Hex.encode(hash).replace(/\r|\n/g, "")
      );
  }

  setKey(key) {
    this.key = key;
  }
}

export default Kuz;
