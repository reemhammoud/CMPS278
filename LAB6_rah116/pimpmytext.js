function $(id){
    return document.getElementById(id);
}
function fontSize() {
    $("sampletext").style.fontSize = "24pt";
}

function textStyle() {
    if ($("pimp").checked) {
        $("sampletext").style.fontWeight = "bold";
        $("sampletext").style.textDecoration = "underline blink";
        $("sampletext").style.color = "green";
        $("sampletext").style.fontFamily = "Fantasy";
        $("sampletext").style.backgroundColor = "lightgrey";
    } else {
        $("sampletext").style.fontWeight = "normal";
        $("sampletext").style.textDecoration = "none";
        $("sampletext").style.color = "black";
        $("sampletext").style.backgroundColor = "white";
        $("sampletext").style.fontFamily = "normal";
    }
}

function snoopify() {
    $("sampletext").value = $("sampletext").value.toUpperCase();
    $("sampletext").value = $("sampletext").value.split(".").join("-izzle.");
}

