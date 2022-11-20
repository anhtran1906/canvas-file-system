// https://codedraken.github.io/canvas-coords/
// https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1
class Rectangle {
    constructor(
        x=0,
        y=0,
        width =0, 
        height=0,
        fillColor='',
        strokeColor=''
    ) {
        this.x = Number(x)
        this.y = Number(y)
        this.width = Number(width)
        this.height = Number(height)
        this.fillColor = fillColor
        this.strokeColor = strokeColor
    }
    area() {
        return this.width * this.height
    }
    topLeftCorner() {
        return this.x
    }
    topRightCorner() {
        return this.x + this.width
    }
    bottomLeftCorner() {
        return this.y+ this.height
    }
    bottomRightCorner() {
        return this.y + this.height + this.width
    }
    draw() {
        // const canvas = document.getElementById("tutorial");
        const {
            x, y, width, height,
            fillColor, strokeColor
        } = this
        // const ctx = canvas.getContext("2d");
        ctx.save()

        ctx.fillStyle = fillColor;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x,y,width,height)
        ctx.strokeStyle = strokeColor
        
        ctx.restore()
        //   ctx.clearRect(20, 20, 100, 100);
    }

    bringTofFront() {

    }

    eraseArea(x, y, width, height) {
        ctx.clearRect(x-1, y-1, width+2, height+2)
    }
}

let canvas, ctx

// setup config variables and start the program
function init() {
  canvas = document.getElementById('tutorial')
  ctx = canvas.getContext('2d')
  const myRectangle = new Rectangle(50,50,100,100,"green", "black")
  myRectangle.draw();
 
  const myRectangle1 = new Rectangle(70,70,100,100,"yellow", "black")
  myRectangle1.draw();

  eraseButton = document.getElementById('erase')
  eraseButton.addEventListener('click', () => {
    myRectangle1.eraseArea(myRectangle1.x, myRectangle1.y, myRectangle1.width, myRectangle1.height)

  })

//   myRectangle1.eraseArea(myRectangle1.x, myRectangle1.y, myRectangle1.width, myRectangle1.height)
//   myRectangle.eraseArea(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height)
}

document.addEventListener('DOMContentLoaded', init)
