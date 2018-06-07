///放到浏览器书签里面，打开调试终端，进入生意参谋-市场-商品排行榜，点击，输出所有宝贝的手淘搜索，直通车数据。

javascript:void((function(){  


 var GetUrl,GetUrlDate,GetUrlCat;
 GetUrl = window.location.href;

 GetUrlCat= GetUrl.match(/cateId=(\S*)&dateRange/)[1];
 GetUrlDate= GetUrl.match(/dateRange=(\S*)&dateType/)[1];

    var GetID;
    GetID = document.querySelectorAll('.info-wrapper a');
    for (each in GetID) {
      var theID = "";
      if (typeof GetID[each].href !== "undefined") {
        theID = GetID[each].href.replace(/[^0-9]+/g, '');         
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
           
           
            var SearchNumText = JSON.parse(xhttp.responseText.toString());
            var SearchNumTextdata = SearchNumText.content.data;
            
            for (eachPageName in SearchNumTextdata) {
            
            
                if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {
            
                   var showline="宝贝"+theID+SearchNumTextdata[eachPageName].pageName +"UV="+ SearchNumTextdata[eachPageName].uv;
                };

            
                if (SearchNumTextdata[eachPageName].pageName == "直通车") {
            
                    console.log( showline+=SearchNumTextdata[eachPageName].pageName +"UV="+ SearchNumTextdata[eachPageName].uv);
                }


            }        
           
    
    
    
          }
        };
        xhttp.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId="+ GetUrlCat +"&categoryId="+ GetUrlCat +"&dateRange="+ GetUrlDate +"&dateRangePre="+ GetUrlDate +"&dateType=recent1&dateTypePre=recent1&device=2&devicePre=0&itemDetailType=1&itemId=" + theID + "&rankTabIndex=0&rankType=1&seller=-1&view=detail", false);
        xhttp.send()
    
   
    
    
      }
    
    
    
    }
    



})())  

