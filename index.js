const fr = require('face-recognition')

fr.winKillProcessOnExit()

const detector = fr.FaceDetector()

const image = fr.loadImage('./dataset/IMG_2973.JPG')

console.log('detecting faces')
const faceSize = 150

const faceImages = detector.detectFaces(image, faceSize)

faceImages.forEach((img, i) => fr.saveImage(`./dataset/face_${i}.png`, img))


// Promise.all([
//   detector.detectFaces(lenna, faceSize),
// ])
//   .then(([lennaFaces]) => {
//     const win1 = new fr.ImageWindow()
//     win1.setImage(fr.tileImages(lennaFaces))
//     fr.hitEnterToContinue()
//   })
//   .catch((err) => {
//     console.error(err)
//   })
