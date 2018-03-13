var GetID;
GetID = document.querySelectorAll('.info-wrapper a');
for (each in GetID) {
  var theID = "";
  if (typeof GetID[each].href !== "undefined") {
    theID = GetID[each].href.replace(/[^0-9]+/g, '');
    //theID = GetID[each].href.match(/\d+/g);
    //console.log(theID);
    ////循环输出手淘搜索

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
       
        //////执行请求后，输出
        var SearchNumTextdata = SearchNumText.content.data;
        
        for (eachPageName in SearchNumTextdata) {
        
        
            if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {
        
                console.log("宝贝"+theID+SearchNumTextdata[eachPageName].pageName +"UV="+ SearchNumTextdata[eachPageName].uv);
            }
        
        }
        
        //////执行请求后，输出



      }
    };
    xhttp.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId=50006846&categoryId=50006846&dateRange=2018-03-12|2018-03-12&dateRangePre=2018-03-12|2018-03-12&dateType=recent1&dateTypePre=recent1&device=2&devicePre=0&itemDetailType=1&itemId=" + theID + "&rankTabIndex=0&rankType=1&seller=-1&view=detail", false);
    xhttp.send();

    /////循环输出手淘搜索


  }



}





