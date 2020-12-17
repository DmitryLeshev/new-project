import query from "./query";

export const downloadCertificate = async (id, name) => {
  const res = await query("device/genCert", { id });
  console.log("res: ", res);
  let element = document.createElement("a");
  let filename = name + ".aacrt";
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(res)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
