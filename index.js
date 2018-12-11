const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
 
// Write "Awesome!"
ctx.clearRect(0, 0, 30, 50);
ctx.font = "24px serif";
ctx.fillText("蛤", 0, 30);
let result = "";
const data32 = new Uint32Array(ctx.getImageData(0, 0, 30, 50).data.buffer);
console.log(data32.length)
for(let i = 0; i < data32.length; i++) {
    if (data32[i] & 0xff000000) {
        result+=("🌕")
    }else{
        result+=("🌑")
    }
    if((i+1)%30==0){
        result+=("\n")
    }
  }
// Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()
console.log(result)




// Draw cat with lime helmet
// loadImage('examples/images/lime-cat.jpg').then((image) => {
//   ctx.drawImage(image, 50, 0, 70, 70)
 
//   console.log('<img src="' + canvas.toDataURL() + '" />')
// })