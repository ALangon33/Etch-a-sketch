const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};

const bodyContainer = document.querySelector('body');
const canvasContainer = document.createElement('div');
const btn = document.querySelector('button');
const inputContainer = document.getElementById('input-container');
const canvasSize = 960;
let gridSize = 16;
let isDown = false;

  generateCanvas();
  generateGrid(gridSize);
  
  let canvasColor = canvasContainer.style.backgroundColor;

function generateCanvas() {
  canvasContainer.id = 'canvas-container';
  canvasContainer.style.width = `${canvasSize + 'px'}`;
  canvasContainer.style.height = `${canvasSize + 'px'}`;
  canvasContainer.style.backgroundColor = 'hsl(0,0%,100%)';
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
      gridColumnDiv.style.backgroundColor = 'hsl(0,0%,100%)';
      gridColumnDiv.style.flexFlow = 'column nowrap';
      gridRowDiv.appendChild(gridColumnDiv);
    };
  };

  let gridTiles = document.querySelectorAll('#grid-tile');

  gridTiles.forEach(gridTile => gridTile.addEventListener('mousedown', () => {
    isDown = true;
    currentColor = gridTile.style.backgroundColor;    
    currentColorSliced = currentColor.slice(4,-1);
    colorComponents = currentColorSliced.split(',')
    colorInHsl = rgbToHsl(colorComponents[0],colorComponents[1],colorComponents[2])
    colorInHsl[1] = `${colorInHsl[1]}` + `%`; 
    colorInHsl[2] = colorInHsl[2] - 10; 
    hslColorInString = colorInHsl.toString();
    outputColor = `hsl(` + `${hslColorInString}` + `%)`;
    gridTile.style.backgroundColor = outputColor;
    gridRowDiv.appendChild(gridColumnDiv);
  }));
  
  gridTiles.forEach(gridTile => gridTile.addEventListener('mousemove', () => {
    if (isDown) {
      currentColor = gridTile.style.backgroundColor;
      currentColorSliced = currentColor.slice(4,-1);
      colorComponents = currentColorSliced.split(',')
      colorInHsl = rgbToHsl(colorComponents[0],colorComponents[1],colorComponents[2])
      colorInHsl[1] = `${colorInHsl[1]}` + `%`; 
      colorInHsl[2] = colorInHsl[2] - 10; 
      hslColorInString = colorInHsl.toString();
      outputColor = `hsl(` + `${hslColorInString}` + `%)`;      
      gridTile.style.backgroundColor = outputColor;
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
  gridSize = prompt("Grid Size : ",16)
  };
  generateGrid(gridSize);
});

