var n = 1;

function main() {
    iframe = document.getElementById("1");
    iframe.src = name_from_num(n);
    frame = document.getElementById("frame");
    page = iframe.contentDocument || iframe.contentWindow.document;
    frame.innerHTML = page.getElementsByClassName('ascii')[0].innerHTML;
    n += 1;
    if (n > 29) {n = 1;}
    setTimeout(main, 100);
}

function name_from_num(n) {
    s = n.toLocaleString('en', {minimumIntegerDigits:4,useGrouping:false});
    return `${s}.jpg.html`;
}
