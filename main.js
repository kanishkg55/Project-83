canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "";
width = "";
var mouseEvent = ""

canvas.addEventListener("mousedown", myMousedown);
function myMousedown()
{
    color = document.getElementById("color");
    width = document.getElementById("width");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup()
{
    color = document.getElementById("color");
    width = document.getElementById("width");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave()
{
    color = document.getElementById("color");
    width = document.getElementById("width");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove()
{
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

    mouseEvent = "mousemove";
}

canvas.addEventListener("touchstart", myTouchstart);
function myTouchstart()
{
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

    mouseEvent = "touchstart";
}

canvas.addEventListener("touchmove", myTouchmove);
function myTouchmove()
{
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

    mouseEvent = "touchmove";
}