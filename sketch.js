var imageData

var wi = 30
var he = 148
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
//var myvividArr = []

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

function drawtexture(numero, pal, palcont, modo) {
  //resizeCanvas(40, 180);
  var myvividArr = []
  var contpc = palcont
  if (numero > 1) {
    //if (modo == 'w' || modo == 'h') {
    for (var a = 0; a < numero; a++) {
      myvividArr.push(pal[contpc])
      contpc++
      if (contpc >= pal.length) {
        contpc = 0
      }
    }
    if (numero > 1) {
      if (modo == 'w') {
        imageppW(myvividArr)
      }
      if (modo == 'h') {
        imageppH(myvividArr)
      }
      //console.log(numero)
    }
  }
  if (numero == 1) {
    if (modo == 'w') {
     
      //imageData = createImage(180, 40);
      //resizeCanvas(180, 40);
    }
    if (modo == 'h') {
      //resizeCanvas(40, 180);
    }
    myvividArr = []
    for (var a = 0; a < 7; a++) {
      myvividArr.push(pal[contpc])
      contpc++
      if (contpc >= pal.length) {
        contpc = 0
      }
    }
    imageppR(myvividArr)
  }


  //$('#texto').append("\n"+'foto.push("'+imageData.canvas.toDataURL()+'");')
  //$('#accion').append('<img src="'+imageData.canvas.toDataURL()+'">')
  //foto.push(imageData.canvas.toDataURL())
  return imageData.canvas.toDataURL()
}






function imageppH(mycArr) {
  var arW = []
  var voy = 0
  var n = mycArr.length
  for (var a = 0; a < n; a++) {
    arW.push(voy)
    voy += int(width / n);
  }
  var contW = 0
  var contmy = 0
  var gr = mycArr[contmy]
  for (let i = 0; i < wit; i++) {
    if (arW[contW] == i) {
      gr = mycArr[contmy]
      contmy++
      if (contmy >= mycArr.length) {
        contmy = 0
      }
      contW++
      if (contW >= arW.length) {
        contW = 0
      }
    }
    for (let j = 0; j < het; j++) {
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}

function imageppW(mycArr) {
  var arH = []
  var voy = 0
  var n = mycArr.length
  var modh = int(height / n);
  for (var b = 0; b < n; b++) {
    arH.push(voy)
    voy += modh;
  }
  var contW = 0
  var contH = 0
  var contmy = 0
  var gr = mycArr[contmy]
  // console.log(myvividArr.length+' linea')
  for (let i = 0; i < wit; i++) {
    contmy = 0
    contH = 0
    for (let j = 0; j < het; j++) {
      if (j == arH[contH]) {
        gr = mycArr[contmy]
        contmy++
        if (contmy >= mycArr.length) {
          contmy = 0
        }
        contH++
        if (contH > arH.length) {
          contH = 0
        }
      }
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}

function imageppR(mycArr) {
  var arH = []
  var arW = []
  var voy = 0
  var contmy = 0
  for (let i = 0; i < wit; i++) {
    for (let j = 0; j < het; j++) {
      contmy = int(random(0, mycArr.length - 1))
      gr = mycArr[contmy]
      //let cl = p.color(claro.max - j * cj, claro.max - 10 - (i * ci), claro.max, 250);
      let cl = color(gr[0], gr[1], gr[2], 250);
      imageData.set(i, j, cl);
    }
  }
  imageData.updatePixels();
  image(imageData, 0, 0, wit, het)
}

function drawtexture_03(numero, pal, palcont, modo) {
  myvividArr = []
  var contpc = palcont
  if (numero >= 1) {
    for (var a = 0; a < numero; a++) {
      myvividArr.push(pal[contpc])
      contpc++
      if (contpc >= pal.length) {
        contpc = 0
      }
    }
    if (numero > 1) {
      if (modo == 'w') {
        imageppW(numero)
      }
      if (modo == 'h') {
        imageppH(numero)
      }
      //console.log(numero)
    }
    if (numero == 1) {
      myvividArr = []
      for (var a = 0; a < 5; a++) {
        myvividArr.push(pal[contpc])
        contpc++
        if (contpc >= pal.length) {
          contpc = 0
        }
      }
      imageppR(4)
    }

  }
}
