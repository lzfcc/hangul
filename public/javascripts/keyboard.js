'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var hangul = function Hangul() {
    var hangulHash = {
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
    };

    function composeHangul(editor, key) {

        if (!/[a-zA-Z]/.test(key)) {
            //input not a hangul
            editor.value += key;
            return;
        }
        var text = editor.value,
            input = hangulHash[key];

        editor.value += input;

        var lastCharCode = text.charCodeAt(text.length - 1),
            inputCharCode = input.charCodeAt(0),
            newCharCode = void 0,
            lastInitialCode = void 0,
            lastMedialCode = void 0,
            lastFinalCode = void 0;

        //if the last character is a JaEum
        if (12593 <= lastCharCode && lastCharCode <= 12622) {
            if (12623 <= inputCharCode && inputCharCode <= 12643) {
                newCharCode = 44032 + initialTable.indexOf(text[text.length - 1]) * 588 + medialTable.indexOf(input) * 28;

                editor.value = text.substring(0, text.length - 1) + unicodeDecode(newCharCode);
            }
        }
        //if the last character is complete
        else if (44032 <= lastCharCode && lastCharCode <= 55203) {
                //console.log(lastCharCode, lastInitialCode, lastMedialCode, lastFinalCode);

                //if the last character has no batchim
                var _computeCode = computeCode(lastCharCode);

                var _computeCode2 = _slicedToArray(_computeCode, 3);

                lastFinalCode = _computeCode2[0];
                lastMedialCode = _computeCode2[1];
                lastInitialCode = _computeCode2[2];
                if (lastFinalCode === 0) {
                    if (12593 <= inputCharCode && inputCharCode <= 12622 && finalTable.indexOf(input) >= 0) {
                        //JaEum which can be batchim
                        newCharCode = lastCharCode + finalTable.indexOf(input);
                        editor.value = text.substring(0, text.length - 1) + unicodeDecode(newCharCode);
                    } else {
                        //MoEum
                        var lastMedialChar = medialTable[lastMedialCode];
                        if (typeof medialCombine[lastMedialChar] !== 'undefined' && typeof medialCombine[lastMedialChar][input] !== 'undefined') {
                            lastCharCode = lastCharCode - 28 * (lastMedialCode - medialTable.indexOf(medialCombine[lastMedialChar][input]));
                            editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode);
                        }
                    }
                }
                //if the last character has a batchim
                else {
                        var lastFinalChar = finalTable[lastFinalCode];
                        //key a MoEum
                        if (12623 <= inputCharCode && inputCharCode <= 12643) {
                            //single batchim
                            if (typeof finalPart[lastFinalChar] === 'undefined') {
                                newCharCode = 44032 + 588 * initialTable.indexOf(lastFinalChar) + 28 * medialTable.indexOf(input);
                                lastCharCode -= lastFinalCode;
                            }
                            //double batchim
                            else {
                                    var lp = finalPart[lastFinalChar][0],
                                        rp = finalPart[lastFinalChar][1];
                                    newCharCode = 44032 + 588 * initialTable.indexOf(rp) + 28 * medialTable.indexOf(input);
                                    lastCharCode = lastCharCode - lastFinalCode + finalTable.indexOf(lp);
                                }

                            editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode) + unicodeDecode(newCharCode);
                        }
                        //key a JaEum
                        else {
                                if (typeof finalCombine[lastFinalChar] !== 'undefined' && typeof finalCombine[lastFinalChar][input] !== 'undefined') {
                                    lastCharCode = lastCharCode - lastFinalCode + finalTable.indexOf(finalCombine[lastFinalChar][input]);
                                    editor.value = text.substring(0, text.length - 1) + unicodeDecode(lastCharCode);
                                }
                            }
                    }
            }
    }

    function decomposeHangul(editor) {
        var text = editor.value,
            lastCharCode = text.charCodeAt(text.length - 1),
            newCharCode = void 0,
            lastInitialCode = void 0,
            lastMedialCode = void 0,
            lastFinalCode = void 0;

        //if the last character is complete
        if (44032 <= lastCharCode && lastCharCode <= 55203) {

            //if the last character has no batchim
            var _computeCode3 = computeCode(lastCharCode);

            var _computeCode4 = _slicedToArray(_computeCode3, 3);

            lastFinalCode = _computeCode4[0];
            lastMedialCode = _computeCode4[1];
            lastInitialCode = _computeCode4[2];
            if (lastFinalCode === 0) {
                var lastInitialChar = initialTable[lastInitialCode];
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
        var f = (ucode - 44032) % 28,
            m = (ucode - 44032 - f) % 588 / 28,
            i = parseInt((ucode - 44032) / 588);
        return [f, m, i];
    }

    return {
        composeHangul: composeHangul,
        unicodeDecode: unicodeDecode,
        decomposeHangul: decomposeHangul
    };
}();

var editor = document.querySelector('textarea');
editor.value = localStorage.getItem("hangul") || "";
editor.focus();

var doQuery = false;

editor.addEventListener("keydown", function (event) {
    console.log(event);
    //event.preventDefa.keyult();  //should not appear here

    var text = editor.value;
    if (event.metaKey || event.key === "Process" || event.key === "Unidentified") {} else if (event.code === "Backspace" || event.key === "Backspace") {
        hangul.decomposeHangul(editor);
        event.preventDefault();
    } else if (event.code === "Space" || event.key === " ") {
        editor.value += " ";
        event.preventDefault();
    } else if (event.code === "Enter" || event.key == "Enter") {
        event.preventDefault();
    } else if ((event.code || event.key).match(/Shift|Ctrl|Alt(Left|Right)?/)) {
        event.preventDefault();
    } else if (/F\d+/.test(event.key)) {} else if ((event.code || event.key).match(/(Arrow)?Left|Right|Up|Down/)) {} else {
        hangul.composeHangul(editor, event.key);
        event.preventDefault();
    }

    doQuery = true;
});

setInterval(function () {
    localStorage.setItem("hangul", editor.value);
}, 5000);

setInterval(function () {
    if (!doQuery || editor.value === "") {
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                document.getElementById("dictionary").innerHTML = xhr.responseText;
            } else {
                console.log("Request not successful: " + xhr.status);
            }
        }
    };
    xhr.open('GET', '/crawler?q=' + editor.value);
    xhr.send();
    doQuery = false;
}, 3000);