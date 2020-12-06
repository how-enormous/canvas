var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function drawEllipse(x,y,w,h){
    var k = 0.55228475;
    var ox = (w/2)*k;
    var oy = (h/2)*k;
    var xe = x + w;
    var ye = y + h;
    var xm = x + w/2;
    var ym = y + h/2;
    ctx.beginPath();
    ctx.moveTo(x,ym);
    ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);
    ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);
    ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);
    ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);
    ctx.stroke();
}
function car(wheel,width,height){
    this.wheel = wheel;
    this.width = width;
    this.height = height;
}
var dx=2.5;
var dy=1.8;
function onTimeout(){
    
    if(x+2>=350||x+2<=50)
    dx=-dx;
    if(y+2>=350||y+2<=50)
    dy=-dy;
    x+=dx;
    y+=dy;
    ctx.clearRect(0,0,400,400)
    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fillStyle='#ff04ff';
    ctx.fill();
};
var x=50,y=100;
var timer = setInterval(onTimeout,50);
