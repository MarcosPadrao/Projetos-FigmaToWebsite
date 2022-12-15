'use strict'

const principal = document.getElementById('principal')
const trocarOverlay = () => principal.classList.toggle('trocar')

document.getElementById('abrir-cadastrar').addEventListener('click',trocarOverlay)
document.getElementById('abrir-logar').addEventListener('click',trocarOverlay)
document.getElementById('registre-se').addEventListener('click',trocarOverlay)
document.getElementById('ja-tem-conta').addEventListener('click',trocarOverlay)