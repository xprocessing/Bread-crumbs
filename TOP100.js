//获取TOP100的搜索流量
<<<<<<< HEAD
var setCateId = "50006846";
var setDateRange = "2018-03-21|2018-03-21";
=======
var setCateId = "50014808";
var setDateRange = "2018-03-24|2018-03-24";
>>>>>>> 4cb916a80d049b7e00cd9c24ff735646e601551d
var setRecent = "1";
var setPageSize = "30";
var SetKeyword = "4号";
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://sycm.taobao.com/mq/rank/listItems.json?cateId=" + setCateId + "&categoryId=" + setCateId + "&dateRange=" + setDateRange + "&dateRangePre=" + setDateRange + "&dateType=recent" + setRecent + "&dateTypePre=recent" + setRecent + "&device=0&devicePre=0&itemDetailType=1&keyword=" + SetKeyword + "&orderDirection=desc&orderField=payOrdCnt&page=1&pageSize=" + setPageSize + "&rankTabIndex=0&rankType=1&seller=-1&view=rank", true);
xhr.send();

//上面先执行获得宝贝ID脏数据，然后执行下面代码

//2:获得宝贝ID数组
var TOP100DATAJSON = JSON.parse(xhr.responseText.toString());
var TOP100DATAArray = [];
TOP100DATAArray = TOP100DATAJSON.content.data.data;
//console.log(TOP100DATAArray[1]);
var GetID = [];
var GetShopName = [];
var GetItemPrice = [];
var GetOrderNum = [];
for (var i = 0; i < TOP100DATAArray.length; i++) {
  GetID[i] = TOP100DATAArray[i].itemId;
  GetShopName[i] = TOP100DATAArray[i].shopName;
  GetItemPrice[i] = TOP100DATAArray[i].itemPrice;
  GetOrderNum[i] = TOP100DATAArray[i].payOrdCnt;
  // console.log(GetID[i]);
}

//表格输出，refman：https://developer.mozilla.org/zh-CN/docs/Web/API/Console/table
console.table(GetID);

//根据ID，获取搜索流量

//搞个数组，把宝贝搜索直通车存起来
var SUVs = [];
var ZUVs = [];
for (var N = 0; N < GetID.length; N++) {
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

        //输出搜索数据

        if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {

          console.log("宝贝" + theID + SearchNumTextdata[eachPageName].pageName + "UV=" + SearchNumTextdata[eachPageName].uv);

          //把搜索数据存到数组
          SUVs[N] = SearchNumTextdata[eachPageName].uv;

        };
        //输出直通车数据
        if (SearchNumTextdata[eachPageName].pageName == "直通车") {

          console.log("宝贝" + theID + SearchNumTextdata[eachPageName].pageName + "UV=" + SearchNumTextdata[eachPageName].uv);
          //把直通车数据存到数组
          ZUVs[N] = SearchNumTextdata[eachPageName].uv;

        }





      }

      //////执行请求后，输出



    }
  };
  xhttp.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId=" + setCateId + "&categoryId=" + setCateId + "&dateRange=" + setDateRange + "&dateRangePre=" + setDateRange + "&dateType=recent" + setRecent + "&dateTypePre=recent" + setRecent + " &device=2&devicePre=0&itemDetailType=1&itemId=" + theID + "&rankTabIndex=0&rankType=1&seller=-1&view=detail", false);
  xhttp.send();

  /////循环输出手淘搜索
}




//3炫技啦，整理数据，表格输出
//特别感谢_.zip这个函数https://lodash.com/docs/4.17.5#zip
console.log("行业前" + setPageSize + "名" + SetKeyword + "的店铺，产品，价格，销量，搜索访客，直通车访客");
console.table(_.zip(GetShopName, GetID, GetItemPrice, GetOrderNum, SUVs, ZUVs));
