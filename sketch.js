
function setup () {
  createCanvas(innerWidth, innerHeight)  
  
  let blue = random(200, 255)
  background(100, 50, blue)

  let count = 0
  
  while (count < 300) {
    let x = random(width)
    let y = random(height)
    let red = random(255)
    let green = random(255)
    let size = random(25, 100)
   
    if (random() < 0.25) {
      fill(0, green, 0)
      rect(x, y, size/4, size/4)
    } else {
      fill(red, 0, 0)
      ellipse(x, y, size) 
    }
    count++
  }
}
