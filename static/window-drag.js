// Make the DIV element draggable:

window.onload = (event) => {
  getPositionFromLocalStorage()
  let { height, width } = getSizeFromLocalStorage()
  setWindowSize(height, width)

  const collapseIcon = document.getElementById("collapsible-icon")
  // document.getElementById("terminal-window").style.visibility = "visible"
  collapseIcon.onclick = ()=>{
    console.log("Clicked on display")
    collapseDisplay()
  }
};

function getPositionFromLocalStorage(){
  const terminalWindow = document.getElementById("terminal-window")
  let positionString = localStorage.getItem("window-position")
  const { x, y } = JSON.parse(positionString)
  terminalWindow.style.left = x + "px"
  terminalWindow.style.top = y + "px"
}

function getSizeFromLocalStorage(){
  const defaultSize = getDefaultSize()
  const height = localStorage.getItem("height")
  const width = localStorage.getItem("width")

  if(height == "" || width == "") return defaultSize
  
  return { height, width }
}

dragElement(document.getElementById("terminal-window"));

function dragElement(elmnt) {
  
  if (document.getElementById("terminal-window-dragger")) {
    document.getElementById("terminal-window-dragger").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  const onresize = (dom_elem, callback) => {
    const resizeObserver = new ResizeObserver(() => callback() );
    resizeObserver.observe(dom_elem);
  };
  
  const terminalWindow = document.getElementById("terminal-window")

  onresize(terminalWindow, function () {
    const height = terminalWindow.style.height;
    const width = terminalWindow.style.width;
    if(height !== "" && width !== ""){
      saveSizeToLocalStorage(height, width)
    }
  });

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // // set the element's new position:
    const top = (elmnt.offsetTop - pos2)
    const left = (elmnt.offsetLeft - pos1)
    moveWindow(top, left)
    // savePositionToLocalStorage(top, left)
  }



  function closeDragElement() {
    // stop moving when mouse button is released

    const top = (elmnt.offsetTop - pos2)
    const left = (elmnt.offsetLeft - pos1)
    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";
    savePositionToLocalStorage(top, left)

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

function savePositionToLocalStorage(top, left){
  localStorage.setItem("window-position", JSON.stringify({
    x:left,
    y:top
  }))
}

function saveSizeToLocalStorage(height, width){
  saveHeightToLocalStorage(height)
  saveWidthToLocalStorage(width)
}

function saveHeightToLocalStorage(height){
  localStorage.setItem("height",height)
}

function saveWidthToLocalStorage(width){
  localStorage.setItem("width",width)
}

function moveWindow(top, left){
  const terminalWindow = document.getElementById("terminal-window")
  terminalWindow.style.top = top + "px";
  terminalWindow.style.left = left + "px";
  // console.log(`translate(${left}px, ${top}px)`)
  // terminalWindow.style.transform = `translate(${left}px, ${top}px)`
}

function setWindowSize(height, width){
  const terminalWindow = document.getElementById("terminal-window")
  terminalWindow.style.height = height
  terminalWindow.style.width = width
}

function getDefaultSize(){
  return { height:"300px", width:"500px" }
}

function resetWindowToDefault(){
  moveWindow(0,0)
  const { height, width } = getDefaultSize()
  setWindowSize(height, width)
  saveSizeToLocalStorage(height, width)
  savePositionToLocalStorage(0,0)
}

function collapseDisplay(){
  const terminalWindow = document.getElementById("terminal-window")
  const terminalDisplay = document.getElementById("terminal-display")
  if(terminalWindow.classList.contains(".terminal-collapsed")){
    console.log("Okay? Unset")
    terminalWindow.style.height = "300px"
    terminalDisplay.style.visibility = "visible"
    terminalWindow.style.overflow = "auto"
    terminalWindow.style.resize = "both"
    terminalWindow.classList.remove(".terminal-collapsed")
  }else{
    console.log("Okay? Set")
    terminalWindow.style.height = "35px"
    terminalDisplay.style.visibility = "hidden"
    terminalWindow.style.overflow = "hidden"
    terminalWindow.style.resize = "none"
    terminalWindow.classList.toggle(".terminal-collapsed")
  }
  
}

