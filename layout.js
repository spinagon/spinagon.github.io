const layout = {
    "a": "ф",
    "`": "ё",
    "q": "й",
    "w": "ц",
    "e": "у",
    "r": "к",
    "t": "е",
    "y": "н",
    "u": "г",
    "i": "ш",
    "o": "щ",
    "p": "з",
    "[": "х",
    "]": "ъ",
    "a": "ф",
    "s": "ы",
    "d": "в",
    "f": "а",
    "g": "п",
    "h": "р",
    "j": "о",
    "k": "л",
    "l": "д",
    ";": "ж",
    "'": "э",
    "z": "я",
    "x": "ч",
    "c": "с",
    "v": "м",
    "b": "и",
    "n": "т",
    "m": "ь",
    ",": "б",
    ".": "ю",
    "/": ".",
    "~": "Ё",
    "{": "Х",
    "}": "Ъ",
    ":": "Ж",
    "\"": "Э",
    "<": "Б",
    ">": "Ю",
    "?": ","
}

function translate (match) {
    if (layout[match] === undefined) {
        return match;
    } else {
        return layout[match];
    }
}

window.onload = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    input.oninput = () => {
        output.innerHTML = input.value.replace(/./g, translate);
}
}