
# Desafío Encriptador de Texto - Alura Challenges ONE

¡Bienvenidos y bienvenidas a mi proyecto de encriptador de texto!

He desarrollado una aplicación web que permite encriptar y desencriptar textos, de manera que puedas intercambiar mensajes secretos con otras personas que conozcan el secreto de la encriptación utilizada.

## Descripción

Este proyecto transforma un texto en una versión encriptada y viceversa, utilizando un conjunto específico de "llaves" de encriptación. La encriptación se realiza de la siguiente manera:

- La letra **"e"** se convierte en **"enter"**.
- La letra **"i"** se convierte en **"imes"**.
- La letra **"a"** se convierte en **"ai"**.
- La letra **"o"** se convierte en **"ober"**.
- La letra **"u"** se convierte en **"ufat"**.

## Requisitos

Para cumplir con los objetivos del proyecto, la aplicación:

1. **Funciona solo con letras minúsculas**.
2. **No utiliza letras con acentos ni caracteres especiales**.
3. **Permite la conversión de una palabra a su versión encriptada y devolver una palabra encriptada a su versión original**.

### Ejemplos

- `gato` se convierte en `gaitober`.
- `gaitober` se convierte en `gato`.

## Funcionalidades de la Página

La página web incluye:

- **Campos para la inserción de texto**: El usuario puede ingresar el texto que desee encriptar o desencriptar.
- **Opciones de encriptar y desencriptar**: El usuario puede seleccionar entre estas dos opciones.
- **Visualización del resultado**: El resultado del texto encriptado o desencriptado se muestra en pantalla.
- **Botón de copiado**: Un botón que permite copiar el texto encriptado o desencriptado al portapapeles, imitando la funcionalidad de `Ctrl+C` o la opción "copiar" del menú de las aplicaciones.
- **Historial de acciones**: Muestra las últimas 5 acciones de encriptado o desencriptado realizadas.
- **Botón de cambio de tema**: Un botón que permite alternar entre el modo claro y el modo oscuro para mejorar la experiencia del usuario según sus preferencias y condiciones de iluminación.

## Extras

Para mejorar la experiencia del usuario, he incluido:

- **Botón de copiado**: Un botón que permite copiar el texto encriptado o desencriptado al portapapeles, imitando la funcionalidad de `Ctrl+C` o la opción "copiar" del menú de las aplicaciones.

## Instalación y Uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/MarioDevelop3r/Encriptador-de-texto---Alura-Challenges-ONE.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd Encriptador-de-texto---Alura-Challenges-ONE
   ```
3. Abre el archivo `index.html` en tu navegador para ver la aplicación en funcionamiento.

## Insignia culminacion curso

<p align="center">
  <img src="https://github.com/MarioDevelop3r/Encriptador-de-texto---Alura-Challenges-ONE/assets/135486752/0067d47e-adbe-4ecb-94ba-ebfe99aa56fb" alt="Captura de pantalla de la aplicación" width="500"/>
</p>

## Estructura del Proyecto

```bash
├── index.html
├── css
│   └── index.css
├── js
│   └── app.js
└── img
    ├── logo.png
    └── fondo.png
```

## Tecnologías Utilizadas

- **HTML5**: Estructura del sitio web.
- **CSS3**: Estilización y diseño del sitio web, incluyendo la implementación de temas claro y oscuro.
- **JavaScript**: Lógica de encriptación/desencriptación, manipulación del DOM, y gestión del historial.
- **SweetAlert2**: Librería utilizada para mostrar alertas personalizadas al usuario.
- **FontAwesome**: Íconos utilizados en la interfaz.

## Autor

- **Mario Rojas** - [GitHub](https://github.com/MarioDevelop3r) | [LinkedIn](https://www.linkedin.com/in/mario-rojas-dev/)

 