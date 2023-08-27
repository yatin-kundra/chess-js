const gameboard = document.querySelector("#gameboard")
const player  = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8;

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ",
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]



function createBoard()
{
    // foreach function is used to do something for each element of an array , like here each elemnte of array is being called startPiece
    // and for each setartPiece we are creating a div and giving each div a class of square.
    startPieces.forEach((startPieces, i) => {
        const square = document.createElement('div');
        square.innerHTML = startPieces
        square.classList.add('square');
        square.classList.add('square-id',i);

        const row = Math.floor((63-i) / 8) + 1;
        
        if(row % 2 === 0){
            square.classList.add(i%2 === 0 ? 'beige' : 'brown')
        }else{
            square.classList.add(i%2 === 0 ? 'brown' : 'beige')
        }

        if(i <= 15){
            square.firstElementChild.firstElementChild.classList.add('black')
        }

        if(i>=48)[
            square.firstElementChild.firstElementChild.classList.add('white')

        ]

        gameboard.append(square);

        
    })
}

createBoard()

