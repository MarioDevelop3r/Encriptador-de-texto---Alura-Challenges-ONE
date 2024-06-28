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

## Extras

Para mejorar la experiencia del usuario, he incluido:

- **Botón de copiado**: Un botón que permite copiar el texto encriptado o desencriptado al portapapeles, imitando la funcionalidad de `Ctrl+C` o la opción "copiar" del menú de las aplicaciones.

## Instalación y Uso

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/nombre_del_repositorio.git

