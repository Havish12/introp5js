function setup()
{
    canvas = createCanvas(640,440);
    canvas.position(320,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(3, 200, 9);
    stroke(0, 128, 0);
    circle(40, 50, 70); 
    circle(600, 50, 70); 
    circle(40, 50, 70); 

    var canvas = document.getElementById('circle');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot()
{
    save('havish.png');
}





    