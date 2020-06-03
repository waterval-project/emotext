var imageData

var wi=80
var he=98
//wi = $('#accion').outerWidth();
//he = $('.titulo').outerHeight();
var wit=wi
var het=he 

//var lefttop = $('#indice').offset();{}
var lefttop ={left:10,top:-2210}
var cnv
var rcol1 = 155;
 var rcol2 = 205;
 var rmin = 0.5;
 var rmax = 1;
 var myvivid = {
    ini: Math.random() * Math.PI,
    n: he,
    frec: 1,
    neutro: [1, 1],
    r1: [rcol1, rmin, rmax],
    g1: [rcol1, rmin, rmax],
    b1: [rcol1, rmin, rmax],
    r2: [rcol2, rmin, rmax],
    g2: [rcol2, rmin, rmax],
    b2: [rcol2, rmin, rmax]
  }
  var myvividcc = new RainbowGradient(myvivid)

function setup() {
  cnv = createCanvas(wi, he);
          cnv.style('z-index', '-1');
          cnv.position(lefttop.left, lefttop.top);
  imageData = createImage(wi, he);
         noStroke()
          var gr
         resizeCanvas(wit, het);
         //imagepp()
          //var idiv = '#accion' 
            //wit = 34; //$(idiv).outerWidth();
            //het = $(idiv).outerHeight();
           //s.style('background-image', "url('" + imageData.canvas.toDataURL() + "')")
            //s.style('background-repeat', 'repeat')
          //$('#accion').css('background-size', wi+'px '+he+'px')
            // $('#accion').css('background-repeat','repeat')
           //$('#accion').css('background-image', "url('" + imageData.canvas.toDataURL() + "')")
          //$('body').css('background-image', "url('" + imageData.canvas.toDataURL() + "')")
         noLoop()
  
}

function draw() {
         
}
function drawtexture(co1,co2) {
 /* myvivid.r1[0]= int(random(0,255))
  myvivid.g1[0]= int(random(0,255))
  myvivid.b1[0]= int(random(0,255))
  myvivid.r2[0]= int(random(0,255))
  myvivid.g2[0]= int(random(0,255))
  myvivid.b2[0]= int(random(0,255))*/
  myvivid.r1[0]= co1[0]
  myvivid.g1[0]= co1[1]
  myvivid.b1[0]= co1[2]
  myvivid.r2[0]= co2[0]
  myvivid.g2[0]= co2[1]
  myvivid.b2[0]= co2[2]
  
   myvivid.r2[0]= int(random(0,255))
  myvivid.g2[0]= int(random(0,255))
  myvivid.b2[0]= int(random(0,255))
  myvivid.frec= int(random(1,100))
  myvivid.ini=random() * PI
  myvivid.neutro[0]=random()
  myvivid.n=int(random(2,200))
  myvividcc = new RainbowGradient(myvivid)
  imagepp()
  //$('#accion').css('background-size','auto')
 //$('#accion').css('background-size','cover')
  //$('#accion').css('background-size', wi+'px '+he+'px')
  //$('#accion').css('background-repeat','repeat')
  //$('#accion').css('background-image', "url('" + imageData.canvas.toDataURL() + "')")
  //$('#texto').append("\n"+'foto.push("'+imageData.canvas.toDataURL()+'");')
  //$('#accion').append('<img src="'+imageData.canvas.toDataURL()+'">')
  foto.push(imageData.canvas.toDataURL())
}


function drawtexture_1() {
  myvivid.g2[0]= int(random(100,255))
  myvivid.b2[0]= int(random(100,255))
  myvividcc = new RainbowGradient(myvivid)
   imagepp()

//$('#accion').css('background-size','auto')
  //$('#accion').css('background-size','cover')
  $('#accion').css('background-size', wi+'px '+he+'px')
  $('#accion').css('background-repeat','repeat')
  $('#accion').css('background-image', "url('" + imageData.canvas.toDataURL() + "')")
         
         
}

function imagepp(){
for (let i = 0; i < wit; i++) {
  // if(i%2==0){myvividcc.RGB()}
   myvividcc.RGB()
         for (let j = 0; j < het; j++) {
              //if(i%2==0 && j%7==0){myvividcc.RGB()}
              myvividcc.RGB()
              gr = myvividcc.color
              //let cl = p.color(claro.max - j * cj, claro.max - 10 - (i * ci), claro.max, 250);
              let cl = color(gr[0], gr[1], gr[2], 250);
              imageData.set(i, j, cl);
            }
          }
       imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}
