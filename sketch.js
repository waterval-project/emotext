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
/*
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
*/
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
  var contpc=palcont
  if(numero>=1){
  for(var a=0;a<numero;a++){
    myvividArr.push( pal[contpc] )
    contpc++
    if(contpc>=pal.length){contpc=0}
  }  
    if(numero>1){
    imageppH(numero)
    }
    if(numero==1){
      myvividArr=[]
       for(var a=0;a<4;a++){
    myvividArr.push( pal[contpc] )
    contpc++
    if(contpc>=pal.length){contpc=0}
  }  
      imageppR(4)
    }
  
  }
    
  
  //imageppH(numero)
  //imageppW(numero)
  
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
  var contmy=0
  var gr = myvividArr[contmy]

  for (let i = 0; i < wit; i++) {
     if(arW[contW]==i){
       gr =myvividArr[contmy]
       contmy++
       if(contmy>=myvividArr.length){contmy=0}
       contW++
       if(contW>arW.length){contW=0}
    }
   
    for (let j = 0; j < het; j++) {
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}

function imageppW(n) {
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
  var contmy=0
  var gr = myvividArr[contmy]

  for (let i = 0; i < wit; i++) {
     if(arW[contW]==i){
       gr =myvividArr[contmy]
       contmy++
       if(contmy>=myvividArr.length){contmy=0}
       contW++
       if(contW>arW.length){contW=0}
    }
   
    for (let j = 0; j < het; j++) {
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

 
   var contmy=0
  for (let i = 0; i < wit; i++) {
  
       
    for (let j = 0; j < het; j++) {
  
     
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

