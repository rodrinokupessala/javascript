/*const stringSuspeita = "<script>alert('Você foi hackeado!')</script>";

if (/<\s*script\b[^>]*>(.*?)<\s*\/\s*script\s*>/gi.test(stringSuspeita)) {
  console.log("Possível tentativa de XSS detectada!");
} else {
  console.log("String segura 1.");
}

  */
function detectarAtaqueXSS(string) {
    const regex = /<svg\/onload=['"]\+\/\w{1,30}=1\/\+\/\[\]\+alert\(1\)['"]>/gi;
    return regex.test(string);
  }
  
  const stringSuspeita = '<svg/onload=\'+/"/+/onmouseover=1/+/[*/[]/+alert(1)//\'>';
  if (detectarAtaqueXSS(stringSuspeita)) {
    console.log("Possível tentativa de XSS detectada!");
  } else {
    console.log("String segura.");
  }
  
  function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
        return '&#'+c.charCodeAt(0)+';';
    });
}
let xssEndiding=`¼script¾alert(¢XSS¢)¼/script¾`
let xss=`<STYLE>.XSS{background-image:url("javascript:alert('XSS')");}</STYLE><A CLASS=XSS>`
function jsEscape(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
        return '\\u'+('0000'+c.charCodeAt(0).toString(16)).slice(-4);
    });
}
console.log(jsEscape(xssEndiding))
//console.log(htmlEncode(stringSuspeita))