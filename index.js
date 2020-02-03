window.onload = main;
const BOARD = [];
const ROW = 8;

function main() {
    creatMatrix();
    startAlgorithm();
}

function startAlgorithm() {
    let count = 0;

    for (let i = 0; i < ROW; i++) {
        clearRow(0);
        BOARD[0][i] = 1;
        for (let j = 0; j < ROW; j++) {
            clearRow(1);
            if (canPutQueen(1, j)) {
                BOARD[1][j] = 1;
                for (let k = 0; k < ROW; k++) {
                    clearRow(2);
                    if (canPutQueen(2, k)) {
                        BOARD[2][k] = 1;
                        for (let l = 0; l < ROW; l++) {
                            clearRow(3);
                            if (canPutQueen(3, l)) {
                                BOARD[3][l] = 1;
                                for (let m = 0; m < ROW; m++) {
                                    clearRow(4);
                                    if (canPutQueen(4, m)) {
                                        BOARD[4][m] = 1;
                                        for (let n = 0; n < ROW; n++) {
                                            clearRow(5);
                                            if (canPutQueen(5, n)) {
                                                BOARD[5][n] = 1;
                                                for (let o = 0; o < ROW; o++) {
                                                    clearRow(6);
                                                    if (canPutQueen(6, o)) {
                                                        BOARD[6][o] = 1;
                                                        for (let p = 0; p < ROW; p++) {
                                                            clearRow(7);
                                                            if (canPutQueen(7, p)) {
                                                                BOARD[7][p] = 1;
                                                                print(++count);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function creatMatrix() {
    for (let i = 0; i < ROW; i++) {
        BOARD[i] = [];
        for (let j = 0; j < ROW; j++) {
            BOARD[i][j] = 0;
        }
    }
}

function clearRow(row) {
    for (let i = 0; i < ROW; i++) {
        BOARD[row][i] = 0;
    }
}

function canPutQueen(currentI, currentJ) {
    for (let i = 0; i < currentI; i++) {
        for (let j = 0; j < ROW; j++) {
            if (BOARD[i][j] === 1) {
                if (isAttack(i, j, currentI, currentJ)) {
                    return false;
                }
                break;
            }
        }
    }
    return true;
}

function isAttack(i, j, currentI, currentJ) {
    if (j === currentJ) {
        return true;
    }
    return Math.abs(i - currentI) === Math.abs(j - currentJ); //correct diagonal check :-))


}


function print(count) {
    const mainDiv = document.getElementById('app');
    let flag = true;
    const block = document.createElement('div');
    block.classList.add('main');

    for (let i = 0; i < ROW; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < ROW; j++) {
            if (j === 0) {
                flag = !flag;
            }
            const cell = document.createElement('div');
            if (flag) {
                cell.className = 'cell black';
            } else {
                cell.className = 'cell white';
            }
            if (BOARD[i][j] === 1) {
                cell.className = 'cell queen';
            }
            row.appendChild(cell);
            flag = !flag;
        }
        block.appendChild(row);
    }
    mainDiv.appendChild(block);

    // let matrixStr = ' ';
    // for (let i = 0; i < ROW; i++) {
    //     for (let j = 0; j < ROW; j++) {
    //         matrixStr += `  ${BOARD[i][j]}  `;
    //     }
    //     matrixStr += ' \n ';
    //     matrixStr += ' \n ';
    //
    // }
    // console.log(` ${count} \n \n ${matrixStr}`);
}