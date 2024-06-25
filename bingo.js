document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const bingoBoard = document.getElementById('bingo-board');
    const bingoCountDisplay = document.getElementById('bingo-count');
    let bingoCount = 0;

    // BINGOボードを初期化
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.textContent = i + 1;
        cell.addEventListener('click', () => markCell(cell));
        bingoBoard.appendChild(cell);
    }

    function markCell(cell) {
        if (!cell.classList.contains('marked')) {
            cell.classList.add('marked');
            checkBingo();
        }
    }

    function checkBingo() {
        const cells = Array.from(document.querySelectorAll('.bingo-cell'));
        const matrix = [];
        while (cells.length) matrix.push(cells.splice(0, boardSize));
        
        // 行、列、対角線のBINGOチェック
        let newBingo = false;
        for (let i = 0; i < boardSize; i++) {
            if (matrix[i].every(cell => cell.classList.contains('marked')) ||
                matrix.every(row => row[i].classList.contains('marked'))) {
                newBingo = true;
            }
        }
        if (matrix.every((row, index) => row[index].classList.contains('marked')) ||
            matrix.every((row, index) => row[boardSize - index - 1].classList.contains('marked'))) {
            newBingo = true;
        }

        if (newBingo) {
            bingoCount++;
            bingoCountDisplay.textContent = `BINGO Count: ${bingoCount}`;
        }
    }

    window.goToRanking = function() {
        window.location.href = 'ranking.html';
    }
});
