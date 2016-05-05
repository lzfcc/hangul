var editor = function() {  
    console.log("editor.js");
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWraps: true,
        styleActiveLine: true,
        matchBrackets: true,
        indentUnit: 4,
        autoCloseBrackets: true,
        mode: "text/x-csrc",
        font: "Courier"
    });

    var lang = document.getElementById("lang"),
        mode;
    lang.addEventListener('change', (e) => {
        console.log(lang.options[lang.selectedIndex].text);
        var op = lang.options.selectedIndex;
        switch(op){
            case 0: mode = "text/x-csrc";break;
            case 1: mode = "text/x-c++src";break;
            case 2: mode = "text/x-java";break;
            case 3: mode = "text/x-python";break;
            case 4: mode = "text/x-csharp";break;
            case 6: mode = "text/javascript";break;
            default: mode = "text/x-csrc";
        }
        editor.setOption("mode", mode);
        //ref: https://codemirror.net/demo/changemode.html
    });
    document.getElementById("hasInput").addEventListener('change', (e) => {
        document.getElementById("input").style.display = "block";
    });
    document.getElementById("noInput").addEventListener('change', (e) => {
        document.getElementById("input").style.display = "none";
    });
}
