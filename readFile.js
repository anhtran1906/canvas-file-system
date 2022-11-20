const fs = require('fs');
const readline = require('readline');

let map = new Map()

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');
  let canvas = Array.from(new Array(3), () => new Array(3))

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // console.log(`Line from file: ${line}`);
    let lineInfo = line.split(' ')
    // console.log({lineInfo})
    let row = lineInfo[0]
    let col = lineInfo[1]
    let code = lineInfo[2]
    canvas[row][col] = code.charCodeAt(0)
  }
  return canvas
}

function handleCommand(callback) {
    processLineByLine()
    .then((response) => {
        if(!response) {
            console.log(`There is an error: ${response}`)
        }
        return response
    })
    .then((data) => {
        callback(data)
    })
}

function printCanvas(canvas) {
    console.log(canvas)
}

function processCommand() {
    const myArgs = process.argv.slice(2);
    console.log('myArgs: ', myArgs);

    switch (myArgs[0]) {
      case 'add_rectangle':
        console.log(myArgs[1], 'smells quite badly.');
        break;
      case 'erase_area':
        console.log(myArgs[1], 'is really cool.');
        break;
      case 'drag_drop':
        break;
      case 'bring_to_front':
        break;
      case 'print_canvas': 
       handleCommand(printCanvas)
       break;
      default:
        console.log('Sorry, that is not something I know how to do.');
    }
}
processCommand()


