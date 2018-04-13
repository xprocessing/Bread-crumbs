///////////单次搜索请求数据
var url="https://s.m.taobao.com/search?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&q=%E8%A2%9C%E5%AD%90%E5%A5%B3&sst=1&n=20&buying=buyitnow&m=api4h5&abtest=4&wlsort=4&style=mid&closeModues=nav%2Cselecthot%2Conesearch&sort=_sale&page=1";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
//上面先执行获得宝贝ID脏数据，然后执行下面代码

var TOP100DATAJSON = JSON.parse(xhr.responseText.toString());
var TOP100DATAArray = [];
TOP100DATAArray = TOP100DATAJSON.listItem;
console.log(TOP100DATAArray);

var GetID = [];
var GetShopName = [];
var GetItemPrice = [];
var GetOrderNum = [];
for (var i = 0; i < TOP100DATAArray.length; i++) {
  GetID[i] = TOP100DATAArray[i].itemNumId;
  GetShopName[i] = TOP100DATAArray[i].nick;
  GetItemPrice[i] = TOP100DATAArray[i].price;
  GetOrderNum[i] = TOP100DATAArray[i].sold;
  // console.log(GetID[i]);
}

//表格输出
console.table(_.zip(GetShopName, GetID, GetItemPrice, GetOrderNum));




/////////////////////////////////////////////////////////N词搜索请求数据
var squery="文胸";
var TOP100DATAArray = [];

for (var N = 1; N < 50; N++) {

var newUrl="https://s.m.taobao.com/search?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&q="+squery+"&sst=1&n=20&buying=buyitnow&m=api4h5&abtest=4&wlsort=4&style=mid&closeModues=nav%2Cselecthot%2Conesearch&sort=_sale&page="+N;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      //////执行请求后，整合数据
      var TOP100DATAJSON = JSON.parse(xhttp.responseText.toString());
      var TOP100DATAArrayN=TOP100DATAJSON.listItem;
      

      //TOP100DATAArray.concat(TOP100DATAArryN);
      for (var M = 0; M < TOP100DATAArrayN.length; M++) {
       
        TOP100DATAArray.push(TOP100DATAArrayN[M]);

      }


      //////执行请求后，整合数据



    }
  };
  xhttp.open("GET", newUrl, false);
  xhttp.send();

  /////循环输出手淘搜索
}


console.log(TOP100DATAArray);

/////////////展示数据
var GetID = [];
var GetShopName = [];
var GetItemPrice = [];
var GetOrderNum = [];
for (var i = 0; i < TOP100DATAArray.length; i++) {
  GetID[i] = TOP100DATAArray[i].itemNumId;
  GetShopName[i] = TOP100DATAArray[i].nick;
  GetItemPrice[i] = TOP100DATAArray[i].price;
  GetOrderNum[i] = TOP100DATAArray[i].sold;
  // console.log(GetID[i]);
}

//表格输出
console.table(_.zip(GetShopName, GetID, GetItemPrice, GetOrderNum));

//获得总货值
var allMoney=0;
for (var i = 0; i < GetItemPrice.length; i++) {
    
    allMoney += GetItemPrice[i]*GetOrderNum[i];

  }
  console.log(allMoney);