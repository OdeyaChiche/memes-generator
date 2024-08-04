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
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
    },
  ],
}
let gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
  return gMeme
}
