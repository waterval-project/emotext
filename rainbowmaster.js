var imageData

var wi = 80
var he = 98
//wi = $('#accion').outerWidth();
//he = $('.titulo').outerHeight();
var wit = wi
var het = he

//var lefttop = $('#indice').offset();{}
var lefttop = {
  left: 10,
  top: -2210
}
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
var myvividArr=[]
function setup() {
  cnv = createCanvas(wi, he);
  // cnv.id('texturecanvas')
  cnv.parent('textureCanvas');
  cnv.style('z-index', '-1');
  cnv.position(lefttop.left, lefttop.top);
  imageData = createImage(wi, he);
  noStroke()
  var gr
  resizeCanvas(wit, het);
    noLoop()

}

function draw() {

}

function drawtexture(co1, co2,numero,pal,palcont) {
  myvividArr=[]
  /* myvivid.r1[0]= int(random(0,255))
   myvivid.g1[0]= int(random(0,255))
   myvivid.b1[0]= int(random(0,255))
   myvivid.r2[0]= int(random(0,255))
   myvivid.g2[0]= int(random(0,255))
   myvivid.b2[0]= int(random(0,255))*/
  myvivid.r1[0] = co1[0]
  myvivid.g1[0] = co1[1]
  myvivid.b1[0] = co1[2]
  myvivid.r2[0] = co1[0]
  myvivid.g2[0] = co1[1]
  myvivid.b2[0] = co1[2]

  //myvivid.r2[0] = int(random(0, 255))
  //myvivid.g2[0] = int(random(0, 255))
  //myvivid.b2[0] = int(random(0, 255))
  myvivid.frec = 1;//int(random(1, 100))
  myvivid.ini = random() * PI
  myvivid.neutro[0] = 1;//random()
  myvivid.n =numero;//int(random(2, 200))
  myvividcc = new RainbowGradient(myvivid)
  //rcolor = new RainbowGradient(paleta[1].prop)
  var contpc=palcont
  for(var a=0;a<numero;a++){
    myvividArr.push( pal[contpc] )
    contpc++
    if(contpc>=pal.length){contpc=0}
  }
  //myvividArr= myvividcc.allColors(numero)
  //imageppH(numero)
  //imageppW(numero)
  imageppR(numero)
  //$('#texto').append("\n"+'foto.push("'+imageData.canvas.toDataURL()+'");')
  //$('#accion').append('<img src="'+imageData.canvas.toDataURL()+'">')
  foto.push(imageData.canvas.toDataURL())
}




function imageppH(n) {
  var arH=[]
  var arW=[]
  var voy=0
  for(var a=0;a<n;a++){
    arW.push(voy)
    voy+=int(wit/n);
  }
   for(var b=0;b<n;b++){
    arH.push(voy)
    voy+=int(het/n);
  }
  var contW=0
  var contH=0
   myvividcc.RGB()
   var gr = myvividcc.color
   var contmy=0
  for (let i = 0; i < wit; i++) {
    // if(i%2==0){myvividcc.RGB()}
     //if(int(i%(wit/3))==0){myvividcc.RGB()}
    // gr = myvividcc.color
    //myvividcc.RGB()
     if(arW[contW]==i){
       //myvividcc.RGB()
       //gr = myvividcc.color
       gr =myvividArr[contmy]
       contmy++
       if(contmy>=myvividArr.length){contmy=0}
       contW++
       if(contW>arW.length){contW=0}
    }
   
    for (let j = 0; j < het; j++) {
      //if(i%2==0 && j%7==0){myvividcc.RGB()}
      //if(int(j%(het/3))==0){myvividcc.RGB()}
     //myvividcc.RGB()
     //gr = myvividcc.color
   
   /* if(arH[contH]==j){
       myvividcc.RGB()
       gr = myvividcc.color
       contH++
       if(contH>arH.length){contH=0}
    }
      */
      //let cl = p.color(claro.max - j * cj, claro.max - 10 - (i * ci), claro.max, 250);
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}

function imageppW(n) {
 
  var arW=[]
  var voy=0
  var conc=int(het/n)
  for(var a=0;a<n;a++){
    arW.push(voy)
    voy+=conc
  }
 
  var contW=0

   myvividcc.RGB()
   var gr = myvividcc.color
  for (let i = 0; i < wit; i++) {
    
   contW=0
    for (let j = 0; j < het; j++) {
  
   //if(j==arW[contW]){
       myvividcc.RGB()
      gr = myvividcc.color
       contW++
       if(contW>arW.length ){contW=0}
    //}
      
      //let cl = p.color(claro.max - j * cj, claro.max - 10 - (i * ci), claro.max, 250);
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}


function imageppR(n) {
  var arH=[]
  var arW=[]
  var voy=0

   myvividcc.RGB()
   var gr = myvividcc.color
   var contmy=0
  for (let i = 0; i < wit; i++) {
   
       //myvividcc.RGB()
       //gr = myvividcc.color
       
    for (let j = 0; j < het; j++) {
  
       //myvividcc.RGB()
       //gr = myvividcc.color
      contmy=int(random(0,myvividArr.length-1))
      gr = myvividArr[contmy]
   
      //let cl = p.color(claro.max - j * cj, claro.max - 10 - (i * ci), claro.max, 250);
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}


function imagepp_01(n) {
  var arna=[]
  for(var a=0;a<n;a++){
    arna.push(int(wit/a))
  }
  var cont=0
  for (let i = 0; i < wit; i++) {
    // if(i%2==0){myvividcc.RGB()}
     //if(int(i%(wit/3))==0){myvividcc.RGB()}
    // gr = myvividcc.color
    //myvividcc.RGB()
    for (let j = 0; j < het; j++) {
      //if(i%2==0 && j%7==0){myvividcc.RGB()}
      //if(int(j%(het/3))==0){myvividcc.RGB()}
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

function drawtexture_1() {
  myvivid.g2[0] = int(random(100, 255))
  myvivid.b2[0] = int(random(100, 255))
  myvividcc = new RainbowGradient(myvivid)
  imagepp()

  //$('#accion').css('background-size','auto')
  //$('#accion').css('background-size','cover')
  $('#accion').css('background-size', wi + 'px ' + he + 'px')
  $('#accion').css('background-repeat', 'repeat')
  $('#accion').css('background-image', "url('" + imageData.canvas.toDataURL() + "')")


}
