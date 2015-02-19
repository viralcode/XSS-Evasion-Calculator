/* Coded by jijojohn @ singlelinelogics */
/* For education purposes only */
$(document).ready(function(){

$("#inputs").watermark("Enter the text for encoding");
$(".button_example").click(function(){

if($("#inputs").val() == '')
{
alert("Please enter the text for encoding");
$("#inputs").css("background-color","#ccc");
$("#inputs").click(function(){$("#inputs").css("background-color","#fff")});
}
else
{
	$("body").css("height","410");
	$("#select").show();
}
$("#select").change(function(){
if($("#select").val() == "DECIMAL ~ HTML")
{
$("#areas").show();
$("#areas").text(convertToUnicode($("#inputs").val()));
$("#select").fadeOut();
$("#inputs").fadeOut();
$(".button_example").text("Reload extension").bind("click",function(){location.reload()});

}
else if($("#select").val() == "HEX ~ URL")
{
$("#areas").show();
$("#areas").text(convertToHex($("#inputs").val()));
$("#select").fadeOut();
$("#inputs").fadeOut();
$(".button_example").text("Reload extension").bind("click",function(){location.reload()});
}
else if($("#select").val() == "HEX ~ HTML")
{
$("#areas").show();
$("#areas").text(convertToHexHTML($("#inputs").val()));
$("#select").fadeOut();
$("#inputs").fadeOut();
$(".button_example").text("Reload extension").bind("click",function(){location.reload()});
}
else if($("#select").val() == "Base 64")
{
$("#areas").show();
$("#areas").text(encodeBase64($("#inputs").val()));
$("#select").fadeOut();
$("#inputs").fadeOut();
$(".button_example").text("Reload extension").bind("click",function(){location.reload()});
}

else if($("#select").val() == "Char Code")
{
$("#areas").show();
$("#areas").text(runCharCodeAt($("#inputs").val()));
$("#select").fadeOut();
$("#inputs").fadeOut();
$(".button_example").text("Reload extension").bind("click",function(){location.reload()});
}
	

});	


$("#areas").click(function(){$("#areas").select().focus()});

function runCharCodeAt(input)
{
	output = "";
	for(i=0; i<input.length; ++i)
	{
		if(output != "") output += ", ";
		output += input.charCodeAt(i);
	}
	return output;
}

function convertToUnicode(source) { 
  result = ''; 
  for (i=0; i<source.length; i++) {
    result += '&#' + source.charCodeAt(i); 
  }
  return result; 
} 

function convertToHex(num) { 
  var hex = ''; 
  for (i=0;i<num.length;i++) {
    if (num.charCodeAt(i).toString(16).toUpperCase().length < 2) {
      hex += "%0" + num.charCodeAt(i).toString(16).toUpperCase(); 
    } else {
      hex += "%" + num.charCodeAt(i).toString(16).toUpperCase(); 
    }
  }
  return hex; 
} 
function convertToHexHTML(num) { 
  var hexhtml = ''; 
  for (i=0;i<num.length;i++) {
    if (num.charCodeAt(i).toString(16).toUpperCase().length < 2) {
      hexhtml += "&#x0" + num.charCodeAt(i).toString(16).toUpperCase() + ";"; 
    } else {
      hexhtml += "&#x" + num.charCodeAt(i).toString(16).toUpperCase() + ";"; 
    }
  }
  return hexhtml; 
} 
var base64Chars = new Array(
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z','a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v',
    'w','x','y','z','0','1','2','3',
    '4','5','6','7','8','9','+','/'
);

var reverseBase64Chars = new Array();
for (var i=0; i < base64Chars.length; i++){
    reverseBase64Chars[base64Chars[i]] = i;
}

var base64Str;
var base64Count;
function setBase64Str(str){
    base64Str = str;
    base64Count = 0;
}
function readBase64(){    
    if (!base64Str) return -1;
    if (base64Count >= base64Str.length) return -1;
    var c = base64Str.charCodeAt(base64Count) & 0xff;
    base64Count++;
    return c;
}
function encodeBase64(str){
    setBase64Str(str);
    var result = '';
    var inBuffer = new Array(3);
    var lineCount = 0;
    var done = false;
    while (!done && (inBuffer[0] = readBase64()) != -1){
        inBuffer[1] = readBase64();
        inBuffer[2] = readBase64();
        result += (base64Chars[ inBuffer[0] >> 2 ]);
        if (inBuffer[1] != -1){
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
            if (inBuffer[2] != -1){
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
                result += (base64Chars [inBuffer[2] & 0x3F]);
            } else {
                result += (base64Chars [((inBuffer[1] << 2) & 0x3c)]);
                result += ('=');
                done = true;
            }
        } else {
            result += (base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
            result += ('=');
            result += ('=');
            done = true;
        }
        lineCount += 4;
        if (lineCount >= 76){
            result += ('\n');
            lineCount = 0;
        }
    }
    return result;
}







});



$("#rr .help").click(function(e){
	e.preventDefault();
	$("#info").slideDown();
	
});
$("#rar").click(function(){
	$("#info").slideUp();
});

$("#logo").click(function(){
$("body").html("<img src=\"src.images/logo.png\" style=\"margin-left:80px\"> <br/><center><marquee  behavior=\"scroll\" direction=\"up\">Singlelinelogics Team<br/><br/><u>Software Engineers</u><br/>Jijojohn<br/>Manzoor Samad<br/><br/><u>Graphics</u><br/><br/>Adarsh Soman<br/>Devanand<br/><br/><u>Thanks</u><br/><br/>TheHackernews<br/>Nikhil Karakkattu</marquee></center>");
});

});