/**
 * Created by Administrator on 2016/6/11.
 */
/*window.onload = function{
 document.getElementById('hangul').innerHtml = "";
 }*/
//document.getElementById("hangul").innerHTML = "Hello &#54620&#44397.";
//https://www.branah.com/korean
//https://en.wikipedia.org/wiki/Hangul_Jamo_(Unicode_block)
var hanHash = {
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
};
var jaeumHash = {
    "ㄱ": 0,
    "ㄲ": 1,
    "ㄴ": 2,
    "ㄷ": 3,
    "ㄸ": 4,
    "ㄹ": 5,
    "ㅁ": 6,
    "ㅂ": 7,
    "ㅃ": 8,
    "ㅅ": 9,
    "ㅆ": 10,
    "ㅇ": 11,
    "ㅈ": 12,
    "ㅉ": 13,
    "ㅊ": 14,
    "ㅋ": 15,
    "ㅌ": 16,
    "ㅍ": 17,
    "ㅎ": 18
};
var moeumHash = {
    "ㅏ": 0,
    "ㅐ": 1,
    "ㅑ": 2,
    "ㅒ": 3,
    "ㅓ": 4,
    "ㅔ": 5,
    "ㅕ": 6,
    "ㅖ": 7,
    "ㅗ": 8,
    "ㅘ": 9,
    "ㅙ": 10,
    "ㅚ": 11,
    "ㅛ": 12,
    "ㅜ": 13,
    "ㅝ": 14,
    "ㅞ": 15,
    "ㅟ": 16,
    "ㅠ": 17,
    "ㅡ": 18,
    "ㅢ": 19,
    "ㅣ": 20
};
var batchimHash = {
    "ㄱ": 1,
    "ㄲ": 2,
    "ㄳ": 3,
    "ㄴ": 4,
    "ㄵ": 5,
    "ㄶ": 6,
    "ㄷ": 7,
    "ㄹ": 8,
    "ㄺ": 9,
    "ㄻ": 10,
    "ㄼ": 11,
    "ㄽ": 12,
    "ㄾ": 13,
    "ㄿ": 14,
    "ㅀ": 15,
    "ㅁ": 16,
    "ㅂ": 17,
    "ㅄ": 18,
    "ㅅ": 19,
    "ㅆ": 20,
    "ㅇ": 21,
    "ㅈ": 22,
    "ㅊ": 23,
    "ㅋ": 24,
    "ㅌ": 25,
    "ㅍ": 26,
    "ㅎ": 27
};

var moeumCombine = {
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
};

var batchimCombine = {
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

var jamoCode = {
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

function Stack() { //http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(data) {
    // increases the size of our storage
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[this._size++] = data;
};

Stack.prototype.top = function() {
    if (this._size) {
        return this._storage[this._size - 1];
    } else {
        console.log("Stack is empty!");
        return undefined;
    }
};

Stack.prototype.pop = function() {
    if (this._size) {
        var size = this._size - 1,
            deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    } else {
        console.log("Stack is empty!");
        return undefined;
    }
};

Stack.prototype.clear = function() {
    this._size = 0;
    this._storage = {};
};

var charStruct = function() {
    this.code = 0;
    this.keySeq = [];
    this.charSeq = [];
    this.state = [0, -1, -1]; //0不成字,1成字; -1无母音，0单母音，1复合母音; 无收音，0单收（子）音，1双收（子）音

    //(0,-1,0):单子音未成字（下一个字母为母音即可成字，如ㄱ）
    //(0,-1,1):复合子音（双收音）未成字（下一个字母为母音，收音右半边和母音成字，如ㄳ）
    //(0,0,-1):单母音未成字（当前母音为ㅏ/ㅐ/ㅑ/ㅒ/ㅓ/ㅔ/ㅕ/ㅖ/ㅛ/ㅠ/ㅣ时候，下一个字母无论为何都不成字）
    //(0,1,-1):复合母音未成字（下一个字母无论为何都不成字，如ㅘ）
    //(1,0,-1)(1,1,-1):无收音字（如가，下一字母为特定子音ㄱ/ㄲ/ㄴ/ㄷ/ㄹ/ㅁ/ㅂ/ㅅ/ㅆ/ㅇ/ㅈ/ㅊ/ㅋ/ㅌ/ㅍ/ㅎ可成字）
    //(1,0,0)(1,1,0):单收音字（如갈，有上一情况的ㄲ/ㄷ/ㅁ/ㅅ/ㅆ/ㅇ/ㅈ/ㅊ/ㅋ/ㅌ/ㅍ/ㅎ，下一个字母无论为何子音都不成字）
    //(1,0,1)(1,1,1):双收音字（如갋，下一个字母无论为何子音都不成字，为母音拆分）
};

new Vue({
    el: '#editor',
    data: {
        inputStack: new Stack(),
        hangul: '',
        charStack: new Stack(), //
        unicodeSeq: [],
        unicode: '&#54620&#44397'
    },
    methods: {

    },
    filters: {
        mapUnicode: function(s) {
            if (s === undefined) {
                return undefined;
            }
            var len = s.length;
            if (len == 0) {
                this.unicodeSeq = [];
                this.charStack.clear();
                this.inputStack.clear();
                return "";
            }

            var latest = s[len - 1];
            var latestHan = hanHash[latest];
            if (latestHan === undefined) { //输入了非韩语字母 /
                return this.unicode; //Logic Error!!!!!!!!!!!!
            }
            var latestIsJaeum = (jaeumHash[latestHan] !== undefined);


            if (len > this.inputStack._size) { //如果用户新增了字符

                this.inputStack.push(latest);

                if (this.charStack._size === 0) { //如果输入序列栈为空
                    var newStruct = new charStruct();
                    newStruct.keySeq.push(latestHan);
                    newStruct.charSeq.push(latestHan);
                    newStruct.code = jamoCode[latestHan];
                    if (latestIsJaeum === false) { //如果输入了一个母音
                        newStruct.state = [0, 0, -1];
                    } else {
                        newStruct.state = [0, -1, 0];
                    }
                    this.charStack.push(newStruct);
                    this.unicodeSeq.push(newStruct.code);
                } else {
                    var topStruct = this.charStack.top();
                    if (topStruct.state[0] === 0) { //未成字
                        if (topStruct.state[1] < 0) { //子音未成字[0,-1,x]

                            var topJaeum = topStruct.keySeq[topStruct.keySeq.length - 1];

                            if (topStruct.state[2] === 0) { //单子音未成字
                                if (latestIsJaeum === false) { //如果输入了一个母音
                                    topStruct = this.charStack.pop();
                                    topStruct.keySeq.push(latestHan);
                                    topStruct.charSeq.push(latestHan);

                                    topStruct.code = jaeumHash[topJaeum] * 588 + moeumHash[latestHan] * 28 + 44032;
                                    topStruct.state = [1, 0, -1]; //子母相遇成字
                                    this.charStack.push(topStruct);
                                    this.unicodeSeq.pop();
                                    this.unicodeSeq.push(topStruct.code);
                                } else { //如果又输入了一个子音
                                    if (topJaeum in batchimCombine && latestHan in batchimCombine[topJaeum]) { //可以组合成双收音
                                        topStruct = this.charStack.pop();
                                        topStruct.keySeq.push(latestHan);
                                        topStruct.charSeq.pop(); // === topJaeum
                                        var b = batchimCombine[topJaeum][latestHan];
                                        topStruct.charSeq.push(b);
                                        topStruct.code = jamoCode[b];
                                        topStruct.state[2] = 1; //双收音未成字
                                        this.charStack.push(topStruct);
                                        this.unicodeSeq.pop();
                                        this.unicodeSeq.push(topStruct.code);
                                    } else {
                                        var newStruct = new charStruct();
                                        newStruct.keySeq.push(latestHan);
                                        newStruct.charSeq.push(latestHan);
                                        newStruct.code = jamoCode[latestHan];
                                        newStruct.state = [0, -1, 0];
                                        this.charStack.push(newStruct);
                                        this.unicodeSeq.push(newStruct.code);
                                    }

                                }
                            } else { //双收（子）音未成字
                                if (latestIsJaeum === false) { //如果输入了一个母音
                                    topStruct = this.charStack.pop();
                                    topStruct.keySeq.pop();
                                    topStruct.charSeq.pop();
                                    topStruct.charSeq.push(topStruct.keySeq[topStruct.keySeq.length - 1])
                                    topStruct.code = jamoCode[topStruct.keySeq[topStruct.keySeq.length - 1]];
                                    topStruct.state = [0, -1, 0];
                                    this.charStack.push(topStruct);
                                    this.unicodeSeq.pop();
                                    this.unicodeSeq.push(topStruct.code);

                                    var newStruct = new charStruct();
                                    newStruct.keySeq.push(topJaeum);
                                    newStruct.keySeq.push(latestHan);
                                    newStruct.charSeq.push(topJaeum);
                                    newStruct.charSeq.push(latestHan);
                                    newStruct.code = jaeumHash[topJaeum] * 588 + moeumHash[latestHan] * 28 + 44032;
                                    newStruct.state = [1, 0, -1]; //子母相遇成字
                                    this.charStack.push(newStruct);
                                    this.unicodeSeq.push(newStruct.code);
                                } else { //如果又输入了一个子音
                                    var newStruct = new charStruct();
                                    newStruct.keySeq.push(latestHan);
                                    newStruct.charSeq.push(latestHan);
                                    newStruct.code = jamoCode[latestHan];
                                    newStruct.state = [0, -1, 0];
                                    this.charStack.push(newStruct);
                                    this.unicodeSeq.push(newStruct.code);
                                }
                            }

                        } else if (topStruct.state[1] === 0) { //[0,0,-1]单母音未成字
                            var topMoeum = topStruct.charSeq[topStruct.keySeq.length - 1];
                            if (!latestIsJaeum && topMoeum in moeumCombine && latestHan in moeumCombine[topMoeum]) { //如果输入了一个母音，又能组成复合母音
                                topStruct = this.charStack.pop();
                                topStruct.keySeq.push(latestHan);
                                topStruct.charSeq.pop();
                                var m = moeumCombine[topMoeum][latestHan];
                                topStruct.charSeq.push(m);
                                topStruct.code = jamoCode[m];
                                topStruct.state[1] = 1;
                                this.charStack.push(topStruct);
                                this.unicodeSeq.pop();
                                this.unicodeSeq.push(topStruct.code);
                            } else { //如果又输入了一个子音或者不能组合成复合母音的母音（情况同空栈输入）
                                var newStruct = new charStruct();
                                newStruct.keySeq.push(latestHan);
                                newStruct.charSeq.push(latestHan);
                                newStruct.code = jamoCode[latestHan];
                                if (latestIsJaeum === false) { //如果输入了一个母音
                                    newStruct.state = [0, 0, -1];
                                } else {
                                    newStruct.state = [0, -1, 0];
                                }
                                this.charStack.push(newStruct);
                                this.unicodeSeq.push(newStruct.code);
                            }
                        } else { //[0,1,-1]复合母音未成字（情况同空栈输入）
                            var newStruct = new charStruct();
                            newStruct.keySeq.push(latestHan);
                            newStruct.charSeq.push(latestHan);
                            newStruct.code = jamoCode[latestHan];
                            if (latestIsJaeum === false) { //如果输入了一个母音
                                newStruct.state = [0, 0, -1];
                            } else {
                                newStruct.state = [0, -1, 0];
                            }
                            this.charStack.push(newStruct);
                            this.unicodeSeq.push(newStruct.code);
                        }
                    } else { //已成字
                        if (topStruct.state[2] < 0) { //无收音字[1,x,-1]

                            var topMoeum = topStruct.keySeq[topStruct.keySeq.length - 1];
                            if (topStruct.state[1] === 0) { //单母音字[1,0,-1]
                                var topJaeum = topStruct.charSeq[0];
                                if (!latestIsJaeum) { //如果输入了一个母音，
                                    if (topMoeum in moeumCombine && latestHan in moeumCombine[topMoeum]) { //又能组成复合母音
                                        topStruct = this.charStack.pop();
                                        topStruct.keySeq.push(latestHan);
                                        topStruct.charSeq.pop();
                                        var m = moeumCombine[topMoeum][latestHan];
                                        topStruct.charSeq.push(m);
                                        topStruct.code = jaeumHash[topJaeum] * 588 + moeumHash[m] * 28 + 44032;
                                        topStruct.state[1] = 1;
                                        this.charStack.push(topStruct);
                                        this.unicodeSeq.pop();
                                        this.unicodeSeq.push(topStruct.code);
                                    } else { //(情况同空栈输入）
                                        var newStruct = new charStruct();
                                        newStruct.keySeq.push(latestHan);
                                        newStruct.charSeq.push(latestHan);
                                        newStruct.code = jamoCode[latestHan];
                                        newStruct.state = [0, 0, -1];
                                        this.charStack.push(newStruct);
                                        this.unicodeSeq.push(newStruct.code);
                                    }
                                } else { //如果输入了一个子音
                                    if (!(latestHan in batchimHash)) { //如果子音不能做收音（情况同空栈输入）
                                        var newStruct = new charStruct();
                                        newStruct.keySeq.push(latestHan);
                                        newStruct.charSeq.push(latestHan);
                                        newStruct.code = jamoCode[latestHan];
                                        newStruct.state = [0, -1, 0];
                                        this.charStack.push(newStruct);
                                        this.unicodeSeq.push(newStruct.code);
                                    } else { //子音可以做收音
                                        topStruct = this.charStack.pop();
                                        topStruct.keySeq.push(latestHan);
                                        topStruct.charSeq.push(latestHan);
                                        topStruct.code += batchimHash[latestHan];
                                        topStruct.state[2] = 0; //[1,0,0]
                                        this.charStack.push(topStruct);
                                        this.unicodeSeq.pop();
                                        this.unicodeSeq.push(topStruct.code);
                                    }
                                }
                            } else { //复合母音字[1,1,-1]
                                if (latestIsJaeum === false) { //如果输入了一个母音
                                    var newStruct = new charStruct();
                                    newStruct.keySeq.push(latestHan);
                                    newStruct.charSeq.push(latestHan);
                                    newStruct.code = jamoCode[latestHan];
                                    newStruct.state = [0, 0, -1];
                                    this.charStack.push(newStruct);
                                    this.unicodeSeq.push(newStruct.code);
                                } else { //如果又输入了一个子音(tong shang)
                                    if (!(latestHan in batchimHash)) { //如果子音不能做收音（情况同空栈输入）
                                        var newStruct = new charStruct();
                                        newStruct.keySeq.push(latestHan);
                                        newStruct.charSeq.push(latestHan);
                                        newStruct.code = jamoCode[latestHan];
                                        newStruct.state = [0, -1, 0];
                                        this.charStack.push(newStruct);
                                        this.unicodeSeq.push(newStruct.code);
                                    } else { //子音可以做收音
                                        topStruct = this.charStack.pop();
                                        topStruct.keySeq.push(latestHan);
                                        topStruct.charSeq.push(latestHan);
                                        topStruct.code += batchimHash[latestHan];
                                        topStruct.state[2] = 0; //[1,0,0]
                                        this.charStack.push(topStruct);
                                        this.unicodeSeq.pop();
                                        this.unicodeSeq.push(topStruct.code);
                                    }
                                }
                            }

                        } else if (topStruct.state[2] === 0) { //单收音字[1,x,0]

                            var topJaeum = topStruct.keySeq[topStruct.keySeq.length - 1];

                            if (latestIsJaeum) {

                                if (topJaeum in batchimCombine && latestHan in batchimCombine[topJaeum]) { //可以组合成双收音
                                    topStruct = this.charStack.pop();
                                    topStruct.keySeq.push(latestHan);
                                    topStruct.charSeq.pop(); // === topJaeum
                                    var b = batchimCombine[topJaeum][latestHan];
                                    topStruct.charSeq.push(b);
                                    topStruct.code = topStruct.code - batchimHash[topJaeum] + batchimHash[b];
                                    topStruct.state[2] = 1; //双收音字[1,x,1]
                                    this.charStack.push(topStruct);
                                    this.unicodeSeq.pop();
                                    this.unicodeSeq.push(topStruct.code);
                                } else {
                                    var newStruct = new charStruct();
                                    newStruct.keySeq.push(latestHan);
                                    newStruct.charSeq.push(latestHan);
                                    newStruct.code = jamoCode[latestHan];
                                    newStruct.state = [0, -1, 0];
                                    this.charStack.push(newStruct);
                                    this.unicodeSeq.push(newStruct.code);
                                }
                            } else {
                                topStruct = this.charStack.pop();
                                topStruct.keySeq.pop();
                                topStruct.charSeq.pop();
                                topStruct.code -= batchimHash[topJaeum];
                                topStruct.state[2] = -1;
                                this.charStack.push(topStruct);
                                this.unicodeSeq.pop();
                                this.unicodeSeq.push(topStruct.code);

                                var newStruct = new charStruct();
                                newStruct.keySeq.push(topJaeum);
                                newStruct.keySeq.push(latestHan);
                                newStruct.charSeq.push(topJaeum);
                                newStruct.charSeq.push(latestHan);
                                newStruct.code = jaeumHash[topJaeum] * 588 + moeumHash[latestHan] * 28 + 44032;
                                newStruct.state = [1, 0, -1]; //子母相遇成字
                                this.charStack.push(newStruct);
                                this.unicodeSeq.push(newStruct.code);
                            }

                        } else { //双收音字[1,x,1]
                            var topJaeum = topStruct.keySeq[topStruct.keySeq.length - 1];

                            if (latestIsJaeum) {
                                var newStruct = new charStruct();
                                newStruct.keySeq.push(latestHan);
                                newStruct.charSeq.push(latestHan);
                                newStruct.code = jamoCode[latestHan];
                                newStruct.state = [0, -1, 0];
                                this.charStack.push(newStruct);
                                this.unicodeSeq.push(newStruct.code);
                            } else {
                                topStruct = this.charStack.pop();
                                var sb = topStruct.charSeq.pop();
                                topStruct.keySeq.pop();
                                var leftPart = topStruct.keySeq[topStruct.keySeq.length - 1];
                                topStruct.charSeq.push(leftPart);
                                topStruct.code = topStruct.code - batchimHash[sb] + batchimHash[leftPart];
                                topStruct.state[2] = 0;
                                this.charStack.push(topStruct);
                                this.unicodeSeq.pop();
                                this.unicodeSeq.push(topStruct.code);

                                var newStruct = new charStruct();
                                newStruct.keySeq.push(topJaeum);
                                newStruct.keySeq.push(latestHan);
                                newStruct.charSeq.push(topJaeum);
                                newStruct.charSeq.push(latestHan);
                                newStruct.code = jaeumHash[topJaeum] * 588 + moeumHash[latestHan] * 28 + 44032;
                                newStruct.state = [1, 0, -1]; //子母相遇成字
                                this.charStack.push(newStruct);
                                this.unicodeSeq.push(newStruct.code);
                            }
                        }

                        //*********************************2016-06-13**********************************************
                        //当前问题：1.不能处理退格 2.输入空字符或未能映射为有效韩字的字母会中止程序 3.逻辑有待优化
                        //4. 数据结构有待优化
                    }

                } // input stack is not empty
            } else if (len < this.inputStack._size) { //如果删除了字符

                this.inputStack.pop();

                var topStruct = this.charStack.top();

                if (topStruct.state[0] === 0) { //未成字
                    if (topStruct.state[1] < 0) { //子音未成字[0,-1,x]

                        var topJaeum = topStruct.keySeq[topStruct.keySeq.length - 1];

                        if (topStruct.state[2] === 0) { //单子音未成字

                            this.charStack.pop();
                            this.unicodeSeq.pop();

                        } else { //双收（子）音未成字

                            topStruct = this.charStack.pop();
                            topStruct.keySeq.pop();
                            topStruct.charSeq.pop();
                            topStruct.charSeq.push(topStruct.keySeq[0]);
                            topStruct.code = jamoCode[topStruct.keySeq[0]];
                            topStruct.state = [0, -1, 0];
                            this.charStack.push(topStruct);
                            this.unicodeSeq.pop();
                            this.unicodeSeq.push(topStruct.code);

                        }

                    } else if (topStruct.state[1] === 0) { //[0,0,-1]单母音未成字

                        this.charStack.pop();
                        this.unicodeSeq.pop();

                    } else { //[0,1,-1]复合母音未成字（情况同空栈输入）
                        topStruct = this.charStack.pop();
                        topStruct.keySeq.pop();
                        topStruct.charSeq.pop();
                        topStruct.charSeq.push(topStruct.keySeq[0]);
                        topStruct.code = jamoCode[topStruct.keySeq[0]];
                        topStruct.state[1] = 0;
                        this.charStack.push(topStruct);
                        this.unicodeSeq.pop();
                        this.unicodeSeq.push(topStruct.code);
                    }
                } else { //已成字
                    if (topStruct.state[2] < 0) { //无收音字[1,x,-1]

                        if (topStruct.state[1] === 0) { //单母音字[1,0,-1]
                            topStruct = this.charStack.pop();
                            topStruct.keySeq.pop();
                            topStruct.charSeq.pop();
                            topStruct.code = jamoCode[topStruct.keySeq[0]];
                            topStruct.state = [0, -1, 0];
                            this.charStack.push(topStruct);
                            this.unicodeSeq.pop();
                            this.unicodeSeq.push(topStruct.code);


                        } else { //复合母音字[1,1,-1]
                            console.log("We are here");
                            topStruct = this.charStack.pop();
                            topStruct.keySeq.pop();
                            var topMoeum = topStruct.charSeq.pop();
                            topStruct.charSeq.push(topStruct.keySeq[1]); //topStruct.keySeq.length - 1
                            console.log(topMoeum, topStruct.keySeq[0]);
                            topStruct.code = topStruct.code - (moeumHash[topMoeum] - moeumHash[topStruct.keySeq[1]]) * 28;
                            topStruct.state[1] = 0;
                            this.charStack.push(topStruct);
                            this.unicodeSeq.pop();
                            this.unicodeSeq.push(topStruct.code);
                        }

                    } else if (topStruct.state[2] === 0) { //单收音字[1,x,0]

                        topStruct.keySeq[topStruct.keySeq.length - 1];

                        topStruct = this.charStack.pop();
                        topStruct.keySeq.pop();
                        var topJaeum = topStruct.charSeq.pop();
                        topStruct.code -= batchimHash[topJaeum];
                        topStruct.state[2] = -1;
                        this.charStack.push(topStruct);
                        this.unicodeSeq.pop();
                        this.unicodeSeq.push(topStruct.code);



                    } else { //双收音字[1,x,1]


                        topStruct = this.charStack.pop();
                        var topJaeum = topStruct.charSeq.pop();
                        topStruct.keySeq.pop();
                        var leftPart = topStruct.keySeq[topStruct.keySeq.length - 1];
                        topStruct.charSeq.push(leftPart);
                        topStruct.code = topStruct.code - batchimHash[topJaeum] + batchimHash[leftPart];
                        topStruct.state[2] = 0;
                        this.charStack.push(topStruct);
                        this.unicodeSeq.pop();
                        this.unicodeSeq.push(topStruct.code);


                    }

                    //*********************************2016-06-13**********************************************
                    //当前问题：1.退格只允许一次退一个或者全部删空，剩余子音不能与前一个字结合成收音 2.输入空字符或未能映射为有效韩字的字母会中止程序 3.逻辑有待优化
                    //4. 数据结构有待优化
                }

                // input stack is not empty
            } else {
                //?????

            }
            console.log(this.charStack._storage);

            //return this.unicodeSeq;
            this.unicode = this.unicodeSeq.map(x => "&#" + x.toString()).join('');
            return this.unicode;
        },
        translate: function(s) {
            this.unicode = this.unicodeSeq.map(x => "&#" + x.toString()).join('');
            return this.unicode;
        }
    }
});