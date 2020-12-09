import gostCrypto from "./gostCrypto";

function encryptKuz(source_data, mainKey) {
    return new Promise((resolve, reject) => {
        gostCrypto.subtle.importKey('raw', gostCrypto.coding.Hex.decode(mainKey), 'GOST R 34.12-ECB', true, ['encrypt', 'decrypt'])
            .then(function (key) {
                gostCrypto.subtle.encrypt({
                    name: 'GOST R 34.12-ECB',
                    length: 128
                }, key, gostCrypto.coding.Chars.decode(source_data, 'utf-8'))
                    .then(function (data) {
                        gostCrypto.coding.Hex.encode(data);
                        resolve();
                    });
            });
    });
}

function decryptKuz(crypted_data, mainKey) {
    return new Promise((resolve, reject) => {
        gostCrypto.subtle.importKey('raw', gostCrypto.coding.Hex.decode(mainKey), 'GOST R 34.12-ECB', true, ['encrypt', 'decrypt'])
            .then(function (key) {
                gostCrypto.subtle.decrypt({
                    name: 'GOST R 34.12-ECB',
                    length: 128
                }, key, gostCrypto.coding.Hex.decode(crypted_data))
                    .then(function (data) {
                        gostCrypto.coding.Chars.encode(data, 'utf8');
                        resolve();
                    });
            });
    });
}

export {decryptKuz, encryptKuz}