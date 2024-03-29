let hangul = (function Hangul() {
    const hangulHash = {
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
        //let str = decodeURIComponent("\\u" + ucode.toString(16));  //not work
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
    };
})();

(function(){
    let editor = document.querySelector('textarea');
    editor.value = localStorage.getItem("hangul") || "";
    editor.focus();

    let doQuery = false;

    editor.addEventListener("keydown", function(event) {
        //console.log(event);
        //event.preventDefa.keyult();  //should not appear here

        let text = editor.value;
        if (event.metaKey || event.key === "Process" || event.key === "Unidentified") {
        } else if (event.code === "Backspace" || event.key === "Backspace") {
            hangul.decomposeHangul(editor);
            event.preventDefault();
        } else if (event.code === "Space" || event.key === " ") {
            editor.value += " ";
            event.preventDefault();
        } else if (event.code === "Enter" || event.key == "Enter") {
            event.preventDefault();
        } else if ((event.code || event.key).match(/Shift|Ctrl|Alt(Left|Right)?/)) {
            event.preventDefault();
        } else if (/F\d+/.test(event.key)) {}
        else if ((event.code || event.key).match(/(Arrow)?Left|Right|Up|Down/)) {
        } else{
            hangul.composeHangul(editor, event.key);
            event.preventDefault();
        }
        doQuery = true;
    });


    $(".cf li").on("click", function(event){
        let key = $(this).find("span").text(); //event.currentTarget.childNodes[1].childNode[0].innerText;
        console.log(event.currentTarget);
        console.log(key);
        if (key === "Delete") {
            hangul.decomposeHangul(editor);
        } else if (key === " ") {
            editor.value += " ";
        } else if (key.match(/return|shift|option|command|fn|caps/) || /F\d+/.test(key)) {
        } else{
            hangul.composeHangul(editor, key);
        }
        doQuery = true;
    });
    
    //持久化
    setInterval(() => {
        localStorage.setItem("hangul", editor.value);
    }, 10000);
    
    //editor.onchange = ...
    //editor.addEventListener("input", () => {

    // });

    // debounce函数用来包裹我们的事件
    function debounce(fn, delay) {
      // 持久化一个timer
        let timer = null;
      // 闭包可以获取到timer
        return function() {
        // 通过函数获取到作用域和参数列表
        // 通过 'this' 和 'arguments'
            let context = this;
            let args = arguments;
        // 如果事件被触发，清除timer并重新开始计时
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, delay);
        }
    }
    
    editor.addEventListener('keydown', debounce(newSearch, 1000));
    
    function newSearch(){
        console.log('searching...');
        if (editor.value === '') return;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    document.getElementById("dictionary").childNodes[1].innerHTML = xhr.responseText;
                } else {
                    console.log("Request not successful: " + xhr.status);
                }
            }
        };
        xhr.open('GET', '/crawler?q=' + editor.value);
        xhr.send();
    }

    let keyboard = document.querySelectorAll(".keyboard");
    setTimeout(() => {
        $(keyboard).addClass("show");
    }, 500);
   //keyboard.addEventListener("transitionend", (e) => {
        // let attrBottom = $(keyboard).css("bottom");
        // let attrBottomNum = Number(attrBottom.substr(0, attrBottom.length - 2));
        // console.log(attrBottomNum);
    //});
})();
