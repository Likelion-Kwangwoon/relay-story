import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_SECRET;
  
export  const encrypt = (val) => {
  let text = val.toString();

  const encrypted = CryptoJS.AES.encrypt(text, secretKey);
  let result = encrypted.toString();

  return encodeURIComponent(result);
};
  
export const decrypt = (encrypted) => {
  const url = decodeURIComponent(encrypted);

  let decrypted = CryptoJS.AES.decrypt(url, secretKey);
  let result = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

  return result;
};