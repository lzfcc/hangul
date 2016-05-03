window.onload = function() {
    console.log("postCode.js!");
    function URLencode(sStr) {
        return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F').replace(/\&/g, '%26');
    }
    document.getElementById("myform").onsubmit = function (e) {

        e.preventDefault();

        var f = e.target,
            formData = new FormData(f),  //??! is {} FormData doesn't work
            xhr = new XMLHttpRequest();

        /*var formData = "";
        for (var i = 0, d, v; i < f.elements.length; i++) {
            d = f.elements[i];
            if (d.name && d.value) {
                v = (d.type == "checkbox" || d.type == "radio" ? (d.checked ? d.value : '') : d.value);
                if (v) formData += (d.name + "=" + URLencode(v) + "&");
            }
        }*/

        xhr.open("POST", f.action, true);
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
        xhr.setRequestHeader("processData","false");
        xhr.send(formData);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("output").value = xhr.responseText;
            }
        }
    }
}

/*遇到的问题汇总：Ajax post，将结果写回input textarea。
 http://www.w3ctech.com/topic/60  参考，使用了FormData，但是出错，返回{}，原因不明。
 https://developer.mozilla.org/zh-CN/docs/Web/Guide/Using_FormData_Objects
 http://stackoverflow.com/questions/12699135/got-ajax-to-submit-form-data-but-wont-do-it-for-a-textarea
 http://www.cburch.com/cs/340/reading/ajax-server/
 http://blog.csdn.net/bugall/article/details/44873651
 需要学习name，id属性的区别
 escape(v)的时候，其中的‘+’好不转译，而到了server接收到的req.body时发生异常，加号成了空格
 请参考：这个坑可能还没填全。
 express路由之reshttps://blog.jamespan.me/2015/05/17/url-encoding/
 http://blog.csdn.net/xiaxiaorui2003/article/details/4091440
 http://expressjs.com/zh-cn/guide/routing.html
 ‘+’问题可能与之有关
 
 16/05/02
 nodemon抽风：之前运行nodejs代码没问题，后来发现一提交post，就503，服务器重启，nodemon监测到改变。
 使用node时候没问题，于是我猜测是因为在本地/temp下写了新的js导致的。故而在package.json里改动："start": "nodemon -i /temp ./bin/www"
 */