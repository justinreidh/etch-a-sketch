const grid = document.querySelector('.grid')

function createGrid(number = 16) {
    for (i = 0; i < number; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        
        for (j = 0; j < number; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.style.border = '1px solid black';
            row.addEventListener('mouseover', () => {
                row.classList.add('dark')
            })
            column.appendChild(row);
        } 
        grid.appendChild(column);
    } 
}

createGrid() 


let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let selection = prompt("How many pixels (per side)?")
    if (selection <= 100) {
        let rows = document.querySelectorAll('.row');
        rows.forEach(element => element.remove())
        let columns = document.querySelectorAll('.column')
        columns.forEach(column => column.remove())
        createGrid(selection)
    } else {
        alert('too many pixels')
    }
})



