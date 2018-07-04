const fr = require('face-recognition')

fr.winKillProcessOnExit()

const detector = fr.AsyncFaceDetector()

const lenna = fr.loadImage('./dataset/lars.1.jpg')

console.log('detecting faces')
const faceSize = 150
Promise.all([
  detector.detectFaces(lenna, faceSize),
])
  .then(([lennaFaces]) => {
    const win1 = new fr.ImageWindow()
    win1.setImage(fr.tileImages(lennaFaces))
    fr.hitEnterToContinue()
  })
  .catch((err) => {
    console.error(err)
  })
