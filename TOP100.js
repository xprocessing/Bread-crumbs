//获取TOP100的搜索流量
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://sycm.taobao.com/mq/rank/listItems.json?cateId=50006846&categoryId=50006846&dateRange=2018-03-06|2018-03-12&dateRangePre=2018-03-06|2018-03-12&dateType=recent7&dateTypePre=recent7&device=0&devicePre=0&itemDetailType=1&keyword=&orderDirection=desc&orderField=payOrdCnt&page=1&pageSize=30&rankTabIndex=0&rankType=1&seller=-1&view=rank", true);
xhr.send();

//上面先执行获得宝贝ID脏数据

//获得宝贝ID数组
var TOP100DATAJSON = JSON.parse(xhr.responseText.toString());
var TOP100DATAArray=[];
TOP100DATAArray=TOP100DATAJSON.content.data.data;
//console.log(TOP100DATAArray[1]);
var GetID =[];
for (var i=0;i<TOP100DATAArray.length;i++)
{
    GetID[i]=TOP100DATAArray[i].itemId;
   // console.log(GetID[i]);
}

console.table(GetID);

//根据ID，获取搜索流量

var SUVs=[]
for (var N=0;N<GetID.length;N++) {
  var theID = "";
  theID = GetID[N];
 
    //console.log(theID);
    ////循环输出手淘搜索

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
       
        //////执行请求后，输出
        var SearchNumText = JSON.parse(xhttp.responseText.toString());
        var SearchNumTextdata = SearchNumText.content.data;
        
        for (eachPageName in SearchNumTextdata) {
        
        
            if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {
        
                console.log("宝贝"+theID+SearchNumTextdata[eachPageName].pageName +"UV="+ SearchNumTextdata[eachPageName].uv);
                //把搜索数据存到数组
                SUVs[N]=SearchNumTextdata[eachPageName].uv;

            }
        
        }
        
        //////执行请求后，输出



      }
    };
    xhttp.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId=50006846&categoryId=50006846&dateRange=2018-03-12|2018-03-12&dateRangePre=2018-03-12|2018-03-12&dateType=recent1&dateTypePre=recent1&device=2&devicePre=0&itemDetailType=1&itemId=" + theID + "&rankTabIndex=0&rankType=1&seller=-1&view=detail", false);
    xhttp.send();

    /////循环输出手淘搜索






}
