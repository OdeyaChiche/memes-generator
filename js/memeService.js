'use strict'

let gImgs = [
  { id: 1, url: 'img/meme-imgs (square)/1.jpg', keywords: ['funny'] },
  { id: 2, url: 'img/meme-imgs (square)/2.jpg', keywords: ['cute', 'dog'] },
]
let gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Add Text Here',
      size: 30,
      color: 'red',
    },
    {
      txt: 'Add Another Text Here',
      size: 30,
      color: 'blue',
    },
  ],
}
let gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
  return gMeme
}

function setImg(imgId) {
  let elGallery = document.querySelector('.gallery')
  gMeme.selectedImgId = imgId

  renderMeme()
  elGallery.classList.add('hidden')
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
  console.log(gMeme.lines[gMeme.selectedLineIdx].txt)

  renderMeme()
}

function renderTextLines(){

    for(let i=0; i<gMeme.lines.length; i++){
        let txt=gMeme.lines[i].txt
        drawText(txt, 10, 50)
    }
}

function drawText(text, x, y) {
  let size = gMeme.lines[gMeme.selectedLineIdx].size

  gCtx.lineWidth = 1
  gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
  gCtx.font = `${size}px Arial`

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function changeTextColor(value) {
  gMeme.lines[gMeme.selectedLineIdx].color = value

  renderMeme()
}
