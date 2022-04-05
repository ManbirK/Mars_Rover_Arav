Canvas = document.getElementById("myCanvas");

ctx = Canvas.getContext('2d');


rover_img = "rover.png";
background_img = "mars.jpg";

rover_x = 10;
rover_y = 10;

rover_width = 100; 
rover_height = 90;

function add(){

    background_Tag = new Image();
    background_Tag.onload = upload_background;
    background_Tag.src = background_img;

    rover_tag = new Image();
    rover_tag.onload = upload_rover;
    rover_tag.src = rover_img;
    
}


function upload_background(){

    ctx.drawImage(background_Tag,0,0,Canvas.width, Canvas.height);

}

function upload_rover(){

    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height)

}