document.getElementById("encrypt-btn").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value; 
  if (!validText(inputText)) {
    alert(
      "El texto ingresado no debe contener acentos ni caracteres especiales"
    );
    return;
  }
  const encryptedText = encrypt(inputText);
  displayOutput(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value; 
  if (!validText(inputText)) {
    alert(
      "El texto ingresado no debe contener acentos ni caracteres especiales"
    );
    return;
  }
  const decryptedText = decrypt(inputText);
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
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}
// funcion para desencriptar el texto
function decrypt(Text) {
  return Text.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function displayOutput(Text) {
  document.getElementById("output-text").innerText = Text
    ? `Resultado: ${Text}`
    : "Ningún Mensaje fue encontrado";
}

// funcion para validar que el texto ingresado no contenga  acentos ni caracteres especiales.

function validText(text) {
  const regex = /^[a-z\s]*$/;
  return regex.test(text);
}
