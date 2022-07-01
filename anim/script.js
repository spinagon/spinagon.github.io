var n = 1;

function main() {
    id = name_from_num(n);
    n += 1;
    if (n > 29) {n = 1;}
    id_next = name_from_num(n);
    document.getElementById(id).style = "display:none";
    document.getElementById(id_next).style = "display:block";
    setTimeout(main, 100);
}

function name_from_num(n) {
    s = n.toLocaleString('en', {minimumIntegerDigits:4,useGrouping:false});
    return s;
}
