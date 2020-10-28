var n = 1;

function main() {
    iframe = document.getElementById("1");
    iframe.src = name_from_num(n);
    frame = document.getElementById("frame");
    frame.innerHTML = iframe.contentDocument || iframe.contentWindow.document;
    n += 1;
    if (n > 29) {n = 1;}
    setTimeout(main, 100);
}

function name_from_num(n) {
    s = n.toLocaleString('en', {minimumIntegerDigits:4,useGrouping:false});
    return `${s}.jpg.html`;
}
