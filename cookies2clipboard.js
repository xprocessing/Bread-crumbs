javascript: void ((function () {


    var cookieData = document.cookie;
    if(window.clipboardData){
        window.clipboardData.setData("Text", cookieData);
        alert("cookie已经复制到粘贴板，去粘贴吧");

    }
    else
    {
        prompt("请右击复制下面cookies文本，确定后去粘贴提交。",cookieData);
    }


    



})())
