const bodyContainer = document.querySelector('body');
const canvasContainer = document.createElement('div');
canvasContainer.id = 'canvas-container';
canvasContainer.style.width = '960px';
canvasContainer.style.height = '960px';
canvasContainer.style.backgroundColor = 'white';
canvasContainer.style.display = 'flex';
canvasContainer.style.flexFlow = 'column nowrap';
canvasContainer.style.alignItems = 'center';
bodyContainer.appendChild(canvasContainer);

let gridSize = 16;

for (i=0;i<gridSize;i++) {
    let gridRowDiv = document.createElement('div');
    gridRowDiv.style.flex = '1'
    gridRowDiv.style.flexFlow = 'row nowrap'
    canvasContainer.appendChild(gridRowDiv);
    for (n=0;n<gridSize;n++){
          let gridColumnDiv = document.createElement('div');
          gridColumnDiv.style.width = `${(960/gridSize) + 'px'}`
          gridColumnDiv.style.height = `${(960/gridSize) + 'px'}`
          gridColumnDiv.style.flex = '1'
        gridColumnDiv.style.flexFlow = 'column nowrap'
        gridRowDiv.appendChild(gridColumnDiv);
    };    
};
