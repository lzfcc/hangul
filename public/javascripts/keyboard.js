let hangul = (function Hangul() {
    let hangulHash = {
        'g': 'ㅎ',
        'G': 'ㅎ',
        'q': 'ㅂ',
        'Q': 'ㅃ',
        'n': 'ㅜ',
        'N': 'ㅜ',
        'b': 'ㅠ',
        'B': 'ㅠ',
        'z': 'ㅋ',
        'Z': 'ㅋ',
        'p': 'ㅔ',
        'P': 'ㅖ',
        'e': 'ㄷ',
        'E': 'ㄸ',
        'f': 'ㄹ',
        'F': 'ㄹ',
        'a': 'ㅁ',
        'A': 'ㅁ',
        'd': 'ㅇ',
        'D': 'ㅇ',
        'm': 'ㅡ',
        'M': 'ㅡ',
        'l': 'ㅣ',
        'L': 'ㅣ',
        'c': 'ㅊ',
        'C': 'ㅊ',
        'j': 'ㅓ',
        'J': 'ㅓ',
        'r': 'ㄱ',
        'R': 'ㄲ',
        'h': 'ㅗ',
        'H': 'ㅗ',
        'v': 'ㅍ',
        'V': 'ㅍ',
        'o': 'ㅐ',
        'O': 'ㅒ',
        'x': 'ㅌ',
        'X': 'ㅌ',
        'w': 'ㅈ',
        'W': 'ㅉ',
        'k': 'ㅏ',
        'K': 'ㅏ',
        'y': 'ㅛ',
        'Y': 'ㅛ',
        't': 'ㅅ',
        'T': 'ㅆ',
        'u': 'ㅕ',
        'U': 'ㅕ',
        'i': 'ㅑ',
        'I': 'ㅑ',
        's': 'ㄴ',
        'S': 'ㄴ'
    },
    initialTable = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],

    medialTable = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"],

    finalTable = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],

    medialCombine = {
        "ㅗ": {
            "ㅏ": "ㅘ",
            "ㅐ": "ㅙ",
            "ㅣ": "ㅚ"
        },
        "ㅜ": {
            "ㅓ": "ㅝ",
            "ㅔ": "ㅞ",
            "ㅣ": "ㅟ"
        },
        "ㅡ": {
            "ㅣ": "ㅢ"
        }
    },
    finalPart = {
        "ㄳ": ["ㄱ", "ㅅ"],
        "ㄵ": ["ㄴ", "ㅈ"],
        "ㄶ": ["ㄴ", "ㅎ"],
        "ㄺ": ["ㄹ", "ㄱ"],
        "ㄻ": ["ㄹ", "ㅁ"],
        "ㄼ": ["ㄹ", "ㅂ"],
        "ㄽ": ["ㄹ", "ㅅ"],
        "ㄾ": ["ㄹ", "ㅌ"],
        "ㄿ": ["ㄹ", "ㅍ"],
        "ㅀ": ["ㄹ", "ㅎ"],
        "ㅄ": ["ㅂ", "ㅅ"]
    },
    finalCombine = {
        "ㄱ": {
            "ㅅ": "ㄳ"
        },
        "ㄴ": {
            "ㅈ": "ㄵ",
            "ㅎ": "ㄶ"
        },
        "ㄹ": {
            "ㄱ": "ㄺ",
            "ㅁ": "ㄻ",
            "ㅂ": "ㄼ",
            "ㅅ": "ㄽ",
            "ㅌ": "ㄾ",
            "ㅍ": "ㄿ",
            "ㅎ": "ㅀ"
        },
        "ㅂ": {
            "ㅅ": "ㅄ"
        }
    },
    jamoCode = {
        "ㄱ": 12593,
        "ㄲ": 12594,
        "ㄳ": 12595,
        "ㄴ": 12596,
        "ㄵ": 12597,
        "ㄶ": 12598,
        "ㄷ": 12599,
        "ㄸ": 12600,
        "ㄹ": 12601,
        "ㄺ": 12602,
        "ㄻ": 12603,
        "ㄼ": 12604,
        "ㄽ": 12605,
        "ㄾ": 12606,
        "ㄿ": 12607,
        "ㅀ": 12608,
        "ㅁ": 12609,
        "ㅂ": 12610,
        "ㅃ": 12611,
        "ㅄ": 12612,
        "ㅅ": 12613,
        "ㅆ": 12614,
        "ㅇ": 12615,
        "ㅈ": 12616,
        "ㅉ": 12617,
        "ㅊ": 12618,
        "ㅋ": 12619,
        "ㅌ": 12620,
        "ㅍ": 12621,
        "ㅎ": 12622,
        "ㅏ": 12623,
        "ㅐ": 12624,
        "ㅑ": 12625,
        "ㅒ": 12626,
        "ㅓ": 12627,
        "ㅔ": 12628,
        "ㅕ": 12629,
        "ㅖ": 12630,
        "ㅗ": 12631,
        "ㅘ": 12632,
        "ㅙ": 12633,
        "ㅚ": 12634,
        "ㅛ": 12635,
        "ㅜ": 12636,
        "ㅝ": 12637,
        "ㅞ": 12638,
        "ㅟ": 12639,
        "ㅠ": 12640,
        "ㅡ": 12641,
        "ㅢ": 12642,
        "ㅣ": 12643
    };

    function composeHangul(editor, key) {

        if (!/[a-zA-Z]/.test(key)) {  //input not a hangul
            editor.value += key;
            return;
        }
        let text = editor.value,
            input = hangulHash[key];

        editor.value += input;

        let lastCharCode = text.charCodeAt(text.length - 1),
            inputCharCode = input.charCodeAt(0),
            newCharCode,
            lastInitialCode,
            lastMedialCode,
            lastFinalCode;

        //if the last character is a JaEum
        if (12593 <= lastCharCode && lastCharCode <= 12622) {
            if (12623 <= inputCharCode && inputCharCode <= 12643) {
                newCharCode = 44032 + initialTable.indexOf(text[text.length - 1]) * 588 + medialTable.indexOf(input) * 28;

                editor.value = text.substring(0, text.length - 1) + unicodeDecode(newCharCode);
            }
        }
        //if the last character is complete
        else if (44032 <= lastCharCode && lastCharCode <= 55203) {
            [lastFinalCode, lastMedialCode, lastInitialCode] = computeCode(lastCharCode);
            //console.log(lastCharCode, lastInitialCode, lastMedialCode, lastFinalCode);

            //if the last character has no batchim
            if (lastFinalCode === 0) {
                if (12593 <= inputCharCode && inputCharCode <= 12622 && finalTable.indexOf(input) >= 0) { //JaEum which can be batchim
                    newCharCode = lastCharCode + finalTable.indexOf(input);
                    editor.value = text.substring(0, text.length - 1) + unicodeDecode(newCharCode);
                } else { //MoEum
                    let lastMedialChar = medialTable[lastMedialCode];
                    if (typeof(medialCombine[lastMedialChar]) !== 'undefined' && typeof(medialCombine[lastMedialChar][input]) !== 'undefined') {
                        lastCharCode = lastCharCode - 28 * (lastMedialCode - medialTable.indexOf(medialCombine[lastMedialChar][input]));
                        editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode);
                    }
                }
            }
            //if the last character has a batchim
            else {
                let lastFinalChar = finalTable[lastFinalCode];
                //key a MoEum
                if (12623 <= inputCharCode && inputCharCode <= 12643) {
                    //single batchim
                    if (typeof(finalPart[lastFinalChar]) === 'undefined') {
                        newCharCode = 44032 + 588 * initialTable.indexOf(lastFinalChar) + 28 * medialTable.indexOf(input);
                        lastCharCode -= lastFinalCode;
                    }
                    //double batchim
                    else {
                        let lp = finalPart[lastFinalChar][0],
                            rp = finalPart[lastFinalChar][1];
                        newCharCode = 44032 + 588 * initialTable.indexOf(rp) + 28 * medialTable.indexOf(input);
                        lastCharCode = lastCharCode - lastFinalCode + finalTable.indexOf(lp);
                    }

                    editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode) + unicodeDecode(newCharCode);
                }
                //key a JaEum
                else {
                    if (typeof(finalCombine[lastFinalChar]) !== 'undefined' && typeof(finalCombine[lastFinalChar][input]) !== 'undefined') {
                        lastCharCode = lastCharCode - lastFinalCode + finalTable.indexOf(finalCombine[lastFinalChar][input]);
                        editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode);

                    }
                }

            }
        }

    }

    function decomposeHangul(editor) {
        let text = editor.value,
            lastCharCode = text.charCodeAt(text.length - 1),
            newCharCode,
            lastInitialCode,
            lastMedialCode,
            lastFinalCode;

        //if the last character is complete
        if (44032 <= lastCharCode && lastCharCode <= 55203) {
            [lastFinalCode, lastMedialCode, lastInitialCode] = computeCode(lastCharCode);

            //if the last character has no batchim
            if (lastFinalCode === 0) {
                let lastInitialChar = initialTable[lastInitialCode];
                editor.value = text.substring(0, text.length - 1) + lastInitialChar;
            }
            //if the last character has a batchim
            else {
                newCharCode = lastCharCode - lastFinalCode;
                editor.value = text.substring(0, text.length - 1) + unicodeDecode(newCharCode);
            }
        } else {
            editor.value = text.substring(0, text.length - 1);
        }
    }

    function unicodeDecode(ucode) {
        //var str = decodeURIComponent("\\u" + ucode.toString(16));  //not work
        return String.fromCharCode(ucode);
    }

    function computeCode(ucode) {
        let f = (ucode - 44032) % 28,
            m = (ucode - 44032 - f) % 588 / 28,
            i = parseInt((ucode - 44032) / 588);
        return [f, m, i];
    }

    return {
        composeHangul,
        unicodeDecode,
        decomposeHangul
    }
}());


var editor = document.querySelector('textarea');

editor.addEventListener("keydown", function(event) {
    //console.log(event);
    //event.preventDefault();  //should not appear here

    var text = editor.value;
    switch (event.code) {
        case "Backspace":
            hangul.decomposeHangul(editor);//prevent from printing English letter. !!!text.length has problem!!!
            event.preventDefault();
            break;
        case "Space":
            editor.value += " ";
            break;
        case "Enter":
            editor.value += "\n";
            break;
        case "ShiftLeft":
        case "ShiftRight":
        case "CtrlLeft":
        case "CtrlRight":
        case "AltLeft":
        case "AltRight":
            break;
        default:
            hangul.composeHangul(editor, event.key);
            event.preventDefault();
    }

});
