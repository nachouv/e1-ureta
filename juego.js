let board;
let jugador1;
let jugador2;

function createBoard(numRows, numCols) {
    const rows = []
    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                letra : "X"
            })
        }
        rows.push(casillas)
    }
    return rows
}


function setValue(board, row, col, value) {
    board[row][col] = value
}

const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) 
            if (casillas[j].seMuestra) {
                butCasilla.innerText = casillas[j].letra
            }else {
                butCasilla.innerText = ""
            }  
        }
    }
}

const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col)
    casilla.seMuestra = true
    renderizarBoard(board)
}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)

}

main()

//const h1 = document.getElementById("titulo")
//h1.innerText = ""