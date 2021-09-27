function match(){
    var str = document.getElementById("xID").value;
    var patt = new RegExp(document.getElementById("yID").value);
    var result = patt.test(str);
    document.getElementById("resultID").innerHTML = result
}