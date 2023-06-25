const bodyContainer = document.querySelector('body');
const canvasContainer = document.createElement('div');

canvasContainer.id = 'canvas-container';
canvasContainer.style.width = '960px';
canvasContainer.style.height = '960px';
canvasContainer.style.backgroundColor = 'white';
canvasContainer.style.display = 'flex';
canvasContainer.style.flexFlow = 'row nowrap';
canvasContainer.style.alignItems = 'center';
bodyContainer.appendChild(canvasContainer);

let gridSize = 16;

for (i = 0; i < gridSize; i++) {
  gridRowDiv = document.createElement('div');
  gridRowDiv.id = 'grid-row'
  gridRowDiv.style.flex = '1'
  gridRowDiv.style.flexFlow = 'row nowrap'
  canvasContainer.appendChild(gridRowDiv);
  for (n = 0; n < gridSize; n++) {
    gridColumnDiv = document.createElement('div');
    gridColumnDiv.style.width = `${(960 / gridSize) + 'px'}`
    gridColumnDiv.style.height = `${(960 / gridSize) + 'px'}`
    gridColumnDiv.style.flex = '1'
    gridColumnDiv.id = 'grid-tile';
    gridColumnDiv.style.flexFlow = 'column nowrap'
    gridRowDiv.appendChild(gridColumnDiv);
  };
};

let isDown = false;

const gridRows = document.querySelectorAll('#grid-row')
const gridTiles = document.querySelectorAll('#grid-tile')

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


function changeColor() {

}
