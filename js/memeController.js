'use strict'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  console.log(gCtx)
}

function onSelectImg(imgId) {
  gMeme.selectedImgId = imgId

  renderMeme()
}

function renderMeme() {
  const elCanvasContainer = document.querySelector('.canvas-container')
  elCanvasContainer.classList.remove('hidden')

  const { selectedImgId, lines } = getMeme()
  const txt = gMeme.lines[gMeme.selectedLineIdx].txt

  let selectedImg = gImgs.find((img) => img.id === selectedImgId)

  const elImg = new Image()
  elImg.src = selectedImg.url

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}
