document.getElementById("encrypt-btn").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const encryptedText = encryptedText(inputText);
  displayOutput(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const decryptedText = decryptedText(inputText);
  displayOutput(decryptedText);
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const outputText = document.getElementById("output-text");
  navigator.clipboard.writeText(outputText.innerText);
  alert("Texto copiado en el portapapeles");
});

// funcion para encriptar el texto
function encrypt(Text) {
  return Text.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ain")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}
// funcion para desencriptar el texto
function decrypt(Text) {
  return Text.replace(/enter/g, "")
    .replace(/imes/g, "")
    .replace(/ain/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function displayOutput(Text) {
  document.getElementById("output-text").innerText = Text
    ? "Resultado:"
    : "Ningún Mensaje fue encontrado";
  document.getElementById("output-text").innerText =
    Text || "Ingresa el text que deseas encriptar o desencriptar";
}
