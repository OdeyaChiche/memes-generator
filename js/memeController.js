'use strict'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderGallery()
}

function renderMeme() {
  const elCanvasContainer = document.querySelector('.canvas-container')
  elCanvasContainer.classList.remove('hidden')

  const { selectedImgId, lines } = getMeme()
  //   const { txt } = lines

  let selectedImg = gImgs.find((img) => img.id === selectedImgId)

  const elImg = new Image()
  elImg.src = selectedImg.url

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

  renderTextLines()
}

function renderGallery() {
  const elGallery = document.querySelector('.img-container')
  let count = 1
  let strHtml = ''

  for (let i = 0; i < gImgs.length; i++) {
    strHtml += `<img src='${gImgs[i].url}' class="${count}" onclick="onImgSelect(${count})" />`
    count++
  }

  //   let galleryHtml = gImgs.map((img) => {
  //     return `<img src=${img.url} class="${count}" onclick="onSelectImg(${count})" />`
  //     count++
  //     console.log(count);
  //   })

  elGallery.innerHTML = strHtml
}

function onImgSelect(imgId) {
  setImg(imgId)
}

function onSetLine(txt) {
  setLineTxt(txt)
}

function downloadMeme(elLink) {
  const dataUrl = gElCanvas.toDataURL()
  elLink.href = dataUrl

  elLink.download = 'my-meme'
}

function onChangeColor(value) {
  changeTextColor(value)
}

function increaseFont(){
  gMeme.lines[gMeme.selectedLineIdx].size+=5

    renderMeme()
}

function decreaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size-=5
  
      renderMeme()
  }
