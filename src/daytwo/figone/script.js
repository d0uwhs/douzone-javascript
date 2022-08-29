"use strict";
document.querySelector('.handleOnClickForTable').addEventListener('click', () => {
    const column = prompt('테이블 행의 갯수는?');
    const rows = prompt('테이블 열의 갯수는?');
    document.write('<table border="1">');
    let count = 0;
    for (let i = 0; i < column; i++) {
        document.write('<tr></tr>');
        for (let j = 0; j < rows; j++) {
            document.write(`<td>${count}</td>`);
            count++;
        }
    }
    document.write('</table>');
});
