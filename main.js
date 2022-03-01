var last_x, last_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;

    var new_width = screen.width - 70;
    var new_height = screen.height - 300;

    if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        console.log("my_touchstart");

        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clienty - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {
        console.log("my_touchMove");
        current_x = e.touches[0].clientX - canvas.offsetLeft;
        current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_x, last_y);

        ctx.lineTo(current_x, current_y);
        ctx.stroke();

        last_x = current_x;
        last_y = current_y;
    }

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
color = "brown";
width_of_line = 3;

var last_x, last_y;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_x, last_y);

        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}