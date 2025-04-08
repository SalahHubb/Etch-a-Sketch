function removeGrids() {
    const grids = document.querySelectorAll('.flex-container div');
    grids.forEach((item) => {
        item.remove();
    })
}
function createGrids(sqrNum = 16) {
    if (sqrNum !== 16 ) {
        removeGrids();
    }

    const flexContainer = document.querySelector('.flex-container');
    
    for (let i = 0; i < (sqrNum * sqrNum); i++) {
        const grid = document.createElement("div");
        grid.style.width = `${500 / sqrNum}px`;
        grid.style.height = `${500 / sqrNum}px`;
        grid.classList.add("grid");
        flexContainer.appendChild(grid);
    }
}

document.querySelector(".flex-container").addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
})

document.querySelector("button.change-grid").addEventListener('click', () => {
    let num = parseInt(prompt("Enter less than 100 number"));
    createGrids(num);
})

document.querySelector("button.erase").addEventListener("click", () => {
    let grids = document.querySelectorAll(".flex-container div");
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});
createGrids();