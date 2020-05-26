var nemoji = 1
var nemoji1 = 1
var nemoji0 = 1


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
var ibg = []
ibg[11] = urlImages + '11.gif'
ibg[0] = urlImages + 'random01.gif'
ibg[1] = urlImages + 'vivid04.gif'
ibg[2] = urlImages + 'dark01.gif'
ibg[3] = urlImages + 'bright01.gif'
ibg[4] = urlImages + 'grey01.gif'
ibg[5] = urlImages + 'red01.gif'
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
    r[0] = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    return r

}


function otrocolor(rgb) {
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 1000);
    var r = []
    r[1] = (brightness > 125) ? 'black' : 'white';
    r[0] = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    return r

}


function linkify(inputText, c) {
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
    r[0] = "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")"
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
    r[0] = "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")"
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
var emojiUsed = [{ n: 1, p: 0 }, { n: 1, p: 100 }]

function doBg(elem) {
    if (typeof elem === 'undefined') { elem = ''; }
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

var paleta = []

function showw() {
    $('#logo').hide()
    //paleta = jQuery.extend(true, {}, inipaleta);
    //$('#bconvert').html('Edit')
    //dataSesion= $('#accion').text().split("\n")
    //var r = $('#accion').text().replace('\n', '<br>');
    var r = $('#texto').val();
    dataSesion = r.split("\n")
    //bg = otrocolorC3()
    doBg()
    //$('#accion').css('background-image', 'linear-gradient(' + bg[0] + ',' + bg[2] + '), url('+sticker[0]+')')
    // $('#accion').css('background-image', 'url('+sticker[0]+')')
    //$('#accion').css('background-image','url('+sticker[0]+'), linear-gradient(' + bg[0] + ',' + bg[2] + ')'); 

    $('#accion').css('background-repeat', 'no-repeat')
    $('#accion').css('background-position', 'center center');
    $('#accion').css('background-position', 'center center');
    //$('#preaccion').css('opacity','0.5')
    var fr = ''
    //var txt=$('#accion').text()

    //alert(txt)
    //var splitext= txt.split("\n")
    var splitext = dataSesion
    var spaces = [],
        u


    for (var a = 0; a < splitext.length; a++) {
        u = splitext[a].split(' ')
        spaces.push(u)
    }
    var cad = '';
    //var cad = '<table width="99%" border=0 align="center" style="background-color:transparent;"><tr><td>'
    //IMPOSIBLE EMAIL WITH ABSOLUTE POSITION
    //cad+='<div style="z-index:0;background-image:url('+sticker[0]+');background-repeat:no-repeat;background-position:center center;position:absolute;top:0px;left:0px;width:100%;height:100%;></div>'
    //cad+='<img src="'+sticker[0]+'" style="opacity:50%;position:absolute;top:0px;left:0px;"></div>'
    //cad+='<img src="'+sticker[0]+'" style="opacity:50%;position: relative; left: 100px;top: -200px;margin-bottom: -200px;"></div>'

    var contf = 0
    var ccc = 0
    var anchodiv = 750; // 
    var anchodivpercent = '80%';
    //
    if (spaces[0][0].substring(0, 2) == '..') {
        anchodiv = 500
        spaces[0][0] = spaces[0][0].substring(2);
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

    if (twopal.length == 1) {
        var np1 = paleta.findIndex(x => x.icon === twopal[0])
        if (np1 == -1) { np1 = 1 }
        paleta[np1].prop.n = ncoll
        paleta[np1].prop.frec = frecc
        //paleta[np1].prop.frec=parseInt(spaces.length/6)2

    }
    if (twopal.length > 1) {

        var np1 = paleta.findIndex(x => x.icon === twopal[0])
        if (np1 == -1) { np1 = 1 }
        var np2 = paleta.findIndex(x => x.icon === twopal[1])
        if (np2 == -1) { np2 = 2 }
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
        spaces[0][0] = twopal[0]
    }

    colorea()
    
    //console.log(spaces[0][0]+' '+anchodiv)
    $('#accion').css('width', (anchodiv) + 'px')

    for (var a = 0; a < spaces.length; a++) {

        if (spaces[a][0] != null) {
            var ht = spaces[a][0].substring(0, 4)
            //alert(ht+'_')
            if (ht == 'http' || ht == '-htt' || ht == 'ihtt' || ht == 'ahtt') {

                if (ht == '-htt') {
                    spaces[a][0] = spaces[a][0].substring(1);
                }
                if (ht == 'ihtt') {
                    spaces[a][0] = spaces[a][0].substring(1);
                }
                var ahtt = ''
                if (ht == 'ahtt') {
                    console.log(spaces[a])
                    spaces[a][0] = spaces[a][0].substring(1);
                    var ahtt = '<a href="' + spaces[a][1] + '" target="_blank">' + '<img src="' + spaces[a][0] + '" width="200px"/></a>';

                }

                var noprime = spaces[a].splice(1)
                var oc = otrocolor(listcolor[nemoji][ccc])
                var tag = ['', '', '']
                var imgg = ''
                //-->class="bloque"
                //cad+='<div  style="border-radius: 12px; padding:6px;text-align:center;background-color:'+oc[0]+'; color:'+oc[1]+';width:700px; text-align:justify;">'
                //cad += '<div style="' + tag[2] + 'border-radius: 12px;padding:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">'
                //cad+='<span class="" style="background-color:'+oc[0]+'; color:'+oc[1]+';" >'
                cad += '<div style="' + tag[2] + 'border-radius: 12px; display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:' + anchodivpercent + ';">'

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
                cad += '</div><br>'
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
                var imgg = ''
                var tag = ['', '', '']

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
                            doBg();
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
                    imgg = 'border-width: 4px;border-style:dotted solid; padding: 15px;background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'


                    //imgg = 'background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'
                }
                var vacio = 1;
                if (spaces[a][0] == '0') {
                    spaces[a] = spaces[a].splice(1)
                    oc = ['transparent', bg[1]]
                    vacio = 0
                }

                ////////////////////////// EMOJI LINES COLOR
                var expresion = 0;

                if (spaces[a][0] == ':-)') {
                    oc = otrocolor(listcolor[1][ccc])

                    if (spaces[a].length == 1) {
                        emojiUsed[0].n = 1
                        emojiUsed[1].n = 1
                        ccc = 0;
                        nemoji = 1;
                        nemoji1 = 1
                        if (a == 0) {
                            doBg();
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
                            doBg();
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
                            doBg();
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

                            doBg();
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
                            doBg();
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
                            doBg();
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
                            doBg();

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
                            doBg();
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
                            doBg();
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
                            doBg();
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
                            doBg();
                        }
                        continue;
                    }
                    spaces[a] = spaces[a].splice(1)
                    nemoji1 = 10
                    expresion = 1
                }
                if (spaces[a][0] == 'x-(' || spaces[a][0] == 'X-(') {
                    oc = otrocolor(listcolor[11][ccc])
                    if (spaces[a].length == 1) {
                        emojiUsed[0].n = 11
                        emojiUsed[1].n = 11
                        ccc = 0
                        spaces[a] = spaces[a].splice(1)
                        nemoji = 11;
                        nemoji1 = 11
                        if (a == 0) {
                            doBg();
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
                            doBg();
                        }
                        continue;
                    }
                    spaces[a] = spaces[a].splice(1)
                    nemoji1 = 12
                    expresion = 1
                }
                //////////////////////////////////   IMAGES GROUND EMOJI

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
                ///////////////////////////   EXTRANGERS
                if (spaces[a][0] == ':-(.') {
                    spaces[a] = spaces[a].splice(1)
                    oc = ['transparent', bg[1]]
                    imgg = 'font-weight:700;'
                }
                if (spaces[a][0] == ':-(.,') {
                    spaces[a] = spaces[a].splice(1)
                    oc = ['transparent', bg[1]]
                    imgg = 'font-weight:700; text-align:left;'
                }

                /////////////////////////  BOLD

                var esm = esmayuscula(spaces[a].join(' '))
                var tag = ['', '', '']

                if (esm && vacio != 0) {
                    //-->tag = ['<h4>', '</h4>', 'border: 4px solid #fff;']
                }

                /////////////////////////  GRADIENTS


                var cadjoin = spaces[a].join(' ')

                if (cadjoin.substring(0, 2) == '..') {
                    var tni = nemoji0
                    if (expresion == 1) { tni = nemoji1 }
                    ccc += 1;
                    if (ccc > 99) { ccc = 0 }
                    oc = otrocolor(listcolor[tni][ccc])
                    ccc += 4;
                    if (ccc > 99) { ccc = 0 }
                    var oc1 = otrocolor(listcolor[tni][ccc])
                    imgg = 'background-image:linear-gradient(' + oc[0] + ',' + oc1[0] + ');'
                    ccc += 2;
                    if (ccc > 99) { ccc = 0 }
                    if (cadjoin.substring(0, 2) == '..') { cadjoin = cadjoin.substring(3) }

                }

                if (cadjoin.substring(0, 2) == '.-') {
                    var tni = nemoji0
                    if (expresion == 1) { tni = nemoji1 }
                    ccc += 1;
                    if (ccc > 99) { ccc = 0 }
                    oc = otrocolor(listcolor[tni][ccc])
                    ccc += 4;
                    if (ccc > 99) { ccc = 0 }
                    var oc1 = otrocolor(listcolor[tni][ccc])
                    imgg = 'background-image:linear-gradient(90deg,' + oc[0] + ',' + oc1[0] + '); text-align:left;'
                    ccc += 2;
                    if (ccc > 99) { ccc = 0 }
                    cadjoin = cadjoin.substring(3)

                }
                if (cadjoin.substring(0, 2) == '.o') {
                    var tni = nemoji0
                    if (expresion == 1) { tni = nemoji1 }
                    ccc += 1;
                    if (ccc > 99) { ccc = 0 }
                    oc = otrocolor(listcolor[tni][ccc])
                    ccc += 4;
                    if (ccc > 99) { ccc = 0 }
                    var oc1 = otrocolor(listcolor[tni][ccc])
                    imgg = 'background-image:radial-gradient(' + oc[0] + ',' + oc1[0] + ');'
                    ccc += 2;
                    if (ccc > 99) { ccc = 0 }
                    cadjoin = cadjoin.substring(3)

                }
                if (cadjoin.substring(0, 2) == '.,') {
                    oc = otrocolorC3()
                    imgg = 'background-image:linear-gradient(' + oc[0] + ',' + oc[2] + ');'
                    if (cadjoin.substring(0, 2) == '.,') { cadjoin = cadjoin.substring(3) }
                }
                if (cadjoin.substring(0, 2) == '._') {
                    oc = otrocolorC3()
                    imgg = 'background-image:linear-gradient(90deg, ' + oc[0] + ',' + oc[2] + '); text-align:left;'
                    cadjoin = cadjoin.substring(3)
                }
                if (cadjoin.substring(0, 2) == '.O') {
                    oc = otrocolorC3()
                    imgg = 'background-image:radial-gradient(' + oc[0] + ',' + oc[2] + ');'
                    cadjoin = cadjoin.substring(3)
                }
                thsline = linkify(cadjoin, oc[1])
                thsline = emoti(thsline)


                //-->class="bloque"
                //cad+=tag[0]+'<div class="'+tag[2]+'" style=" border-radius: 12px;padding:6px;text-align:center;'+imgg+'background-color:'+oc[0]+'; color:'+oc[1]+';width:700px;">'+spaces[a].join(' ') +'&nbsp;</div>'+tag[1]+'<div style= "margin:5px;"></div>';//splitext[a].split(' ')
                cad += tag[0] + '<div style="' + tag[2] + 'border-radius: 12px;display: inline-block;padding:8px 28px;margin:5px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:' + anchodivpercent + ';">' + thsline + '&nbsp;</div>' + tag[1] + '<br>';
                /* -->
       //cad += tag[0] + '<div style="display:table; border-spacing: 5px; ' + tag[2] + 'border-radius: 12px;padding:8px 28px;margin:5px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:'+anchodivpercent+';"><div style=" display: table-row; width: auto; clear: both;">'
      
      cad += tag[0] + '<div style="display:table; border-spacing: 5px; width:'+anchodivpercent+';">'
      cad+='<div style=" display: table-row; width: auto; clear: both;">'

         cad +='<div style="float: left; text-align:center; padding: 5px; ' + tag[2] + ' display: table-column; ">' +'' + '&nbsp;</div>'
     
         cad +='<div style="float: left; text-align:center;  padding: 5px;display: table-column; border-radius: 12px;padding:8px 28px;margin:5px; ' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + '; ">' + thsline + '&nbsp;</div>'
       
       cad+='</div></div>' + tag[1] + '<br>';
       */
                //cad += tag[0] + '<div style="' + tag[2] + 'border-radius: 12px;box-shadow: 7px 0px 5px 0px ' + oc[1] + ';display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">' + thsline + '&nbsp;</div>' + tag[1] + '<br>';
                //cad += tag[0] + '<button style="' + tag[2] + 'border-radius: 12px;display: inline-block;padding:3px;margin:6px;text-align:center;' + imgg + 'background-color:' + oc[0] + '; color:' + oc[1] + ';width:680px;">' + thsline + '&nbsp;</button>' + tag[1] + '<br>';

            }
        } else {
            //cad += '</td></tr></table><br />';
            cad += '<br />';
        }
        ccc++
        if (ccc > 99) { ccc = 0 }
    }
    //$('#lista').html(cad+'<br>'+fr)
    $('#accion').html(cad + '<br><a href="https://waterval-project.github.io/emotext/" target="_blank" style="color:' + listcolor[nemoji][0] + 'font-family:Helvetica;font-size:x-small;" >Emotext</a>')
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
    rcolor = new RainbowGradient(paleta[9].prop)
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
            clearInterval(interval);
            writing=false
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
        t += ':-) - :-)i Hello links and images :-*  - -https://google.com  This is a link to Google - This is a link to www.waterval-project.com - ihttps://i1.wp.com/creativeair.co/wp-content/uploads/bfi_thumb/send_email_on_local-oebdku1oe0i1wujir3oezp08g9k6z0v3np8e76ligc.png - A picture with link - ahttps://waterval-project.com/covers/mid_wl-pls-11525-1501039093.png https://www.wikiloops.com/album/11525-Waterval+%26amp%3B+Babbazitt.php -  - '
        t = t.replace(/ - /g, "\n")
        $('#texto').val(t)
    }
}

function visual(){
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
        $('#accion').hide()
        $('#texto').show();
        liness();

        //mode *= -1
}

function visual02(){
        var s1 = $('#accion').parent().html();
        var jHtmlObject = jQuery(s1);
        var editor = jQuery("<p>").append(jHtmlObject);
        editor.find("#texto").remove();
        editor.find("#logo").remove();
        editor.find("#info").remove();
        editor.find("#dconvert").remove();
        s = editor.html()
        //writing = true;
        var newHtml = editor.html();
        // var s2=  s1.find("#texto").remove()
        //var s1=  s2.find("#info").remove()
        copyToClip(s)
        //$('#accion').attr('contentEditable','false');
        //$('#accion').select()
        //document.execCommand('copy')
        //$('#accion').hide()
        //$('#texto').show();
        //liness();
        //mode *= -1
}


$(document).ready(function() {
    paleta = JSON.parse(JSON.stringify(inipaleta));
    colorea()
    dataSesion = $('#texto').text().split("\n")
    liness()


    $(document).mouseup(function(e) {
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

    });
   

    $("#accion").on("click", function() {
       writing=true
       visual()

    });


    var currentMousePos = {
        x: -1,
        y: -1
    };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });


    //separa()

})
//thanks to https://ranksheet.com/solutions/kb-jQuery/2169_Easily-convert-text-emoticons-to-image-emoticons.aspx
//thanks to https://github.com/watson/base64-emoji
var emo1 = ["😇", "😇", "😇", "😇", "😊", "😊", "😃", "😃", "🙁", "🙁", "😳", "😳", "😉", "😉", "😐", "😐", "😜", "😜", "😍", "😍", "😆", "😆", "😆", "😆", "😢", "😢", "😎", "😎", "😎", "😎", "😎", "😎", "😠", "😠", "😠", "😠", "😴", "😴", "<br>"]
var symbols1 = ["O:)", "o:)", "o:-)", "O:-)", ":)", ":-)", ":D", ":-D", ":(", ":-(", ":o", ":-o", ";)", ";-)", ":|", ":-|", ":p", ":-p", ":*", ":-*", "xD", "XD", "x-D", "X-D", ";(", ";-(", "8-|", "8-)", "8-(", "B-|", "B-)", "B-(", "X-(", "x-(", "X(", "x(", "|-)", "|)", " .."];


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