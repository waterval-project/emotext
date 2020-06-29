////////////  SKETCH

var imageData
var wi = 30
var he = 148
//wi = $('#accion').outerWidth();
//he = $('.titulo').outerHeight();
var wit = wi
var het = he
var lefttop = {
  left: 10,
  top: -2210
}


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

function draw() {}

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
  return imageData.canvas.toDataURL('image/jpeg')
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


/////////////  PALETA
var inipaleta = []
inipaleta[0] = {
  name: 'random',
  icon: ':-p',
  prop: {
    ini: 0,
    n: 36,
    frec: 15,
    neutro: [1, 1],
    r1: [255, 0.1, 1],
    g1: [255, 0.1, 1],
    b1: [255, 0.1, 1],
    r2: [255, 0.1, 1],
    g2: [255, 0.1, 1],
    b2: [255, 0.1, 1]
  }
}
inipaleta[1] = {
  name: 'vivid',
  icon: ':-)',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [255, 0.1, 1],
    g1: [255, 0.1, 1],
    b1: [255, 0.1, 1],
    r2: [255, 0.1, 1],
    g2: [255, 0.1, 1],
    b2: [255, 0.1, 1]
  }
}
inipaleta[2] = {
  name: 'dark',
  icon: ':-(',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [90, 0.1, 0.5],
    g1: [90, 0.1, 0.5],
    b1: [90, 0.1, 0.5],
    r2: [90, 0.1, 0.5],
    g2: [90, 0.1, 0.5],
    b2: [90, 0.1, 0.5]
  }
}
inipaleta[3] = {
  name: 'bright',
  icon: ':-D',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [255, 0.7, 1],
    g1: [255, 0.7, 1],
    b1: [255, 0.7, 1],
    r2: [255, 0.7, 1],
    g2: [255, 0.7, 1],
    b2: [255, 0.7, 1]
  }
}
inipaleta[4] = {
  name: 'grey',
  icon: ':-|',
  prop: {
    ini: 0,
    n: 50,
    frec: 5,
    neutro: [0, 0],
    r1: [255, 0.1, 1],
    g1: [255, 0.1, 1],
    b1: [255, 0.1, 1],
    r2: [255, 0.1, 1],
    g2: [255, 0.1, 1],
    b2: [255, 0.1, 1]
  }
}
inipaleta[5] = {
  name: 'red',
  icon: ':-*',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [195, 0.4, 1],
    g1: [40, 0.4, 1],
    b1: [40, 0.4, 1],
    r2: [255, 0.4, 1],
    g2: [0, 0.4, 1],
    b2: [0, 0.4, 1]
  }
}
inipaleta[6] = {
  name: 'green',
  icon: ';-)',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [40, 0.4, 1],
    g1: [50, 0.4, 1],
    b1: [40, 0.4, 1],
    r2: [0, 0.4, 1],
    g2: [255, 0.4, 1],
    b2: [0, 0.4, 1]
  }
}
inipaleta[7] = {
  name: 'blue',
  icon: ';-(',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [40, 0.7, 1],
    g1: [40, 0.7, 1],
    b1: [150, 0.7, 1],
    r2: [0, 0.7, 1],
    g2: [0, 0.7, 1],
    b2: [255, 0.7, 1]
  }
}
inipaleta[8] = {
  name: 'cyan',
  icon: 'o:-)',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [0, 0.9, 1],
    g1: [190, 0.9, 1],
    b1: [190, 0.9, 1],
    r2: [0, 0.9, 1],
    g2: [255, 0.9, 1],
    b2: [255, 0.9, 1]
  }
}
inipaleta[9] = {
  name: 'magenta',
  icon: '8-)',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [150, 0.7, 1],
    g1: [20, 0.7, 1],
    b1: [150, 0.7, 1],
    r2: [255, 0.7, 1],
    g2: [0, 0.7, 1],
    b2: [255, 0.7, 1]
  }
}
inipaleta[10] = {
  name: 'yellow',
  icon: 'xD',
  prop: {
    ini: Math.random() * Math.PI,
    n: 36,
    frec: 2,
    neutro: [1, 1],
    r1: [190, 0.7, 1],
    g1: [190, 0.7, 1],
    b1: [0, 0.7, 1],
    r2: [255, 0.7, 1],
    g2: [255, 0.7, 1],
    b2: [0, 0.7, 1]
  }
}
inipaleta[11] = {
  name: 'brown',
  icon: 'x(',
  prop: {
    ini: 0,
    n: 36,
    frec: 3,
    neutro: [1, 1],
    r1: [65, 0.7, 1],
    g1: [100, 0.7, 1],
    b1: [0, 0.7, 1],
    r2: [50, 0.7, 1],
    g2: [85, 0.7, 1],
    b2: [0, 0.7, 1]
  }
}
inipaleta[12] = {
  name: 'dun',
  icon: '|-)',
  prop: {
    ini: 0,
    n: 36,
    frec: 2,
    neutro: [0.2, 0.3],
    r1: [45, 0, 0.5],
    g1: [45, 0, 0.5],
    b1: [45, 0, 0.5],
    r2: [185, 0.5, 1],
    g2: [185, 0.5, 1],
    b2: [185, 0.5, 1]
  }
}

/*var iconums=[]
for(var a=0;a<inipaleta.length;a++){
iconums.push(inipaleta[a].icon)
}
//console.log(iconums)
*/
var iconums = [
  ":-p",
  ":-)",
  ":-(",
  ":-D",
  ":-|",
  ":-*",
  ";-)",
  ";-(",
  "o:-)",
  "8-)",
  "xD",
  "x(",
  "|-)"
]

//////////////// RAINBOW

class RainbowGradient {
  constructor(s) {
    this.r1 = s.r1
    this.g1 = s.g1
    this.b1 = s.b1
    this.r2 = s.r2
    this.g2 = s.g2
    this.b2 = s.b2
    this.r = s.r1
    this.g = s.g1
    this.b = s.b1
    this.n = s.n
    this.neutro = s.neutro
    this.listcolor = []
    this.ini = s.ini
    this.ini3 = (Math.PI * 2 * s.neutro[0]) / 3
    this.T1 = s.ini
    this.T2 = s.ini + this.ini3
    this.T3 = s.ini + this.ini3 * 2
    this.mod = 1 / (s.n * s.frec)
    this.modsin = Math.PI / s.n
    this.modColor = (Math.PI * 2 * s.frec) / s.n


    this.R = 0
    this.G = 0
    this.B = 0
    this.inc = 0
    this.incsin = 0
    this.countsin = 0
    this.count = 0
    this.color = [0, 0, 0]
    //console.log(4)
  }
  updateNeutro() {
    var ntr = lerpe(this.neutro[1], this.neutro[0], this.count)
    this.modColor = ntr
  }
  allColors(n) {
    this.listcolor = []
    var moda = 1 / n
    var mmcont = 0
    for (var a = 0; a < n; a++) {
      this.r[0] = parseInt(lerpe(this.r1[0], this.r2[0], moda * a))
      this.g[0] = parseInt(lerpe(this.g1[0], this.g2[0], moda * a))
      this.b[0] = parseInt(lerpe(this.b1[0], this.b2[0], moda * a))
      this.RGB()
      this.listcolor[a] = this.color
    }
    //console.log(this.listcolor.length)
    return this.listcolor

  }
  RGB() {
    var r = mape(Math.sin(this.T1), -1, 1, this.r[0] * this.r[1], this.r[0] * this.r[2])
    //var r = Math.sin(this.T1)*this.r[0]
    //var dr = (this.r[0] - r) * 1
    this.R = parseInt(r); // - dr
    //this.T1 += TWO_PI / this.mR
    this.T1 += this.modColor

    var g = mape(Math.sin(this.T2), -1, 1, this.g[0] * this.g[1], this.g[0] * this.g[2])
    //var g=Math.sin(this.T2)*this.g[0]
    //var dg = (this.g[0] - g) * 1
    this.G = parseInt(g); //- dg
    //this.T2 += TWO_PI / this.mG
    this.T2 += this.modColor

    var b = mape(Math.sin(this.T3), -1, 1, this.b[0] * this.b[1], this.b[0] * this.b[2])
    //var b =Math.sin(this.T3)*this.b[0]
    //var db = (this.b[0] - b) * 1
    this.B = parseInt(b); //- db
    //this.T3 += TWO_PI / this.mB
    this.T3 += this.modColor

    this.inc += this.mod;
    this.incsin += this.modsin
    this.countsin = mape(Math.sin(this.incsin), -1, 1, 0, 1)
    if (this.inc > 1) {
      this.reset()
    }
    this.count = this.inc
    this.color = [this.R, this.G, this.B]

  }
  reset() {

    if (this.neutro[0] <= 0.9) {
      this.neutro[0] += 0.0006
      this.ini -= 0.01
      this.r[0] += 0.1
      this.g[0] += 0.1
      this.b[0] += 0.1
    }

    this.ini3 = (Math.PI * 2 * this.neutro[0]) / 3
    this.T1 = this.ini
    this.T2 = this.ini + this.ini3
    this.T3 = this.ini + this.ini3 * 2
    this.count = 0
    this.inc = 0;
    this.incsin = 0;

  }

}



/////////////// RAINBOWMASTER


var nemoji = 1
var nemoji1 = 1
var nemoji0 = 1
var DEFAULTalign = 'center'; //  - _ . o   left rigth center justify
var DEFAULTparagraph = 12; // 0 -1 12  X 0 O (square, none, rounded)
var FONTsize = ['s3', 's2', 's1', 'l1', 'l2', 'l3'] //smalll large
var FONTweightStyle = ['ii', 'bb'] // italic bold
var FONTfamily = ['arial', 'times', 'verdana', 'calibri', 'courier'] // arial times verdana calibri courier ffOther
var TEXTdecoration = ['ti', 'uu', 'oo', 'uudd', 'oodd', 'uuww', 'ooww'] // line- underline, overline, underline dotted, overline dotted, underline wavy, underline wavy
var anchodivPage = 890; // 
var altodivPage = DEFAULTpageHeight; // 600
var hcontain = -1
var H = []
H[0] = {
  bg: [],
  color: [],
  height: DEFAULTdivHeight
}
var V = []
var FONTmix = [{
    d: ["ui", "iu"],
    r: "font-style:italic;text-decoration:underline;"
  },
  {
    d: ["bu", "ub"],
    r: "text-decoration:underline;font-weight:bold;"
  },
  {
    d: ["bi", "ib"],
    r: "font-style:italic;font-weight:bold;"
  },
  {
    d: ["biu", "bui", "ibu", "iub", "ubi", "uib"],
    r: "text-decoration:underline;font-style:italic;font-weight:bold;"
  }
]
var GRADIENTsymbols = ['..', '.-', '.o', '.,', '._', '.O']; // harmonic linear up,  harmonic linear left, harmonic radial center, random linear up, random linear left, random radial center

var transparente = 0.7
var rcol1 = 255
var rcol2 = 255
var rmin = 0.1
var rmax = 1
var setgrL = {
  ini: Math.random() * Math.PI,
  n: 28,
  frec: 1,
  neutro: [0.2, 0.2],
  r1: [rcol1, rmin, rmax],
  g1: [rcol1, rmin, rmax],
  b1: [rcol1, rmin, rmax],
  r2: [rcol2, rmin, rmax],
  g2: [rcol2, rmin, rmax],
  b2: [rcol2, rmin, rmax]
}
var listcolor = []
var urlImages = 'https://waterval-project.github.io/emotext/'
//var urlImages = 'https://editor.p5js.org/josepssv/sketches/2k5JY5T1j'

var DEFAULTgroundpage = ''

var ibg = []
ibg[0] = 'https://i.imgur.com/WoLnZ6G.png'; // random :-p
ibg[1] = 'https://i.imgur.com/By2c34i.jpeg'; // vivid :-)
ibg[2] = 'https://i.imgur.com/kpJmvUJ.jpeg'; // dark :-(
ibg[3] = 'https://i.imgur.com/t9lZsTc.png'; // bright :-D
//ibg[4] = 'https://i.imgur.com/FWlWwex.png'; // grey :-|
ibg[4] = 'https://img.freepik.com/free-vector/metal-texture-background_46250-146.jpg?size=626&ext=jpg'; // grey :-|
ibg[5] = 'https://i.imgur.com/qLbHVV5.jpg'; // red :-*
ibg[6] = 'https://i.imgur.com/1AUjiNk.jpg'; // green ;-)
ibg[7] = 'https://i.imgur.com/UqBO1u5.jpeg'; // blue ;-(
ibg[8] = 'https://i.imgur.com/921uz.jpeg'; // cyan o:-)
ibg[9] = 'https://i.imgur.com/mKTQnM3.jpeg'; // magenta 8-)
ibg[10] = 'https://s7d2.scene7.com/is/image/TWCNews/Hot_sun'; // yellow xD
ibg[11] = 'https://i.imgur.com/IPcmVFn.jpeg'; // brown x(
ibg[12] = 'https://i.imgur.com/xEEFhLw.jpg'; // dun |-)



var sticker = []
sticker[0] = 'https://upload.wikimedia.org/wikipedia/commons/3/31/Pentagonalicositetrahedronccw.gif'
var borderi = []
borderi[0] = urlImages + 'border2.png'
borderi[1] = urlImages + 'border2.png'





function otrocolorOne() {
  var rgb = []
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
    (parseInt(rgb[1]) * 587) +
    (parseInt(rgb[2]) * 114)) / 1000);
  var r = []
  r[1] = (brightness > 125) ? 'black' : 'white';
  r[0] = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ', ' + transparente + ')';
  return r

}


function otrocolor(rgb) {
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
    (parseInt(rgb[1]) * 587) +
    (parseInt(rgb[2]) * 114)) / 1000);
  var r = []
  r[1] = (brightness > 125) ? 'black' : 'white';
  r[0] = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ', ' + transparente + ')';
  return r

}

function contrastext(rgb) {
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
    (parseInt(rgb[1]) * 587) +
    (parseInt(rgb[2]) * 114)) / 1000);

  var r = (brightness > 125) ? 'black' : 'white';
  return r

}

function replaceTxtNotInA(html, regex, replace) {

  //just to make the txt parse easily, without (start) or (ends) issue
  html = '>' + html + '<';

  //parse txt between > and < but not follow with</a
  html = html.replace(/>([^<>]+)(?!<\/a)</g, function(match, txt) {

    //now replace the txt
    return '>' + txt.replace(regex, replace) + '<';
  });

  //remove the head > and tail <
  return html.substring(1, html.length - 1);
}

function linkify(html, c) {

  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&amp;&@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;&@#\/%=~_|])/ig;
  html = replaceTxtNotInA(html, exp, '<a href="$1" target="_blank" style="color:' + c + ';">$1</a>');

  //URLs starting with "www."
  var exp2 = /\b(www\.[\S]+)\b/gi;
  html = replaceTxtNotInA(html, exp2, '<a href="http://$1" target="_blank" style="color:' + c + ';">$1</a>');

  return html;
}

function linkify_01(inputText, c) {
  var replacedText, replacePattern1, replacePattern2, replacePattern3;

  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank" style="color:' + c + ';">$1</a>');

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank" style="color:' + c + ';">$2</a>');

  return replacedText;
}





function lerpe(start, end, amt) {
  return (1 - amt) * start + amt * end
}

const mape = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}




function esmayuscula(strings) {
  var n = strings.length - 2
  var i = 0;
  var j = 0
  var character = '';
  while (i <= strings.length) {
    character = strings.charAt(i);
    if (!isNaN(character * 1)) {
      //alert('character is numeric');
    } else {
      if (character == character.toUpperCase()) {
        j++;
      }
      if (character == character.toLowerCase()) {
        //alert ('lower case true');
      }
    }
    i++;
  }
  //if (j >= n - 8 && n > 6) {
  var ss = strings.replace(/ /g, '')
  var ns = strings.split(' ')
  if (j >= ns.length && ss.length > 0) {
    return true
  } else {
    return false
  }

}

function otrocolorC() {
  var c = []
  c[0] = Math.floor((Math.random() * 256));
  c[1] = Math.floor((Math.random() * 256));
  c[2] = Math.floor((Math.random() * 256));
  var r = []
  r[0] = "rgba(" + c[0] + "," + c[1] + "," + c[2] + +"," + transparente + ")";
  r[1] = "rgb(" + (255 - c[0]) + "," + (255 - c[1]) + "," + (255 - c[2]) + ")"
  return r
}

function otrocolorC3() {
  var c = []
  c[0] = Math.floor((Math.random() * 256));
  c[1] = Math.floor((Math.random() * 256));
  c[2] = Math.floor((Math.random() * 256));
  const brightness = Math.round(((parseInt(c[0]) * 299) +
    (parseInt(c[1]) * 587) +
    (parseInt(c[2]) * 114)) / 1000);
  var r = []
  r[0] = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + transparente + ")";
  r[1] = (brightness > 125) ? 'black' : 'white';
  r[2] = "rgb(" + (255 - c[0]) + "," + (255 - c[1]) + "," + (255 - c[2]) + ")"
  return r


}

function Dump() {
  cad = ''

  for (var a = 0; a < dataSesion.length; a++) {
    cad += (a) + '<br>' + dataSesion[a] + '<br>'
  }
  $('#dvolcado').html(cad)

}

var bg
var emojiUsed = [{
  n: 1,
  p: 0
}, {
  n: 1,
  p: 100
}]

function doBg(elem) {
  if (typeof elem === 'undefined') {
    elem = '';
  }
  bg = []
  var ibg2 = otrocolor(listcolor[emojiUsed[0].n][listcolor[emojiUsed[0].n].length - 1])
  var ibg1 = otrocolor(listcolor[emojiUsed[0].n][1])
  bg[0] = ibg1[0]
  bg[1] = ibg1[1]
  bg[2] = ibg2[0]
  var ch = bg[0] + ' ' + emojiUsed[0].p + '% , ' + bg[2] + ' ' + emojiUsed[1].p + '%'
  if (emojiUsed.length > 2) {
    ch = bg[0] + ' 0%,' + bg[2] + '100%'
    for (var a = 0; a < emojiUsed.length; a++) {
      ibg1 = otrocolor(listcolor[emojiUsed[a].n][1])
      ch += ibg1[0] + ' ' + emojiUsed[a].p + '% ,'
    }
  }
  if (elem == 'i') {
    if (defaultImageChanged) {
      if (DEFAULTnimage == emojiUsed[0].n) {

        ibg[emojiUsed[0].n] = DEFAULTimage;

      }
      //console.log(' entra:' + DEFAULTnimage)
    }
    $('#accion').css('background-image', 'url(' + ibg[emojiUsed[0].n] + ')')
    $('#accion').css('background-size', 'cover')
  } else {
    $('#accion').css('background-image', 'linear-gradient(' + ch + ')')
    nemoji0 = emojiUsed[0].n
  }
}

function doBg1() {
  bg = []
  var ibg2 = otrocolor(listcolor[nemoji][listcolor[nemoji].length - 1])
  var ibg1 = otrocolor(listcolor[nemoji][1])
  bg[0] = ibg1[0]
  bg[1] = ibg1[1]
  bg[2] = ibg2[0]
  $('#accion').css('background-image', 'linear-gradient(' + bg[0] + ',' + bg[2] + ')')
}


function iniRepeatedChar(s) {
  // var fi=string.substring(0,1)
  var fi = s.charAt(0)
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c != fi) {
      return i;
    }
  }
  return null;
}

function aumentaD(repini, np1) {
  var nparts = 5
  if (repini == 5) {
    paleta[np1].prop.r1[0] = 255
    paleta[np1].prop.g1[0] = 255
    paleta[np1].prop.b1[0] = 255
    paleta[np1].prop.r2[0] = 255
    paleta[np1].prop.g2[0] = 255
    paleta[np1].prop.b2[0] = 255
    paleta[np1].prop.r1[1] = 1
    paleta[np1].prop.g1[1] = 1
    paleta[np1].prop.b1[1] = 1
    paleta[np1].prop.r2[1] = 1
    paleta[np1].prop.g2[1] = 1
    paleta[np1].prop.b2[1] = 1
    return
  }
  if (paleta[np1].prop.r1[1] < 1) {
    paleta[np1].prop.r1[1] += ((1 - paleta[np1].prop.r1[1]) / nparts) * repini
  }
  if (paleta[np1].prop.g1[1] < 1) {
    paleta[np1].prop.g1[1] += ((1 - paleta[np1].prop.g1[1]) / nparts) * repini
  }
  if (paleta[np1].prop.b1[1] < 1) {
    paleta[np1].prop.b1[1] += ((1 - paleta[np1].prop.b1[1]) / nparts) * repini
  }
  if (paleta[np1].prop.r2[1] < 1) {
    paleta[np1].prop.r2[1] += ((1 - paleta[np1].prop.r2[1]) / nparts) * repini
  }
  if (paleta[np1].prop.g2[1] < 1) {
    paleta[np1].prop.g2[1] += ((1 - paleta[np1].prop.g2[1]) / nparts) * repini
  }
  if (paleta[np1].prop.b2[1] < 1) {
    paleta[np1].prop.b2[1] += ((1 - paleta[np1].prop.b2[1]) / nparts) * repini
  }

  if (paleta[np1].prop.r1[0] < 255) {
    paleta[np1].prop.r1[0] += ((255 - paleta[np1].prop.b1[0]) / nparts) * repini
  }
  if (paleta[np1].prop.g1[0] < 255) {
    paleta[np1].prop.g1[0] += ((255 - paleta[np1].prop.b1[0]) / nparts) * repini
  }
  if (paleta[np1].prop.b1[0] < 255) {
    paleta[np1].prop.b1[0] += ((255 - paleta[np1].prop.b1[0]) / nparts) * repini
  }
  if (paleta[np1].prop.r2[0] < 255) {
    paleta[np1].prop.r2[0] += ((255 - paleta[np1].prop.r2[0]) / nparts) * repini
  }
  if (paleta[np1].prop.g2[0] < 255) {
    paleta[np1].prop.g2[0] += ((255 - paleta[np1].prop.g2[0]) / nparts) * repini
  }
  if (paleta[np1].prop.b2[0] < 255) {
    paleta[np1].prop.b2[0] += ((255 - paleta[np1].prop.b2[0]) / nparts) * repini
  }

}

function findNumberEmoti(c) {
  var r = -1
  for (var a = 0; a < iconums.length; a++) {
    if (c.indexOf(iconums[a]) > -1) {
      r = a;
      break
    }
  }
  return r
}

function mytrim(x) {
  return x.replace(/^\s+|\s+$/gm, '');
}


var paleta = []
var foto = []
var DEFAULTimage = ''
var DEFAULTnimage = 1



/////////////////// BUILD

function showw() {

    hcontain = -1
    H = []
    H[0] = {
  bg: [],
  color: [],
  height: DEFAULTdivHeight
}

  //paleta = jQuery.extend(true, {}, inipaleta);
  //$('#bconvert').html('Edit')
  //dataSesion= $('#accion').text().split("\n")
  //var r = $('#accion').text().replace('\n', '<br>');
  var r = $('#texto').val();
  r=r.replace(/'/g, "&apos;");

 
  dataSesion = r.split(/\r?\n/)
  
  //console.log(dataSesion.length);
  //bg = otrocolorC3()
  //doBg()
  //$('#accion').css('background-image', 'linear-gradient(' + bg[0] + ',' + bg[2] + '), url('+sticker[0]+')')
  // $('#accion').css('background-image', 'url('+sticker[0]+')')
  //$('#accion').css('background-image','url('+sticker[0]+'), linear-gradient(' + bg[0] + ',' + bg[2] + ')'); 
  $('#accion').html('')
  $('#accion').css('position', 'relative')
  $('#accion').css('background-repeat', 'no-repeat')
  $('#accion').css('background-position', 'center center');
  //$('#accion').css('background-position', 'center center');
  //$('#preaccion').css('opacity','0.5')
  var fr = ''
  //var txt=$('#accion').text()

  //alert(txt)
  //var splitext= txt.split("\n")
  var splitext = dataSesion
  var spaces = [],
    u

  var trs
  for (var a = 0; a < splitext.length; a++) {
    trs = mytrim(splitext[a])
    if (trs.substring(0, 2) != '//') {
      u = splitext[a].split(' ')
      spaces.push(u)
    }
  }
  var cad = '';
  //var cad = '<table width="99%" border=0 align="center" style="background-color:transparent;"><tr><td>'
  //IMPOSIBLE EMAIL WITH ABSOLUTE POSITION
  //cad+='<div style="z-index:0;background-image:url('+sticker[0]+');background-repeat:no-repeat;background-position:center center;position:absolute;top:0px;left:0px;width:100%;height:100%;></div>'
  //cad+='<img src="'+sticker[0]+'" style="opacity:50%;position:absolute;top:0px;left:0px;"></div>'
  //cad+='<img src="'+sticker[0]+'" style="opacity:50%;position: relative; left: 100px;top: -200px;margin-bottom: -200px;"></div>'

  var contf = 0
  var ccc = 0


  var DEFAULTanchodiv = '80%'
  var anchodiv = DEFAULTanchodiv;
  var DEFAULTanchothisdiv = '80%'
  var anchothisdiv = DEFAULTanchothisdiv
  var DEFAULTmarginTop=0;
  var emarginTop =0
  var epadding =0

  var DEFAUlTimagewidth = '150px'
  var imagewidth = DEFAUlTimagewidth
  //
  DEFAULTimage = ibg[0]
  defaultImageChanged = false
  if (spaces[0][0].substring(0, 1) == 'g') {
    var bgp = spaces[0][0].substring(1);
    document.body.style.backgroundImage = 'url("' + bgp + '")';

    spaces = spaces.splice(1);

  } else {
    document.body.style.backgroundImage = ''
    document.body.style.backgroundColor = '#000'
  }
if (spaces[0][0].substring(0, 1) == 'f') {
    var ftrim = mytrim(spaces[0][0].substring(1,2));
  if(parseInt(ftrim) == isNaN){
        }else{
          $('#accion').css('font-family', FONTfamily[ftrim])

  }
    spaces = spaces.splice(1);
   

  } else {
   $('#accion').css('font-family', 'arial')

    
  }

  //var cambw = [0, 0]
  var cambw = 0
  if (spaces[0][0].substring(0, 1) == 'w') {
    anchodivPage = spaces[0][0].substring(1)
    spaces[0] = spaces[0].splice(1);
    //console.log(anchodivPage)
    //cambw[0] = 1
    cambw=1
  }

  if (spaces[0][0].substring(0, 1) == 'h') {
    altodivPage = spaces[0][0].substring(1)
    
    spaces[0] = spaces[0].splice(1);
    //console.log(altodivPage)
    //cambw[1] = 1
     cambw=2
  }
   //var mycadj=mytrim(spaces[0])
        //if (spaces[0][0].substring(0, 1) == 'm') {
    //var mj=spaces[0].join(' ')
    //var mji=mj.indexOf('m')
    //if(typeof morespaces[1] === 'undefined') {
    if (spaces[0][0] != null) {
      var mji = spaces[0][0].indexOf('m')
     if (mji>-1) {
             
  // var spcw = cadjoin.indexOf(' ')
          //var spcw1 = cadjoin.substring(1, spcw)
          emarginTop =  spaces[0][0].substring(1)
          //spcw1.substring(1)
          //console.log(spaces[0][0]+' '+emarginTop)
          //cadjoin = cadjoin.substring(spcw)
          spaces[0] = spaces[0].splice(1);
           cambw=3
     }
        }
 if (spaces[0][0] != null) {
      var mji = spaces[0][0].indexOf('p')
     if (mji>-1) {
             
  // var spcw = cadjoin.indexOf(' ')
          //var spcw1 = cadjoin.substring(1, spcw)
          epadding =  spaces[0][0].substring(1)
          //spcw1.substring(1)
          //console.log(spaces[0][0]+' '+emarginTop)
          //cadjoin = cadjoin.substring(spcw)
          spaces[0] = spaces[0].splice(1);
           cambw=4
     }
        }

  
  if (cambw>0) {
    spaces = spaces.splice(1);

  }

  if (spaces[0][0].substring(0, 1) == 'i') {
    DEFAULTimage = spaces[0][0].substring(1);
    spaces = spaces.splice(1);
    defaultImageChanged = true
  }


  if (spaces[0][0].substring(0, 1) == 'O' || spaces[0][0].substring(0, 1) == 'o') {
    DEFAULTparagraph = 12
    spaces[0][0] = spaces[0][0].substring(1);
  }
  if (spaces[0][0].substring(0, 1) == 'X') {
    DEFAULTparagraph = 0
    spaces[0][0] =spaces[0][0].substring(1);
  }
  if (spaces[0][0].substring(0, 1) == '0') {
    DEFAULTparagraph = -1
    spaces[0][0] = spaces[0][0].substring(1);
  }


  if (spaces[0][0].substring(0, 2) == '..') {
    anchodivPage = 500
    spaces[0][0] = spaces[0][0].substring(2);
  }




  var repini = 0
  var inichar = spaces[0][0].substring(0, 1)
  if (inichar == ')' || inichar == 'D' || inichar == '|' || inichar == ')') {
    repini = iniRepeatedChar(spaces[0][0])
    spaces[0][0] = spaces[0][0].substring(repini);
  }

  paleta = JSON.parse(JSON.stringify(inipaleta));
  var morespaces = spaces[0].slice(1)
  var twopal = []
  var intenso1 = 5
  var intenso2 = 10
  var frecc = 1
  var ncoll = spaces.length
  if (morespaces.length >= 1) {
    //if(morespaces[0]!= null || morespaces[0]!=''){
    if (morespaces[0] != '') {
      //frecc=eval(toString(morespaces[0]))
      frecc = parseInt(morespaces[0])
    }
    //if(typeof morespaces[1] === 'undefined') {
    if (morespaces[1] != null) {
      //ncoll=eval(toString(morespaces[1]))
      ncoll = parseInt(morespaces[1])
    }

    spaces[0] = [spaces[0][0]]

  }


  twopal = spaces[0][0].split('_')
  var BGi = false
  if (spaces[0][0].substring(spaces[0][0].length - 1) == 'i') {
    BGi = true
    /*if (defaultImageChanged) {
      var npx = paleta.findIndex(x => x.icon === twopal[0])
      if (npx == -1) {
        npx = 1
      }
      ibg[npx] = DEFAULTimage
      emojiUsed[0].n = npx
      emojiUsed[1].n = npx
      doBg('i')
      
    }
    */
    spaces[0][0] = spaces[0][0].substring(0, spaces[0][0].length - 1)
  }
  if (twopal.length == 1) {
    //var np1 = paleta.findIndex(x => x.icon === twopal[0])
    //var np1 = iconums.indexOf(twopal[0]);
    var np1 = findNumberEmoti(twopal[0])
    if (np1 == -1) {
      np1 = 1
    }
    DEFAULTnimage = np1
    //console.log('ini:' + np1)
    paleta[np1].prop.n = ncoll
    paleta[np1].prop.frec = frecc
    if (repini > 0) {
      if (inichar == 'D') {
        aumentaD(repini, np1)
      }
    }
  }
  if (twopal.length > 1) {

    var np1 = paleta.findIndex(x => x.icon === twopal[0])
    if (np1 == -1) {
      np1 = 1
    }
    var np2 = paleta.findIndex(x => x.icon === twopal[1])
    if (np2 == -1) {
      np2 = 2
    }
    /*paleta[np1].prop.n=spaces.length
    paleta[np2].prop.n=spaces.length
    paleta[np1].prop.frec=frecc
    paleta[np2].prop.frec=frecc
    */
    paleta[np1].prop.n = ncoll
    paleta[np1].prop.frec = frecc
    paleta[np1].prop.r2 = inipaleta[np2].prop.r2
    paleta[np1].prop.g2 = inipaleta[np2].prop.g2
    paleta[np1].prop.b2 = inipaleta[np2].prop.b2
    paleta[np1].prop.neutro = inipaleta[np2].prop.neutro
    spaces[0][0] = twopal[0]
  }

  colorea()

  //console.log(spaces[0][0]+' '+anchodiv)
  $('#accion').css('width', anchodivPage)
  $('#accion').css('height', altodivPage)
  foto = []

  for (var a = 0; a < spaces.length; a++) {

    /////// INSIDE PARAGRAPH
    var oc = otrocolor(listcolor[nemoji][ccc])
    if (spaces[a].length > 1) {
      for (var i = 1; i < spaces[a].length; i++) {
        /*
         if( FONTmix[0].d.indexOf(spaces[a][i].substring(2))>-1){  spaces[a][i] = '<span '+FONTmix[0].r+'>' + spaces[a][i].substring(2) + '</span>'}
         if( FONTmix[1].d.indexOf(spaces[a][i].substring(2))>-1){ spaces[a][i] = '<span '+FONTmix[1].r+'>' + spaces[a][i].substring(2) + '</span>'}
         if( FONTmix[2].d.indexOf(spaces[a][i].substring(2))>-1){ spaces[a][i] = '<span '+FONTmix[2].r+'>' + spaces[a][i].substring(2) + '</span>'}
         if( FONTmix[3].d.indexOf(spaces[a][i].substring(3))>-1){ spaces[a][i] = '<span '+FONTmix[3].r+'>' + spaces[a][i].substring(3) + '</span>'}
        */
        var estilo = ''

        if (spaces[a][i].substring(0, 2) == 'l1' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:large;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:large;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l2' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:x-large;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:xlarge;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l3' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:xx-large;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:xx-large;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l4' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:150%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:150%;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l5' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:300%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:300%;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l6' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:300%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:400%;'
          spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l7' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:500%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:500%;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l8' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:700%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:700%;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'l9' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="font-size:1000%;">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'font-size:100%;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c+' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[0][parseInt(Math.random()*listcolor[0].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:#fff;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c-' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[0][parseInt(Math.random()*listcolor[0].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:#000;'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c0' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[0][parseInt(Math.random()*listcolor[0].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[0][parseInt(Math.random() * listcolor[0].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c1' && spaces[a][i].length > 2 && spaces[a][i].substring(0, 3) != 'c10') {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[1][parseInt(Math.random()*listcolor[1].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[1][parseInt(Math.random() * listcolor[1].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c2' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[2][parseInt(Math.random()*listcolor[2].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[2][parseInt(Math.random() * listcolor[2].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c3' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[3][parseInt(Math.random()*listcolor[3].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[3][parseInt(Math.random() * listcolor[3].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c4' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[4][parseInt(Math.random()*listcolor[4].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[4][parseInt(Math.random() * listcolor[4].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c5' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[5][parseInt(Math.random()*listcolor[5].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[5][parseInt(Math.random() * listcolor[5].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c6' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[6][parseInt(Math.random()*listcolor[6].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[6][parseInt(Math.random() * listcolor[6].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c7' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[7][parseInt(Math.random()*listcolor[7].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[7][parseInt(Math.random() * listcolor[7].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c8' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[8][parseInt(Math.random()*listcolor[8].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[8][parseInt(Math.random() * listcolor[8].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'c9' && spaces[a][i].length > 2) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[9][parseInt(Math.random()*listcolor[9].length)]+');">' + spaces[a][i].substring(2) + '</span>';
          estilo += 'color:rgb(' + listcolor[9][parseInt(Math.random() * listcolor[9].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 3) == 'c10' && spaces[a][i].length > 3) {
          //spaces[a][i] = '<span style="color:rgb('+listcolor[10][parseInt(Math.random()*listcolor[10].length)]+');">' + spaces[a][i].substring(3) + '</span>';
          estilo += 'color:rgb(' + listcolor[10][parseInt(Math.random() * listcolor[10].length)] + ');'
          spaces[a][i] = spaces[a][i].substring(2)
        }
        if (spaces[a][i].substring(0, 2) == 'bb' && spaces[a][i].length > 2) {
          spaces[a][i] = '<b>' + spaces[a][i].substring(2) + '</b>';
        }
        if (spaces[a][i].substring(0, 2) == 'uu' && spaces[a][i].length > 2) {
          spaces[a][i] = '<u>' + spaces[a][i].substring(2) + '</u>';
        }
        if (spaces[a][i].substring(0, 2) == 'ii' && spaces[a][i].length > 2) {
          spaces[a][i] = '<i>' + spaces[a][i].substring(2) + '</i>';
        }
        if (spaces[a][i].substring(0, 4) == '-htt') {
          spaces[a][i] = '<a href="' + spaces[a][i].substring(1) + '" target="_blank" style="color:' + oc[1] + ';">' + spaces[a][i + 1] + '</a>';
          spaces[a].splice(i + 1, 1)
          i++
          continue;
        }
        if (spaces[a][i].substring(0, 4) == 'ihtt') {
          //if(spaces[a].length>1){
          var ih = spaces[a][i].substring(4, 5)
          //console.log(ih)
          if (ih == 'w') {
            var ih1 = spaces[a][i].indexOf('_')
            imagewidth = spaces[a][i].substring(5, ih1)


            spaces[a][i] = '<img src="' + spaces[a][i].substring((ih1 + 1)) + '" width="' + imagewidth + '">';


          } else {
            spaces[a][i] = '<img src="' + spaces[a][i].substring(1) + '" width="180px">';
          }
        }
        if (spaces[a][i].substring(0, 4) == 'ahtt') {
          //if(spaces[a].length>1){
          if (spaces[a][i + 1].substring(0, 2) == 'iw') {
            var wi = spaces[a][i + 1].split('_')
            var wi1 = wi[0].substring(2)
            var wi2 = spaces[a][i + 1].indexOf('_')
            var wi3 = spaces[a][i + 1].substring(wi2 + 1)
            spaces[a][i] = '<a href="' + spaces[a][i].substring(1) + '" target="_blank" style="color:' + oc[1] + ';">' + '<img src="' + wi3 + '" width="' + wi1 + '"></a>';

          } else {
            spaces[a][i] = '<a href="' + spaces[a][i].substring(1) + '" target="_blank" style="color:' + oc[1] + ';">' + '<img src="' + spaces[a][i + 1].substring(0) + '" width="180px"></a>';
          }
          spaces[a].splice(i + 1, 1)
          i++
          continue;
          //}
        }
        if (estilo.length > 1) {
          spaces[a][i] = '<span style="' + estilo + '">' + spaces[a][i] + '</span>';
        }
      }
    }
    if (spaces[a][0] != null) {
      var imgg = ''
      var tag = ['', '', '']
      var isground = false;
      if (spaces[a][0].substring(1, 2) == 'h') {
        var t = mytrim(spaces[a][0])
        var lo = spaces[a][0].indexOf('h')
        if (t.length == lo + 1) {
          hcontain = parseInt(spaces[a][0].substring(0, 1))
          if (hcontain != 0 && hcontain>0) {
            H[hcontain] = ''
            if (spaces[a][1].substring(0, 2) == 'ht') {
              H[0].bg[hcontain] = spaces[a][1]
              H[0].color[hcontain] = '#000'
               
            }
            if (spaces[a][1].substring(0, 1) == '#') {
              H[0].color[hcontain] = spaces[a][1]
              H[0].bg[hcontain] = ''
             
            }
          }
          //spaces[a][0]=spaces[a][0].substring(2)
          //console.log(hcontain)

          //spaces.splice(a,0) 
          //console.log(spaces[a][1])

          continue
        }
      }

      var ht = spaces[a][0].substring(0, 4)
      //alert(ht+'_')
      if (ht == 'ihtt' && spaces[a].length > 1) {
        spaces[a][0] = spaces[a][0].substring(1);
        //imgg += 'background-size:cover; background-image:linear-gradient(rgba(255,255,255,'+'0.5'+'), rgba(255,255,255,'+'0.5'+')),url( ' + spaces[a][0] + ' );'
        //imgg += 'background-size:cover; background-image:url( ' + spaces[a][0] + ' ); opacity:0.85;'
        imgg += 'background-size:cover; background-image:url( ' + spaces[a][0] + ' );'
        spaces[a] = spaces[a].splice(1)
        ht = ''
        isground = true
      }
      if (ht == 'http' || ht == '-htt' || ht == 'ihtt' || ht == 'ahtt') {

        if (ht == '-htt') {
          spaces[a][0] = spaces[a][0].substring(1);
        }
        if (ht == 'ihtt') {
          var ih = spaces[a][0].substring(4, 5)
          //console.log(ih)
          if (ih == 'w') {
            var ih1 = spaces[a][0].indexOf('_')
            imagewidth = spaces[a][0].substring(5, ih1)

            spaces[a][0] = spaces[a][0].substring(ih1);

          } else {
            spaces[a][0] = spaces[a][0].substring(1);
          }
        }
        var ahtt = ''
        if (ht == 'ahtt') {
          //console.log(spaces[a])
          spaces[a][0] = spaces[a][0].substring(1);
          ahtt = '<a href="' + spaces[a][1] + '" target="_blank">' + '<img src="' + spaces[a][0] + '" width="200px"/></a>';

        }

        var noprime = spaces[a].splice(1)
        oc = otrocolor(listcolor[nemoji][ccc])


        //-->class="bloque"
        //cad+='<div  style="border-radius: 12px; padding:6px;text-align:center;background-color:'+oc[0]+'; color:'+oc[1]+';width:700px; text-align:justify;">'
        //cad += '<div style="' + tag[2] + 'border-radius: 12px;padding:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">'
        //cad+='<span class="" style="background-color:'+oc[0]+'; color:'+oc[1]+';" >'
        cad += '<div style="' + tag[2] + 'border-radius: 12px; display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:' + anchodiv + ';">'

        if (ht == 'http') {
          cad += '<a href="' + spaces[a][0] + '" target="_blank" style="color:' + oc[1] + ';">' + spaces[a][0] + '</a> ' + noprime.join(' ') + '';
        }
        if (ht == '-htt') {
          cad += '<a href="' + spaces[a][0] + '" target="_blank" style="color:' + oc[1] + ';">' + noprime.join(' ') + '</a>';
        }
        if (ht == 'ihtt') {
          cad += '<img src="' + spaces[a][0] + '" width="200px"/>'
        }
        if (ht == 'ahtt') {
          //spaces[a][1] = 'https://www.wikiloops.com/album/11525-Waterval+%26amp%3B+Babbazitt.php';
          //console.log(spaces[a].join(' '))
          // if (typeof spaces[a][1] === 'undefined') {         spaces[a][1]='https://google.com'            }
          //cad += '<a href="' + spaces[a][1] + '" target="_blank">' + '<img src="' + spaces[a][0] + '" width="200px"/></a>';
          cad += ahtt
        }
        cad += '</div>'
        //cad+='</div>'
        //splitext[a].split(' ')
        //--> fr+='<iframe src="'+spaces[a][0]+'"  width="400"   height="400"></iframe>'
        contf++
        if (contf % 4 == 0) {
          fr += '<br>'
        }
        if (contf % 4 == 0) {
          fr += '<div style="margin-top:20px;height:20px;"></div>'
        }
      } else {

        //var ht=spaces[a][0].substring(0,4)
        //alert(ht+'_')
        var oc = otrocolor(listcolor[nemoji][ccc])

        var tag = ['', '', '']

        ////////////////   SPECIAL

        if (spaces[a][0] == ':-d') {
          spaces[a] = spaces[a].splice(1)
          //oc = otrocolorC3()
        }
        if (spaces[a][0] == ':-(:-)' || spaces[a][0] == ':(:)') {
          ccc = 0
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 20
            emojiUsed[1].n = 20
            nemoji = 20;
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          nemoji = 20;
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 20
          //oc = otrocolorC3()
        }

        if (spaces[a][0] == ':-o') {
          spaces[a] = spaces[a].splice(1)
          oc = otrocolorC3()
          //imgg = 'border: 10px solid transparent;padding: 15px;border-image: url('+borderi[0]+') 30 stretch;background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'
          imgg += 'border-width: 4px;border-style:dotted solid; padding: 15px;background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'


          //imgg = 'background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'
        }
        var icn = iconums.indexOf(spaces[a][0]);
        var grn = GRADIENTsymbols.indexOf(spaces[a][0]);

        var vacio = 1;
        if (DEFAULTparagraph == -1 && (icn == -1 || icn == -1)) {
          vacio = 0
        }
        var radioParagraph = DEFAULTparagraph
        if (spaces[a][0] == '0') {
          oc = ['transparent', bg[1]]
          if (spaces[a].length == 1) {
            DEFAULTparagraph = -1
          }
          vacio = 0
          radioParagraph = 0
          spaces[a] = spaces[a].splice(1)
        }
        if (spaces[a][0] == 'X') {
          radioParagraph = 0
          if (spaces[a].length == 1) {
            DEFAULTparagraph = 0
          }
          spaces[a] = spaces[a].splice(1)
        }
        if (spaces[a][0] == 'O') {
          radioParagraph = 12
          if (spaces[a].length == 1) {
            DEFAULTparagraph = 12
          }
          spaces[a] = spaces[a].splice(1)

        }
        //if(icn>-1){radioParagraph=12}

        ////////////////////////// EMOJI LINES COLOR
        var expresion = 0;

        /* 
        if (spaces[a][0] == '=)') {
           var colorword=''
           for(var n=1;n<spaces[a].length;n++){
             colorword='rgb('+(255-listcolor[nemoji0][ccc][0])+','+(255-listcolor[nemoji0][ccc][1])+','+(255-listcolor[nemoji0][ccc][2])+')'
             cad+='<span style="color:'+colorword+'">'+spaces[a][n]+'</span>'+' '
            ccc += 1;
           if (ccc > 99) {
             ccc = 0
           }
           }
          
           continue;
         }
         */

        if (spaces[a][0] == ':-)') {
          oc = otrocolor(listcolor[1][ccc])

          if (spaces[a].length == 1) {
            emojiUsed[0].n = 1
            emojiUsed[1].n = 1
            ccc = 0;
            nemoji = 1;
            nemoji1 = 1
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }

            continue;
          }
          spaces[a] = spaces[a].splice(1);
          nemoji1 = 1
          expresion = 1
        }
        if (spaces[a][0] == ':-(') {
          oc = otrocolor(listcolor[2][ccc])

          if (spaces[a].length == 1) {
            emojiUsed[0].n = 2
            emojiUsed[1].n = 2
            ccc = 0;
            nemoji = 2;
            nemoji1 = 2
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }

            continue;
          }
          spaces[a] = spaces[a].splice(1);
          nemoji1 = 2
          expresion = 1
        }
        if (spaces[a][0] == ':-p') {
          oc = otrocolor(listcolor[0][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 0
            emojiUsed[1].n = 0
            nemoji = 0;
            nemoji1 = 0
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1);
          nemoji1 = 0
          expresion = 1
        }
        if (spaces[a][0] == ':-|' || spaces[a][0] == ':-||') {

          oc = otrocolor(listcolor[4][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 4
            emojiUsed[1].n = 4
            ccc = 0;
            nemoji = 4;
            nemoji1 = 4
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }

            continue;
          }
          spaces[a] = spaces[a].splice(1);
          nemoji1 = 4
          expresion = 1
        }
        if (spaces[a][0] == ':-D') {
          oc = otrocolor(listcolor[3][ccc])

          if (spaces[a].length == 1) {
            emojiUsed[0].n = 3
            emojiUsed[1].n = 3
            ccc = 0;
            nemoji = 3;
            nemoji1 = 3
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1);
          nemoji1 = 3
          expresion = 1
        }
        if (spaces[a][0] == ':-*' || spaces[a][0] == ':*') {
          oc = otrocolor(listcolor[5][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 5
            emojiUsed[1].n = 5
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 5;
            nemoji1 = 5
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }

            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 5
          expresion = 1
          //oc = otrocolorC3()
        }
        if (spaces[a][0] == ';-)' || spaces[a][0] == ':)') {
          oc = otrocolor(listcolor[6][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 6
            emojiUsed[1].n = 6
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 6;
            nemoji1 = 6
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }

            }

            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 6
          expresion = 1
          //oc = otrocolorC3()
        }
        if (spaces[a][0] == ';-(' || spaces[a][0] == ':(') {
          oc = otrocolor(listcolor[7][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 7
            emojiUsed[1].n = 7
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 7;
            nemoji1 = 7
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 7
          expresion = 1
        }
        if (spaces[a][0] == 'o:-)' || spaces[a][0] == 'o:)') {
          oc = otrocolor(listcolor[8][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 8
            emojiUsed[1].n = 8
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 8;
            nemoji1 = 8
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 8
          expresion = 1
        }
        if (spaces[a][0] == '8-)' || spaces[a][0] == '8-(') {
          oc = otrocolor(listcolor[9][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 9
            emojiUsed[1].n = 9
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 9;
            nemoji1 = 9
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 9
          expresion = 1
        }
        if (spaces[a][0] == 'xD' || spaces[a][0] == 'XD') {
          oc = otrocolor(listcolor[10][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 10
            emojiUsed[1].n = 10
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 10;
            nemoji1 = 10
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 10
          expresion = 1
        }
        if (spaces[a][0] == 'x-(' || spaces[a][0] == 'X-(' || spaces[a][0] == 'x(' || spaces[a][0] == 'X(') {
          oc = otrocolor(listcolor[11][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 11
            emojiUsed[1].n = 11
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 11;
            nemoji1 = 11
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 11
          expresion = 1
        }
        if (spaces[a][0] == '|-)' || spaces[a][0] == '|)') {
          oc = otrocolor(listcolor[12][ccc])
          if (spaces[a].length == 1) {
            emojiUsed[0].n = 12
            emojiUsed[1].n = 12
            ccc = 0
            spaces[a] = spaces[a].splice(1)
            nemoji = 12;
            nemoji1 = 12
            if (a == 0) {
              if (BGi) {
                doBg('i')
              } else {
                doBg();
              }
            }
            continue;
          }
          spaces[a] = spaces[a].splice(1)
          nemoji1 = 12
          expresion = 1
        }
        //////////////////////////////////   IMAGES GROUND EMOJI
        if (expresion == 1) {
          //radioParagraph = 12
        }

        if (spaces[a][0] == ':-pi') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[0] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[0] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ':-)i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[1] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[1] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ':-(i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[2] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[2] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ':-Di') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[3] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[3] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ':-|i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[4] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[4] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ':-*i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[5] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[5] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ';-)i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[6] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[6] + ')')
            continue;
          }
        }
        if (spaces[a][0] == ';-(i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[7] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[7] + ')')
            continue;
          }
        }
        if (spaces[a][0] == 'o:-)i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[8] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[8] + ')')
            continue;
          }
        }
        if (spaces[a][0] == '8-)i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[9] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[9] + ')')
            continue;
          }
        }
        if (spaces[a][0] == 'xDi') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[10] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[10] + ')')
            continue;
          }
        }
        if (spaces[a][0] == 'x(i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[11] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[11] + ')')
            continue;
          }
        }
        if (spaces[a][0] == '|-)i') {
          spaces[a] = spaces[a].splice(1)
          imgg = 'background-size:cover; background-image:url(' + ibg[12] + ');'
          if (a == 0) {
            imgg = ''
            $('#accion').css('background-size', 'cover')
            $('#accion').css('background-image', 'url(' + ibg[12] + ')')
            continue;
          }
        }
        ///////////////////////////   BASIC EXTRANGERS

        if (spaces[a][0] == 'l1') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:large;'
        }
        if (spaces[a][0] == 'l2') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:x-large;'
        }
        if (spaces[a][0] == 'l3') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:xx-large;'
        }
        if (spaces[a][0] == 'l4') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:150%;'
        }
        if (spaces[a][0] == 'l5') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:200%;'
        }
        if (spaces[a][0] == 'l6') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:300%;'
        }
        if (spaces[a][0] == 'l7') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:500%;'
        }
        if (spaces[a][0] == 'l8') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:700%;'
        }
        if (spaces[a][0] == 'l9') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:1000%;'
        }
        if (spaces[a][0] == 's1') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:small;'
        }
        if (spaces[a][0] == 's2') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:x-small;'
        }
        if (spaces[a][0] == 's3') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-size:xx-small;'
        }

        //////// ALIGN
        var aligned = false
        var tali = ''
        if (spaces[a][0] == '.') {
          //oc = ['transparent', bg[1]]
          tali = 'text-align:center;'
          if (spaces[a].length == 1) {
            DEFAULTalign = 'center';
          }
          aligned = true
          spaces[a] = spaces[a].splice(1)
        }
        if (spaces[a][0] == '-') {
          //oc = ['transparent', bg[1]]
          tali = 'text-align:left;'
          if (spaces[a].length == 1) {
            DEFAULTalign = 'left';
          }
          aligned = true
          spaces[a] = spaces[a].splice(1)
        }
        if (spaces[a][0] == '_') {
          tali = 'text-align:right;'
          if (spaces[a].length == 1) {
            DEFAULTalign = 'right';
          }
          aligned = true
          spaces[a] = spaces[a].splice(1)
        }
        if (spaces[a][0] == 'o') {
          tali = 'text-align:justify;'
          if (spaces[a].length == 1) {
            DEFAULTalign = 'justify';
          }
          aligned = true
          spaces[a] = spaces[a].splice(1)
        }
        if (aligned) {
          imgg += tali
        } else {
          imgg += 'text-align:' + DEFAULTalign + ';'
        }
        /////////////////////////  BOLD

        if (spaces[a][0] == 'bb') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-weight:bold;'
        }
        if (spaces[a][0] == 'ii') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'font-style:italic;'
        }
        if (spaces[a][0] == 'uu') {
          spaces[a] = spaces[a].splice(1)
          imgg += 'text-decoration:underline;'
        }
        if (FONTmix[0].d.indexOf(spaces[a][0]) > -1) {
          imgg += FONTmix[0].r;
          spaces[a] = spaces[a].splice(1)
        }
        if (FONTmix[1].d.indexOf(spaces[a][0]) > -1) {
          imgg += FONTmix[1].r;
          spaces[a] = spaces[a].splice(1)
        }
        if (FONTmix[2].d.indexOf(spaces[a][0]) > -1) {
          imgg += FONTmix[2].r;
          spaces[a] = spaces[a].splice(1)
        }
        if (FONTmix[3].d.indexOf(spaces[a][0]) > -1) {
          imgg += FONTmix[3].r;
          spaces[a] = spaces[a].splice(1)
        }




        var esm = esmayuscula(spaces[a].join(' '))
        var tag = ['', '', '']

        
        
        if (esm && vacio != 0) {
          //tag = ['<h4>', '</h4>', 'border: 4px solid #fff;']
        }

        if (radioParagraph == -1) {
          radioParagraph = 0
        } 
      if (DEFAULTparagraph == 0) {
          radioParagraph = 0
        } 
        if (vacio == 0) {
          oc = ['transparent', bg[1]]
          radioParagraph = 12
        }




        /////////////////////////  GRADIENTS


        var cadjoin = spaces[a].join(' ')



        if (cadjoin.substring(0, 2) == '..') {
          var tni = nemoji0
          if (expresion == 1) {
            tni = nemoji1

          }
          ccc += 1;
          if (ccc > 99) {
            ccc = 0
          }
          oc = otrocolor(listcolor[tni][ccc])
          ccc += 4;
          if (ccc > 99) {
            ccc = 0
          }
          var oc1 = otrocolor(listcolor[tni][ccc])
          imgg += 'background-image:linear-gradient(' + oc[0] + ',' + oc1[0] + ');'
          ccc += 2;
          if (ccc > 99) {
            ccc = 0
          }
          if (cadjoin.substring(0, 2) == '..') {
            cadjoin = cadjoin.substring(3)
          }

        }

        if (cadjoin.substring(0, 2) == '.-') {
          var tni = nemoji0
          if (expresion == 1) {
            tni = nemoji1
          }
          ccc += 1;
          if (ccc > 99) {
            ccc = 0
          }
          oc = otrocolor(listcolor[tni][ccc])
          ccc += 4;
          if (ccc > 99) {
            ccc = 0
          }
          var oc1 = otrocolor(listcolor[tni][ccc])
          imgg += 'background-image:linear-gradient(90deg,' + oc[0] + ',' + oc1[0] + '); text-align:left;'
          ccc += 2;
          if (ccc > 99) {
            ccc = 0
          }
          cadjoin = cadjoin.substring(3)

        }
        if (cadjoin.substring(0, 2) == '.o') {
          var tni = nemoji0
          if (expresion == 1) {
            tni = nemoji1
          }
          ccc += 1;
          if (ccc > 99) {
            ccc = 0
          }
          oc = otrocolor(listcolor[tni][ccc])
          ccc += 4;
          if (ccc > 99) {
            ccc = 0
          }
          var oc1 = otrocolor(listcolor[tni][ccc])
          imgg += 'background-image:radial-gradient(' + oc[0] + ',' + oc1[0] + ');'
          ccc += 2;
          if (ccc > 99) {
            ccc = 0
          }
          cadjoin = cadjoin.substring(3)

        }
        if (cadjoin.substring(0, 2) == '.,') {
          oc = otrocolorC3()
          imgg += 'background-image:linear-gradient(' + oc[0] + ',' + oc[2] + ');'
          if (cadjoin.substring(0, 2) == '.,') {
            cadjoin = cadjoin.substring(3)
          }
        }
        if (cadjoin.substring(0, 2) == '._') {
          oc = otrocolorC3()
          imgg += 'background-image:linear-gradient(90deg, ' + oc[0] + ',' + oc[2] + '); text-align:left;'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == '.O') {
          oc = otrocolorC3()
          imgg += 'background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'
          cadjoin = cadjoin.substring(3)
        }



        ///////////////////  TEXTURES

        // spaces[a][0].substring(0, 4)
        if (typeof spaces[a][0] === 'undefined') {} else {
          var ptlog1 = spaces[a][0].indexOf('.t')
          var ptlog2 = spaces[a][0].indexOf('-t')
          //var emotindex=nemoji0
          var tni = nemoji0
          var cademo = ''
          var isTexture = false
          var modo = 'r'
          var numet = 1
          //var cademo2 = 0
          if ((ptlog1 > 1 || ptlog2 > 1)) {
            //console.log(ptlog1 +' '+ptlog2)
            if (ptlog1 >= 0) {
              cademo = spaces[a][0].substring(0, ptlog1)
              tni = iconums.indexOf(cademo);
              spaces[a][0] = spaces[a][0].substring(iconums[tni].length)
              //console.log(spaces[a][0])
            }
            if (ptlog2 >= 0) {
              cademo = spaces[a][0].substring(0, ptlog2)
              tni = iconums.indexOf(cademo);
              //console.log(tni)
              spaces[a][0] = spaces[a][0].substring(iconums[tni].length)

            }
            isTexture = true
            numet = 1
          }
          var tlog = spaces[a][0].substring(0, 2)


          if (tlog == '.t' || tlog == '-t') {
            ccc += 1;
            if (ccc > 99) {
              ccc = 0
            }
            //var tco1 = listcolor[tni][ccc]
            numet = 1
            if (spaces[a][0] != '.t' || spaces[a][0] != '-t') {
              var numeti = parseInt(spaces[a][0].substring(2))
              if (isNaN(numeti)) {
                numet = 1
              } else {
                numet = numeti
              }
            }
            if (tlog == '.t') {
              modo = 'h'
            }
            if (tlog == '-t') {
              modo = 'w'
            }
            isTexture = true
            //spaces[a] = spaces[a].splice(1)
          }

          if (isTexture) {
            //console.log(cademo + ' tni:' + tni + ' ' + numet + ' ' + modo)

            var srci = drawtexture(numet, listcolor[tni], ccc, modo)
            //oc[1] = contrastext([myvivid.r1[0], myvivid.g1[0], myvivid.b1[0]])
            oc[1] = contrastext(listcolor[tni][ccc])
            //imgg = ' background-repeat: no-repeat; background-attachment: fixed; background-position: 0px px; background-size: 100% 100%; background-image:url(' + foto[a] + ');'
            //imgg = 'background-size: 100% 100%; background-image:url(' + foto[a] + ');'
            imgg += 'background-size: 100% 100%; background-image:url(' + srci + ');'
            spaces[a] = spaces[a].splice(1)
            cadjoin = spaces[a].join(' ')
            //cadjoin = cadjoin.substring(3)

          }
        }
       
        /////////////// TEXT COLOR
        //if (typeof spaces[a][0] === 'undefined') {} else {
        //var ptlog = spaces[a][0].indexOf('c1')
        if (cadjoin.substring(0, 2) == 'c+') {
          oc[1] = '#fff'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c-') {
          oc[1] = '#000'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c0') {
          oc[1] = 'rgb(' + listcolor[0][parseInt(Math.random() * listcolor[0].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }

        if (cadjoin.substring(0, 2) == 'c1' && cadjoin.substring(0, 3) != 'c10') {
          oc[1] = 'rgb(' + listcolor[1][parseInt(Math.random() * listcolor[1].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c2') {
          oc[1] = 'rgb(' + listcolor[2][parseInt(Math.random() * listcolor[2].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c3') {
          oc[1] = 'rgb(' + listcolor[3][parseInt(Math.random() * listcolor[3].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c4') {
          oc[1] = 'rgb(' + listcolor[4][parseInt(Math.random() * listcolor[4].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c5') {
          oc[1] = 'rgb(' + listcolor[5][parseInt(Math.random() * listcolor[5].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c6') {
          oc[1] = 'rgb(' + listcolor[6][parseInt(Math.random() * listcolor[6].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c7') {
          oc[1] = 'rgb(' + listcolor[7][parseInt(Math.random() * listcolor[7].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c8') {
          oc[1] = 'rgb(' + listcolor[8][parseInt(Math.random() * listcolor[8].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'c9') {
          oc[1] = 'rgb(' + listcolor[9][parseInt(Math.random() * listcolor[9].length)] + ')'
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 3) == 'c10') {
          oc[1] = 'rgb(' + listcolor[10][parseInt(Math.random() * listcolor[10].length)] + ')'
          cadjoin = cadjoin.substring(4)
        }
        /////////

          /////////////// OPACITY
        var opac=1
        if (cadjoin.substring(0, 2) == 'o1') {
          opac = 0.1
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o2') {
          opac = 0.2
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o3') {
          opac = 0.3
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o4') {
          opac = 0.4
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o5') {
          opac = 0.5
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o6') {
          opac = 0.6
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o7') {
          opac = 0.7
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o8') {
          opac = 0.8
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'o9') {
          opac = 0.9
          cadjoin = cadjoin.substring(3)
        }
        if (cadjoin.substring(0, 2) == 'oo') {
          opac = 1
          cadjoin = cadjoin.substring(3)
        }
        
        
        if (cadjoin.substring(0, 1) == 'w') {

          var spcw = cadjoin.indexOf(' ')
          var spcw1 = cadjoin.substring(0, spcw)
          //var spcw2=mytrim(spcw1)
          anchothisdiv = spcw1.substring(1)
          //var spcw3=parseInt(spcw1.substring(1))
          //if(spcw3<=100){
          //anchodiv = spcw3 + '%'
          //}
          //console.log('w:'+anchodiv)
          cadjoin = cadjoin.substring(spcw)
        }



        ////

        thsline = linkify(cadjoin, oc[1])
        thsline = emoti(thsline)
        var tsl=thsline.split(' -- ')
        var tsl1=''
        if(tsl.length>1){
         tsl1='<table border="0px" width="100%"><tr>'
           for(var ntsl=0; ntsl<tsl.length;ntsl++){
              tsl1+='<td valign="top">'+tsl[ntsl]+'</td>'
           }
          tsl1+='</tr></table>'
          thsline=tsl1
        }
        //oc[1]=contrastext([myvivid.r1[0],myvivid.g1[0],myvivid.b1[0]])
        //imgg = 'background-size:cover; background-image:url(' + foto[a] + ');'

        
        //-->class="bloque"
        //cad+=tag[0]+'<div class="'+tag[2]+'" style=" border-radius: 12px;padding:6px;text-align:center;'+imgg+'background-color:'+oc[0]+'; color:'+oc[1]+';width:700px;">'+spaces[a].join(' ') +'&nbsp;</div>'+tag[1]+'<div style= "margin:5px;"></div>';//splitext[a].split(' ')
        if (hcontain == -1) {
          
          cad += tag[0] + '<div style="' + tag[2] + 'padding:'+epadding+'px;border-radius:' + radioParagraph + 'px;display: inline-block; margin: 0 auto; margin-top:'+emarginTop+'px;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:' + anchothisdiv + ';opacity:'+opac+';overflow-wrap: break-word;">' + thsline + '</div>' + tag[1] + '';
        } else {
          if (hcontain == 0) {
            var nHdivs = H.length - 1
            //var percent = 100 / nHdivs
            var percent = (anchodivPage / nHdivs) + 'px'
            //console.log('ndivs:'+nHdivs+' AnchoPx:'+percent)
            cad += '<div style="margin:0px;background-color:#f00;display:table;width:' + anchodivPage + ';">'
            for (var n = 1; n < H.length; n++) {
              //cad += '<div style="float:left;width:' + percent + '; height:600px;background-size:100% 100%; background-image:url( ' + H[0].bg[n] + ' );background-color:' + H[0].color[n] + ';">' + H[n] + '</div>'
              cad += '<div style="float:left;width:' + percent + ';'+ H[0].height+' background-size:100% 100%; padding:0; background-image:url( ' + H[0].bg[n] + ' );background-color:' + H[0].color[n] + ';">' + H[n] + '</div>'
            
            }
            cad += '</div><br style="clear:both;">'
           
            hcontain = -1
            
          } else {
            var tira = tag[0] + '<div style="' + tag[2] + 'border-radius:' + radioParagraph + 'px;display: inline-block;padding:'+epadding+'px;margin:0 auto;margin-top:'+emarginTop+'px;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:' + anchothisdiv + ';opacity:'+opac+';overflow-wrap: break-word;">' + thsline + '</div>' + tag[1] + '';

            H[hcontain] += tira;
            //console.log(H[hcontain])
          }
        }
        anchodiv = DEFAULTanchodiv
        anchothisdiv = DEFAULTanchothisdiv
        imagewidth = DEFAUlTimagewidth
        //radioParagraph = DEFAULTparagraph
        /* -->
       //cad += tag[0] + '<div style="display:table; border-spacing: 5px; ' + tag[2] + 'border-radius: 12px;padding:8px 28px;margin:5px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:'+anchodivpercent+';"><div style=" display: table-row; width: auto; clear: both;">'
      
      cad += tag[0] + '<div style="display:table; border-spacing: 5px; width:'+anchodivpercent+';">'
      cad+='<div style=" display: table-row; width: auto; clear: both;">'
         cad +='<div style="float: left; text-align:center; padding: 5px; ' + tag[2] + ' display: table-column; ">' +'' + '&nbsp;</div>'
     
         cad +='<div style="float: left; text-align:center;  padding: 5px;display: table-column; border-radius: 12px;padding:8px 28px;margin:5px; ' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + '; ">' + thsline + '&nbsp;</div>'
       
       cad +='</div></div>' + tag[1] + '<br>';
       */
        //cad += tag[0] + '<div style="' + tag[2] + 'border-radius: 12px;box-shadow: 7px 0px 5px 0px ' + oc[1] + ';display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">' + thsline + '&nbsp;</div>' + tag[1] + '<br>';
        //cad += tag[0] + '<button style="' + tag[2] + 'border-radius: 12px;display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">' + thsline + '&nbsp;</button>' + tag[1] + '<br>';

      }
    } else {
      //cad += '</td></tr></table><br />';
      cad += '<br />';
    }
    ccc++
    if (ccc > 99) {
      ccc = 0
    }
  }
  //$('#lista').html(cad+'<br>'+fr)

  //$('#accion').html(cad + '<br><a href="https://waterval-project.github.io/emotext/" target="_blank" style="color:' + listcolor[nemoji][0] + 'font-family:Helvetica;font-size:x-small;" >Emotext</a>')
  $('#accion').html(cad + '<br>')
  extra()
  //alert(cad)

}

$.fn.multiline = function(text) {
  this.text(text);
  this.html(this.html().replace(/\n/g, '<br/>'));
  return this;
}
$.fn.arrtext = function(text) {
  this.text(text);
  this.html(this.html().replace(/\n/g, '<br/>'));
  return this;
}



function liness() {
  $('#logo').show()
  //$("#accion").multiline('$('#accion').text()');

}
var mode = -1;
var dataSesion = []
var rcolor

function colorea() {
  /*
  0 :-p random
  1 :-) vivid 
  2 :-( dark
  3 :-D bright  
  4 :-| grey  
  
  5 :-* red
  6 ;-( blue 
  7 ;-) green 
  
  20 :-(:-) darkToVivid
  */

  //RANDOM :-p  0 
  /* paleta[0].prop.ini=Math.random() * Math.PI
   rcolor = new RainbowGradient(paleta[0].prop)
   listcolor[0] = rcolor.allColors(100)
  */
  listcolor[0] = []
  for (var a = 0; a < 100; a++) {
    var c = []
    c[0] = Math.floor((Math.random() * 256));
    c[1] = Math.floor((Math.random() * 256));
    c[2] = Math.floor((Math.random() * 256));
    listcolor[0][a] = c
  }



  //VIVID :-) 1
  paleta[1].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[1].prop)
  listcolor[1] = rcolor.allColors(100)

  //DARK :-( 2
  paleta[2].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[2].prop)
  listcolor[2] = rcolor.allColors(100)

  //BRIGHT 3 :-D  
  paleta[3].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[3].prop)
  listcolor[3] = rcolor.allColors(100)

  //GREY 4 :-| :-||
  //if(intenso==2){}
  paleta[4].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[4].prop)
  listcolor[4] = rcolor.allColors(100)
  //RED 5 :-*
  paleta[5].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[5].prop)
  listcolor[5] = rcolor.allColors(100)

  //GREEN 6 ;-)
  paleta[6].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[6].prop)
  listcolor[6] = rcolor.allColors(100)

  //BLUE 7 ;-(
  paleta[7].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[7].prop)
  listcolor[7] = rcolor.allColors(100)

  //CYAN 8 o:-)
  paleta[8].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[8].prop)
  listcolor[8] = rcolor.allColors(100)
  //MAGENTA 9   8-)
  paleta[9].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[9].prop)
  listcolor[9] = rcolor.allColors(100)

  //YELLOW 10 xD
  paleta[10].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[10].prop)
  listcolor[10] = rcolor.allColors(100)

  //BROWN 11 X(
  paleta[11].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[12].prop)
  listcolor[11] = rcolor.allColors(100)

  //DUN 12 |-) |)
  paleta[12].prop.ini = Math.random() * Math.PI
  rcolor = new RainbowGradient(paleta[12].prop)
  listcolor[12] = rcolor.allColors(100)

  //DARK TO BRIGHT 20 :-(:-)
  rcol1 = 5;
  rcol2 = 255;
  rmin = 0.1;
  rmax = 1;
  setgrL = {
    ini: Math.random() * Math.PI,
    n: 12,
    frec: 2,
    neutro: [1, 1],
    r1: [rcol1, rmin, rmax],
    g1: [rcol1, rmin, rmax],
    b1: [rcol1, rmin, rmax],
    r2: [rcol2, rmin, rmax],
    g2: [rcol2, rmin, rmax],
    b2: [rcol2, rmin, rmax]
  }
  rcolor = new RainbowGradient(setgrL)
  listcolor[20] = rcolor.allColors(100)

}

function startt() {
  var timer = 1;
  duration = 1
  interval = setInterval(function() {

    if (--timer < 0) {
      timer = duration;
      $('#info').hide()
      //$('#accion').hide()
      clearInterval(interval);
      writing = false
    }
  }, 1000);
}

var writing = false;

function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
  $('#info').show()
  startt()
  // writing = false;
};

function copyToImage() {
  html2canvas($("#accion"), {
    background: "rgba(0,0,0,0)",
    onrendered: function(canvas) {
      // canvas is the final rendered <canvas> element
      //$('#info').show()
      //startt()
      var myImage = canvas.toDataURL("image/png");
      window.open(myImage, "rainbowmaster");
    }
  });

}
var brn = "\n"

function demo(n) {
  if (n == 0) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-p - Hello random colors   - :-pi I like do colors with emoticons -   -   :-p   -    Thank you  -   -  '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 1) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-) - Hello vivid colors   - :-)i I like do colors with emoticons -   -   :-)   -    Thank you  -   -  '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 2) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-( - Hello dark colors   - :-(i I like do colors with emoticons -   -   :-(   -    Thank you  -   -  '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 3) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-D - Hello bright colors   - :-Di I like do colors with emoticons -   -   :-D   -    Thank you  -   -  '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }

  if (n == 4) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-| - Hello grey colors   - :-|i I like do colors with emoticons -   -   :-|   -    Thank you  -   -  '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 5) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-(_:-) - Go dark to vivid colors   - :-(_:-)  - I like do colors with emoticons -  -   -    -   -    Thank you  -   -  -   - '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 6) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-* - Hello red colors   - :-*i I like do colors with emoticons -   -  :-*   -    Thank you  -   -  -   -  - '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
  if (n == 7) {
    //alert(0)
    $('#texto').val('')
    var t = ''
    t += ':-) - :-)i Hello links and images :-*  - -https://wikiloops.com  This is a link to Wikiloops - This is a link to www.waterval-project.com - ihttps://i.pinimg.com/originals/85/a4/f2/85a4f2e7498559604d6c28f4affa3535.png - A picture with link - ahttps://waterval-project.com/covers/mid_wl-pls-11525-1501039093.png https://www.wikiloops.com/album/11525-Waterval+%26amp%3B+Babbazitt.php -  - '
    t = t.replace(/ - /g, "\n")
    $('#texto').val(t)
  }
}

function visual() {
  /*var s1 = $('#accion').parent().html();
  var jHtmlObject = jQuery(s1);
  var editor = jQuery("<p>").append(jHtmlObject);
  editor.find("#texto").remove();
  editor.find("#logo").remove();
  editor.find("#info").remove();
  editor.find("#dconvert").remove();
  s = editor.html()
  writing = true;
  var newHtml = editor.html();
  // var s2=  s1.find("#texto").remove()
  //var s1=  s2.find("#info").remove()
  copyToClip(s)
  */
  //$('#accion').attr('contentEditable','false');
  //$('#accion').select()
  //document.execCommand('copy')
  //$('#accion').hide()
  $('#texto').show();
  liness();
  document.body.style.backgroundColor = '#000'

  //mode *= -1
}

function copyEmotext() {
  var str = $('#texto').val()

  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
  $('#info').show()
  startt()
}

function visual02() {
  //$('#accion').show()
  var s1 = $('#accion').parent().html();
  var jHtmlObject = jQuery(s1);
  var editor = jQuery("<p>").append(jHtmlObject);
  editor.find("#texto").remove();
  editor.find("#logo").remove();
  editor.find("#info").remove();
  editor.find("#dconvert").remove();
  editor.find("#textureCanvas").remove();
  s = editor.html()
  //writing = true;
  var newHtml = editor.html();
  // var s2=  s1.find("#texto").remove()
  //var s1=  s2.find("#info").remove()
  copyToClip(s)
  //copyToImage()
  //$('#accion').attr('contentEditable','false');
  //$('#accion').select()
  //document.execCommand('copy')
  //$('#accion').hide()
  //$('#texto').show();
  //liness();
  //mode *= -1
}

function look() {
  //extrasave()
  var container = $("#texto");
  
  // if the target of the click isn't the container nor a descendant of the container
  // if (!container.is(e.target) && container.has(e.target).length === 0) {
  var container1 = $("a");
  //if (!container1.is(e.target) && container1.has(e.target).length === 0) {
  //console.log(currentMousePos.x)
  //if (currentMousePos.x < parseInt(120) && !writing) {
  container.hide();
  //mode *= -1
  //$('#accion').show()

  showw()
  //-->visual02()
  //writing = false


  //}
  // }
  //}

}

function look_01(e) {
  var container = $("#texto");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    var container1 = $("a");
    if (!container1.is(e.target) && container1.has(e.target).length === 0) {
      //console.log(currentMousePos.x)
      if (currentMousePos.x > parseInt(120) && !writing) {
        container.hide();
        //mode *= -1
        $('#accion').show()

        showw()
        visual02()
        //writing = false


      }
    }
  }

}

var currentMousePos = {
  x: -1,
  y: -1
};

$(document).ready(function() {
   $('#texto').hide() 
  $('#logo').hide() 
  initextra()
  
  paleta = JSON.parse(JSON.stringify(inipaleta));
  colorea()

  //dataSesion = $('#texto').val().split("\n")
  //liness()
  //look()


  //$(document).mouseup(function(e) {   look()  });
  $('#rainbowmaster').mouseup(function(e) {
    //look(e)
   // extrasave()
   // look()
  });

  $("#accion").on("click", function (e) {
     //e.stopPropagation()
    writing = true
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '#000'
    animateShow()
    visual()
  });

  $('#clearbutt').click(function() {
    $('#texto').val('')
  })
  $("#copyHtmlCode").on("click", function() {
    visual02()
  });
  $("#copyEmotextCode").on("click", function() {
    copyEmotext()
  });




  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
  });

$("#texto").bind("click",function(){
    
    showw()
   document.body.style.backgroundImage = '';
   document.body.style.backgroundColor = '#000'
});
  
  //separa()

})
var stateaccion=1
function animateShow(){
var ac = $("#accion");
var tx = $("#texto");
if(stateaccion==1){ 

   tx.css({top:-(ac.height()),'z-index':0}) 
  //ac.css({top:0,'z-index':300,transform: 'scale(.5)'})
ac.css({top:0,'z-index':300})
     .animate({top:(tx.height()+80)}, 1200, function() {
    
    //callback
//ac.stop().animate({top:-230}, 1000, 'swing', function() { 
stateaccion*=-1
  });
}else{
 
tx.hide();
  tx.css({'z-index':0})
 ac.css({top:tx.height(),'z-index':300})
.animate({top:20}, 1200, function() {
   tx.hide();
   $('#logo').hide() 
   showw()
   ac.css({top:20})
   extrasave()
   stateaccion*=-1
  });


}
}
  
function emoti(chain) {
  var htm = chain;
  for (i = 0; i < symbols1.length; i++) {

    if (htm.indexOf(symbols1[i]) !== -1) {
      var elem = emo1[i];
      var a = symbols1[i];
      //var c = '<img src="' + elem + '" />';
      var c = elem;
      htm = replaceAll(a, c, htm);

    }
  }
  return htm
}



function replaceAll(find, replace, str) {

  find = escapeRegExp(find);
  var regex = new RegExp(find, 'gi');
  return str.replace(regex, replace);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};
