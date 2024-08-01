// Función para encriptar el texto
function encryptText() {
  const inputText = document.getElementById('input-text').value;
  if (!validText(inputText)) {
    alert("El texto ingresado no debe contener acentos ni caracteres especiales");
    return;
  }
  const encryptedText = inputText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById('output-text').innerText = encryptedText;
  document.getElementById('output-message').innerText = 'Texto encriptado:';
  addHistory(`Texto encriptado: ${encryptedText}`);
}

// Función para desencriptar el texto
function decryptText() {
  const inputText = document.getElementById('input-text').value;
  if (!validText(inputText)) {
    alert("El texto ingresado no debe contener acentos ni caracteres especiales");
    return;
  }
  const decryptedText = inputText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById('output-text').innerText = decryptedText;
  document.getElementById('output-message').innerText = 'Texto desencriptado:';
  addHistory(`Texto desencriptado: ${decryptedText}`);
}

// Función para copiar el texto
function copyText() {
  const text = document.getElementById('output-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Texto copiado en el portapapeles");
  });
}

// Función para agregar al historial
function addHistory(entry) {
  const history = JSON.parse(localStorage.getItem('history')) || [];
  history.push(entry);
  localStorage.setItem('history', JSON.stringify(history));
  showHistory();
}

// Función para mostrar el historial
function showHistory() {
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const historyList = document.getElementById('history-list');
  
  // Solo muestra los últimos 5 registros
  const limitedHistory = history.slice(-5);
  
  historyList.innerHTML = limitedHistory.map(item => `<li>${item}</li>`).join('');
}

// Función para validar que el texto ingresado no contenga acentos ni caracteres especiales
function validText(text) {
  const regex = /^[a-z\s!/]*$/;
  return regex.test(text);
}

// Función para cambiar el tema
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Event listeners para los botones
document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyText);
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Mostrar el historial al cargar la página
document.addEventListener('DOMContentLoaded', showHistory); 
