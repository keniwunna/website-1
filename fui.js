// spin-off by Madeliv (@Madeliv) 
// https://www.khanacademy.org/profile/Madeliv/programs
// based on a beautiful program by arecchan2.0 @arecchan 
// https://www.khanacademy.org/profile/arecchan/programs

var xPositions = [235,210,300,273,250,320,294,220,249,190,200,312,228,195,201,301,310,276,236,248,250,165,175,184,211,229,222,232,260,293];
var yPositions = [0,-350,-200,-250,-400,-300,-100,-180,-275,-50,-305,-426,-340,-180,-10,-408,-5,-151,-320,-92,-180,-230,-219,-505,-380,-430,-434,-400,-376,-308];
    
    draw = function() {
        
    background(199, 218, 219);
    fill(219, 219, 219);
    arc(530,319,800,200,180,360);
    fill(247, 247, 247);
    arc(43,363,800,200,180,360);
    fill(255, 255, 255);
    arc(515,394,800,200,180,360);
    rect(150,314,200,300);

    
        for (var i = 0; i < xPositions.length; i++) {
            noStroke();
            fill(255, 255, 255);
            ellipse(xPositions[i], yPositions[i], 5, 5);
            if(yPositions[i] > 335) {
                yPositions[i] = random(-230,0);
                xPositions[i] = random(160,325);
            }
            yPositions[i] += 3;
        }
        
    //windows and walls
    var windowX=145;
    var windowY=75;
    
    fill(136, 195, 212);
    rect(0,0,160,400);
    rect(325,0,175,400);
    rect(0,330,400,100);
    rect(0,0,400,90);
    
    fill(199, 161, 131);
    rect(windowX-2,windowY-2,19,274);
    rect(windowX-2,windowY-2,195,19);
    rect(windowX-2,windowY+253,195,19);
    rect(windowX+178,windowY-2,19,274);
    rect(windowX,windowY+129,195,17);
    
    fill(112, 166, 181);
    rect(windowX,80,15,265);
    rect(windowX,75,195,15);
    rect(windowX,330,195,15);
    rect(windowX+180,80,15,265);
    rect(windowX,205,195,15);
    
    fill(181, 152, 102);
    quad(windowX,346,windowX+195,346,windowX+205,355,windowX-10,355);
    fill(207, 174, 116);
    rect(windowX-10,355,215,10);
    fill(181, 152, 102);
    rect(windowX+30,365,10,15);
    rect(windowX+155,365,10,15);
    fill(161, 161, 161);
    rect(windowX+90,200,12,5);
    fill(138, 138, 138);
    rect(windowX+90,200,5,5);
    
    
    //curtain
    fill(148, 148, 148);
    rect(130,50,230,10);
    stroke(201, 189, 189);
    strokeWeight(1.1);
    line(150,53,340,53);
    noStroke();
    fill(148, 148, 148);
    ellipse(130,55,25,25);
    ellipse(360,55,25,25);
    fill(36, 110, 130);
    rect(145,55,203,30);
    for(var curtainX2=165;curtainX2<350;curtainX2+=40){
        noFill();
        stroke(32, 102, 120);
        strokeWeight(25);
        arc(curtainX2,142,100,99,250,290);
        noStroke();
    }
    for(var curtainX=143;curtainX<347;curtainX+=40){
        fill(36, 110, 130);
        rect(curtainX,50,5,10);
        fill(36, 110, 130);
        arc(curtainX,55,100,99,70,110);
        
    }
      var Madeliv= getImage("creatures/Winston");
   image(Madeliv,136,301,58,59);
   
    var Madeliv= getImage("creatures/Hopper-Happy");
   image(Madeliv,250,301,59,59);
    
    //clock
    
    
    
    var clockPosX=50;
    var clockPosY=150;
    fill(0, 0, 0);
    ellipse(clockPosX,clockPosY,100,100);
    fill(255, 255, 255);
    ellipse(clockPosX,clockPosY,80,80);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(2);
    arc(clockPosX,clockPosY,90,90,0,360);
    noStroke();
    // spin-off by Madeliv (@Madeliv) 
// https://www.khanacademy.org/profile/Madeliv/programs
// based on a beautiful program by arecchan2.0 @arecchan 
// https://www.khanacademy.org/profile/arecchan/programs
    pushMatrix();
    fill(255, 255, 255);
    translate(clockPosX,clockPosY);
    fill(0, 0, 0);
    textAlign(CENTER,BASELINE);
    text("1",16,-24);
    text("2",28,-13);
    text("3",34,4);
    text("4",27,21);
    text("5",14,31);
    text("6",-1,35);
    text("7",-17,32);
    text("8",-29,21);
    text("9",-35,4);
    text("10",-29,-12);
    text("11",-17,-24);
    text("12",-1,-29);
    rotate(second()*6);
    rect(0,0,1.5,-35);
    popMatrix();
    
    pushMatrix();
    translate(clockPosX,clockPosY);
    
    rotate(minute()*6);
    rect(-1,0,2.5,-23);
    popMatrix();
    
    pushMatrix();
    translate(clockPosX,clockPosY);
    
    rotate(hour()*30);
    rect(-1,0,3.3,-18);
    popMatrix();
    
    fill(0, 0, 0);
    ellipse(clockPosX,clockPosY,3,3);
    
    if (yPositions>375){
        yPositions=(random(-300,0));
        yPositions+=5;
    }
    if (width!==400&&height!==400){
        throw{message:("See this program on: https://www    .khanacademy.org/hour-of-code/hi-wingstonsnowy-agin        /4915657294086144")};
    }
    var v = random(0,100);
    //chrismass speical
    /*fill(0, 100, 0);
    triangle(80,200,30,300,130,300);
    fill(100, 70, 0);
    rect(70,300,20,50);
    fill(140, 120, 0);
    rect(70,305,10,20,10);
    fill(70, 40, 0);
    quad(50,350,110,350,105,360,55,360);
    fill(79, 49, 0);
    quad(60,360,100,360,90,380,70,380);
    stroke(190, 190, 190);
    strokeWeight(15);
    line(70, 220, 90, 220);
    line(60, 240, 100, 240);
    line(50, 260, 110, 260);
    line(40, 280, 120, 280);
    stroke(160, 160, 160);
    strokeWeight(10);
    line(70, 220, 90, 220);
    line(60, 240, 100, 240);
    line(50, 260, 110, 260);
    line(40, 280, 120, 280);
    noStroke();
    fill(255, 0, 0);
    ellipse(60,280,20,20);
    ellipse(90,260,20,20);
    fill(0, 255, 0);
    ellipse(50,260,20,20);
    ellipse(70,240,20,20);
    fill(0, 0, 255);
    ellipse(90,280,20,20);
    ellipse(90,220,20,20);
    fill(255, 255, 0);
    ellipse(80,200,30,30);
    fill(255, 255, 0,200);
    ellipse(80,200,35,35);
    fill(255, 255, 0, 100);
    ellipse(80,200,40,40);*/
    
    //Halloween special
    /*fill(0, 100, 0);
    rect(70,300,20,40,30);
    fill(255, 100, 0);
    ellipse(80,350,50,80);
    ellipse(60,350,45,70);
    ellipse(100,350,45,70);
    fill(0, 0, 0);
    if(v>60&&v<70){
        fill(255, 255, 0);
    }
    if(v>70&&v<80){
        fill(255, 50, 0);
    }
    if(v>80){
        fill(255, 0, 0);
    }
    arc(65,335,20,20,50,230);
    arc(95,335,20,20,-50,130);
    arc(80,370,40,20,-180,0);*/
    };
