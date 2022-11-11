const terminal = document.getElementById("terminal-window")
let initialHeight = localStorage.getItem("height")
let initialWidth = localStorage.getItem("width")
if(initialHeight == undefined || initialWidth == undefined){
    initialHeight = "300px"
    initialWidth = "500px"
}

function savePositionToLocalStorage(x, y){
    localStorage.setItem("position", JSON.stringify({ x:x, y:y }))
}

function getPositionFromLocalStorage(){
    const positionString = localStorage.getItem('position')
    try{
        const { x, y } = JSON.parse(positionString)

        return { x, y }
    }catch(e){
        return { x:0, y:0 }
    }
}

const { x, y } = getPositionFromLocalStorage()

const win = new WinBox({ 
    x:x,
    y:y,
    title: "Console", 
    mount: terminal,
    height: initialHeight,
    width: initialWidth,
    onmove: function(x, y){
        savePositionToLocalStorage(x, y)
        console.log(x, y)
    },
});
terminal.style.height = "100%"
terminal.style.width = "100%"
win.removeControl("wb-close")
