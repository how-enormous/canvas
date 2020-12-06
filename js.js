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
var dx1=2.5;
var dy1=1.8;
var dx2=2.5;
var dy2=2;
var dis = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
function onTimeout1(){
     dis = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
    if(x1+2>=350||x1+2<=50||dis<=10000)
    dx1=-dx1;
    if(y1+2>=350||y1+2<=50||dis<=10000)
    dy1=-dy1;
    x1+=dx1;
    y1+=dy1;
    ctx.clearRect(0,0,400,400)
    ctx.beginPath();
    ctx.arc(x1,y1,50,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fillStyle='#ff04ff';
    ctx.fill();
    onTimeout2();
};function onTimeout2(){
    
    if(x2+2>=350||x2+2<=50||dis<=10000)
    dx2=-dx2;
    if(y2+2>=350||y2+2<=50||dis<=10000)
    dy2=-dy2;
    x2+=dx2;
    y2+=dy2;
    ctx.beginPath();
    ctx.arc(x2,y2,50,0,Math.PI*2,false);
    ctx.stroke();
    ctx.fillStyle='#00a4cf';
    ctx.fill();
};
var x1=50,y1=100;
var x2=170,y2=300;
var timer = setInterval(onTimeout1,50);
