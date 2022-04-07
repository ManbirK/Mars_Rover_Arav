canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 110;
rover_height = 77;


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 200;
rover_y = 300;

//Create "add()" function
 function add(){
     background_Tag = new Image(); //defining a variable with a new image
     background_Tag.onload = uploadBackground; // setting a function, onloading this variable
     background_Tag.src = background_image; // load image



     rover_Tag = new Image();  //defining a variable with a new image
     rover_Tag.onload = uploadRover;  // setting a function, onloading this variable
     rover_Tag.src = rover_image;   // load image


 }
	                                     
	                                     
	                                     

                                         
	                                    
	                                   
//Create "uploadBackground()" function.
 function uploadBackground(){
     //Draw image of background
     ctx.drawImage(background_Tag, 0, 0, canvas.width, canvas.height); // 2dContext of canvas.drawImage(frame,x,y,Width,Height);
 }   
 
 //Create "uploadrover()" function.
 function uploadRover(){
     
    //Draw image of rover

     ctx.drawImage(rover_Tag, rover_x, rover_y, rover_width, rover_height);
 }                          
                                         




window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if (keyPressed == "38"){
            console.log(" Up arrow pressed");
            up();
        }
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if (keyPressed == "40"){
         console.log(" Down arrow pressed");
         down();
     }

      //Write code if keypressed is left. ASCII value of "left" arrow is 37.
     if (keyPressed == "37"){
        console.log(" Left arrow pressed");
        left();
     }

      //Write code if keypressed is right. ASCII value of "right" arrow is 39.
     if (keyPressed == "39"){
         console.log(" Right arrow pressed");
         right();
     }

    
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}


function up(){
        if (rover_y > 10){
        rover_y -= 10; // rover_y = rover_y -10;
        console.log(rover_y);
        uploadBackground();
        uploadRover();
        }
}

function down(){
	if (rover_y < 513){
        rover_y += 10;
        console.log(rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
	
    if (rover_x < 680){
        rover_x += 10;
        console.log(rover_x);
        uploadBackground();
        uploadRover();
    }
}

function left(){
	if (rover_x > 10){
        rover_x -= 10;
        console.log(rover_x);
        uploadBackground();
        uploadRover();
    }
}



