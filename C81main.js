canvas=document.getElementById("e")
canvas.addEventListener("mousedown", press)
context=canvas.getContext("2d")
function press(et){
x=et.clientX-canvas.offsetLeft
y=et.clientY-canvas.offsetTop
crcile(x,y)
}
color="red"
function crcile(x,y){
    context.beginPath() ;
    context.linewidth= 1 ;
    context.strokeStyle=color;
    context.arc(x,y,20,0,2*Math.PI)
    context.stroke()
   
}
context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle=color;
context.arc(200,200,20,0,2*Math.PI)
context.stroke()
