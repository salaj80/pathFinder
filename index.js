function pathFinder(map) {
    let letters = '';
    let path = '';
    let directionI = 0;
    let directionJ = 1;
    let i = 0;
    let j = 0;
    const UpperLetter = /[A-Z]/;
    const rowLength = map[0].length;

    while (i >= 0 && i < map.length && j >= 0 && j < rowLength) {
        const currentChar = map[i][j];
        path += currentChar;
        if (UpperLetter.test(currentChar)) {
            letters += currentChar;
        }
        if (currentChar === '+') {
            if (directionJ !== 0) {
                directionI = (i > 0 && map[i - 1][j] !== ' ') ? -1 : 1;
                directionJ = 0;
            } else {
                directionJ = (j > 0 && map[i][j - 1] !== ' ') ? -1 : 1;
                directionI = 0;
            }
        }
        
        if (UpperLetter.test(currentChar) && i === map.length -1) {
                directionI = -1;
                directionJ = 0;
            } 
        if (currentChar === 's') {
            break;
        }
        i += directionI;
        j += directionJ;
    }

    return { letters, path };
}
const map = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+']
];

const { letters, path } = pathFinder(map);
console.log("Letters: ", letters);
console.log("Path: ", path);
