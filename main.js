 canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_img=["Img-1.jpg", "Img-2.jpg", "Img-3.jpg", "Img-4.png"];
random_number=Math.floor(Math.random()*4);
console.log (random_number);
rover_width = 100;
rover_height= 90;
rover_x = 10;
rover_y = 10;
background_image = mars_img[random_number];
rover_image = "rover.png";
function add() {
    background_img = new Image();
    background_img.onload=uploadbackground;
    background_img.src=background_image;
    rover_img = new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed= e.keyCode;
    console.log (keypressed);
    if (keypressed=="38") {
        up();
        console.log ("up");
    }
    if (keypressed=="40") {
        down();
        console.log ("down");
    }
    if (keypressed=="37") {
        left();
        console.log ("left");
    }
    if (keypressed=="39") {
        right();
        console.log ("right");
    }
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y - 10;
        console.log ("When up arrow is pressed, x=  " +rover_x +"y=  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y + 10;
        console.log ("When down arrow is pressed, x=  " +rover_x +"y=  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if (rover_x>=0) {
        rover_x=rover_x - 10;
        console.log ("When left arrow is pressed, x=  " +rover_x +"y=  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if (rover_x<=700) {
        rover_x=rover_x + 10;
        console.log ("When right arrow is pressed, x=  " +rover_x +"y=  " + rover_y);
        uploadbackground();
        uploadrover();
    }
}