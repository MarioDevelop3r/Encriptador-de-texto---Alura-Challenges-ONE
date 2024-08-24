document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;
  const historyList = document.getElementById("history-list");
  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");

  // Cargar el tema guardado
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  // Cambiar tema
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
  });

  // Función para validar el texto
  const validateText = (text) => {
    const regex = /^[a-z\s!]+$/; // Solo permite letras minúsculas y espacios
    return regex.test(text);
  };

  // Función para encriptar
  const encryptText = (text) => {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  };

  // Función para desencriptar
  const decryptText = (text) => {
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  };

  // Agregar al historial, manteniendo solo 3 elementos
  const addToHistory = (originalText, resultText) => {
    const historyItem = document.createElement("li");
    historyItem.textContent = `Original: ${originalText} | Resultado: ${resultText}`;

    if (historyList.childElementCount >= 3) {
      historyList.removeChild(historyList.firstChild); // Limitar a 3 registros
    }

    historyList.appendChild(historyItem);

    // Mostrar la lista si hay elementos
    if (historyList.childElementCount > 0) {
      historyList.classList.remove("hidden");
    }
  };

  // Encriptar el texto
  document.getElementById("encrypt-btn").addEventListener("click", () => {
    const text = inputText.value;
    if (validateText(text)) {
      const encryptedText = encryptText(text);
      outputText.textContent = encryptedText;
      addToHistory(text, encryptedText);
    } else {
      Swal.fire({
        icon: "error",
        title: "Texto no válido",
        text: "Solo se permiten letras minúsculas y espacios.",
      });
    }
  });

  // Desencriptar el texto
  document.getElementById("decrypt-btn").addEventListener("click", () => {
    const text = inputText.value;
    if (validateText(text)) {
      const decryptedText = decryptText(text);
      outputText.textContent = decryptedText;
      addToHistory(text, decryptedText);
    } else {
      Swal.fire({
        icon: "error",
        title: "Texto no válido",
        text: "Solo se permiten letras minúsculas y espacios.",
      });
    }
  });

  // Copiar el texto encriptado al portapapeles
  document.getElementById("copy-btn").addEventListener("click", () => {
    const text = outputText.textContent;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
          icon: "success",
          title: "Texto copiado al portapapeles",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  });
});

