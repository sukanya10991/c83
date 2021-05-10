var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width= 2;
    screen_width=screen.width;

    function submit(){
        color = document.getElementById("ddu-du").value;
        width=document.getElementById("hello").value;
    }

var new_width=screen.width-70;
var new_height=screen.height-300;
if(screen_width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",touchstart);
function touchstart(e){
    console.log("touchstart");    
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",touchmove);
function touchmove(e){
    console.log("touchmove");
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width;
   console.log("Last position of x and y coordinates = ");
   console.log("x = " + last_x + "y = " + last_y);
   ctx.moveTo(last_x,last_y);
   console.log("Current position of x and y coordinates = ");
   console.log("x = " + current_x + "y = " + current_y);
   ctx.lineTo(current_x,current_y);
   ctx.stroke();
   last_x = current_x;
   last_y = current_y;
}
