let fs = require('file-system')

let output = fs.readFileSync('thirdArgument.txt', 'utf8');

let lines = output.split('\n');

const third = (arr) => {
    let count = 0;
    let obj = {};
    arr = arr.map(el=>el.split(' '))
    for(let i = 0;i < arr.length;i++) {
        for(let j = 0;j < arr[i].length;j++) {
            if(arr[i][j] in obj){
                obj[arr[i][j]]++
            } else if(arr[i][j] !== ' ') {
                obj[arr[i][j]] = 0
            }
        }
        if(Object.values(obj).every(el=>el===0)) count++
        obj = {}
    }
    return count;
}

console.log(third(lines))