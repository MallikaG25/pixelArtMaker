// Select color input

// Select size input
let pixelTable = document.querySelector("#pixelCanvas");


let sizePiker = document.getElementById("sizePiker");
sizePicker.addEventListener('submit',function(event) {
    event.preventDefault();
    let row = document.querySelector("#inputHeight").value;
    let column = document.querySelector("#inputWidth").value;
    makeGrid(row,column);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(row,column) {
    pixelTable.innerHTML = "";
    for(var i=0;i<=row-1;i++){
        var rowInsertion = pixelTable.insertRow(i);
        for(var j=0;j<=column-1;j++){
            var cellInsertion = rowInsertion.insertCell(j);
            colourChange(cellInsertion);
        };
    };
}

function colourChange(cellInsertion){
    var color = document.getElementById("colorPicker");
    cellInsertion.addEventListener("click",function(event) {
        event.target.style.backgroundColor = color.value;
    });
}
