//thanks to https://ranksheet.com/solutions/kb-jQuery/2169_Easily-convert-text-emoticons-to-image-emoticons.aspx
//thanks to https://github.com/watson/base64-emoji
//thanks to https://thekevinscott.com/emojis-in-javascript/
//http://www.emoticonr.com/emoticons/
//Waterval-project.com
//https://en.wikipedia.org/wiki/List_of_emoticons
//
//var emo1 = ["ðŸ˜‡", "ðŸ˜‡", "ðŸ˜‡", "ðŸ˜‡", "ðŸ˜Š", "ðŸ˜Š", "ðŸ˜ƒ", "ðŸ˜ƒ", "ðŸ™", "ðŸ™", "ðŸ˜³", "ðŸ˜³", "ðŸ˜‰", "ðŸ˜‰", "ðŸ˜", "ðŸ˜", "ðŸ˜œ", "ðŸ˜œ", "ðŸ˜", "ðŸ˜", "ðŸ˜†", "ðŸ˜†", "ðŸ˜†", "ðŸ˜†", "ðŸ˜¢", "ðŸ˜¢", "ðŸ˜Ž", "ðŸ˜Ž", "ðŸ˜Ž", "ðŸ˜Ž", "ðŸ˜Ž", "ðŸ˜Ž", "ðŸ˜ ", "ðŸ˜ ", "ðŸ˜ ", "ðŸ˜ ", "ðŸ˜´", "ðŸ˜´", "<br>"]
//var emo1 = ["\u😇}", "\u{😇}", "\u{😇}", "\u{😇}", "\u{😊}", "\u{😊}", "\u{😃}", "\u{😃}", "\u{🙁}", "\u{🙁}", "\u{😳}", "\u{😳}", "\u{😉}", "\u{😉}", "\u{😐}", "\u{😐}", "\u{😜}", "\u{😜}", "\u{😍}", "\u{😍}", "\u{😆}", "\u{😆}", "\u{😆}", "\u{😆}", "\u{😢}", "\u{😢}", "\u{😎}", "\u{😎}", "\u{😎}", "\u{😎}", "\u{😎}", "\u{😎}", "\u{😠}", "\u{😠}", "\u{😠}", "\u{😠}", "\u{😴}", "\u{😴}", "<br>"]
var emo1 = ["😇", "😇", "😇", "😇", "😊", "😊", "😃", "😃", "🙁", "🙁", "😳", "😳", "😉", "😉", "😐", "😐", "😜", "😜", "😍", "😍", "😆", "😆", "😆", "😆", "😢", "😢", "😎", "😎", "😎", "😎", "😎", "😎", "😠", "😠", "😠", "😠", "😴", "😴", "<br>"]
//var emo1 = ["\u😇", "\u😇", "\u😇", "\u😇", "\u😊", "\u😊", "\u😃", "\u😃", "\u🙁", "\u🙁", "\u😳", "\u😳", "\u😉", "\u😉", "\u😐", "\u😐", "\u😜", "\u😜", "\u😍", "\u😍", "\u😆", "\u😆", "\u😆", "\u😆", "\u😢", "\u😢", "\u😎", "\u😎", "\u😎", "\u😎", "\u😎", "\u😎", "\u😠", "\u😠", "\u😠", "\u😠", "\u😴", "\u😴", "<br>"]
var symbols1 = ["O:)", "o:)", "o:-)", "O:-)", ":)", ":-)", ":D", ":-D", ":(", ":-(", ":o", ":-o", ";)", ";-)", ":|", ":-|", ":p", ":-p", ":*", ":-*", "xD", "XD", "x-D", "X-D", ";(", ";-(", "8-|", "8-)", "8-(", "B-|", "B-)", "B-(", "X-(", "x-(", "X(", "x(", "|-)", "|)", " .."];

 // Emoji to decimal representation
// "😀".codePointAt(0) 128512

// Decimal to emoji
//String.fromCodePoint(128512) "😀"

// Decimal to hexadecimal
//toUTF16(128512)  "\uD83D\uDE00"

// Hexadecimal to emoji
//"\uD83D\uDE00" "😀"

DEFAULTpageHeight=579
DEFAULTdivHeight=''; //height:200px;  

function extrasave(){
}
function extraShow(){
  //console.log('show')
}
function extraDown(){
       $("#pen").html('&#128190;')
}
function initextra(){
  var container = $("#texto");
	container.hide();
  //mode *= -1
  $('#accion').show()

  showw()
}

function extra(){
	$('#accion').append('')
}


