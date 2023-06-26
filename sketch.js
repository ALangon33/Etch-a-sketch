const bodyContainer = document.querySelector('body');
const canvasContainer = document.createElement('div');
const btn = document.querySelector('button');
const canvasSize = 960;
let gridSize = 16;
  generateCanvas();
  generateGrid(gridSize);

  
function generateCanvas() {
  canvasContainer.id = 'canvas-container';
  canvasContainer.style.width = `${canvasSize + 'px'}`;
  canvasContainer.style.height = `${canvasSize + 'px'}`;
  canvasContainer.style.backgroundColor = 'white';
  canvasContainer.style.display = 'flex';
  canvasContainer.style.flexFlow = 'row nowrap';
  canvasContainer.style.alignItems = 'center';
  bodyContainer.appendChild(canvasContainer);
};

function generateGrid(a) {
  for (i = 0; i < a; i++) {
    gridRowDiv = document.createElement('div');
    gridRowDiv.id = 'grid-row';
    gridRowDiv.style.flex = '1';
    gridRowDiv.style.flexFlow = 'row nowrap';
    canvasContainer.appendChild(gridRowDiv);

    for (n = 0; n < a; n++) {
      gridColumnDiv = document.createElement('div');
      gridColumnDiv.style.width = `${(960 / a) + 'px'}`;
      gridColumnDiv.style.height = `${(960 / a) + 'px'}`;
      gridColumnDiv.style.flex = '1';
      gridColumnDiv.id = 'grid-tile';
      gridColumnDiv.style.flexFlow = 'column nowrap';
      gridRowDiv.appendChild(gridColumnDiv);
    };
  };

  let gridTiles = document.querySelectorAll('#grid-tile');
  let gridRows = document.querySelectorAll('#grid-rows');

  gridTiles.forEach(gridTile => gridTile.addEventListener('mousedown', () => {
    isDown = true;
    gridTile.classList.add('blackground');
    gridRowDiv.appendChild(gridColumnDiv);
  }));
  
  gridTiles.forEach(gridTile => gridTile.addEventListener('mousemove', () => {
    if (isDown) {
      gridTile.classList.add('blackground');
      gridRowDiv.appendChild(gridColumnDiv);
    };
  }));
  
  gridTiles.forEach(gridTile => gridTile.addEventListener('mouseup', () => {
    isDown = false;
  }));
  
  canvasContainer.addEventListener('mouseleave', () => {
    isDown = false;
  });
};

let isDown = false;

let gridTiles = document.querySelectorAll('#grid-tile');
let gridRows = document.querySelectorAll('#grid-row');

btn.style.margin = '30px';
btn.style.padding = '10px';
btn.style.color = 'bisque';
btn.style.backgroundColor = 'black';
btn.style.border = '5px black solid';
btn.style.borderRadius = '5rem';
btn.style.fontSize = '20px';



btn.addEventListener('click', () => {
  canvasContainer.innerHTML = '';
  gridSize = null;
  while(gridSize > 101 || gridSize < 1) {
  gridSize = prompt("Grid Size : ")
  };
  generateGrid(gridSize);
});


