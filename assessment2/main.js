import { encryptText } from "./modules/encrypt.js";

document.getElementById("shift").onchange = function (e) {
  let shift = e.target.value;
  console.log(shift);

  let text = document.getElementById("plaintext").value;

  let total = encryptText(text, shift);

  document.getElementById("encryptedtext").value = total;
};
