///获得物流异常订单
var GetID;
GetID = document.querySelectorAll('p.order-title');
for (each in GetID) {
    console.log(GetID[each].innerText);
}

var GetID;
GetID = document.querySelectorAll('.info-wrapper a');
for (each in GetID) {
    var thehref = GetID[each].href;
    var theID = thehref.replace(/[^0-9]+/g, '')
    console.log(theID);
}


var theID = "565225052278";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        //////执行请求后，输出
        var SearchNumText = JSON.parse(xhttp.responseText.toString());
        var SearchNumTextdata = SearchNumText.content.data;
        
        for (eachPageName in SearchNumTextdata) {
        
        
            if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {
        
                console.log(SearchNumTextdata[eachPageName].pageName + SearchNumTextdata[eachPageName].uv);
            }
        
        }
        
        //////执行请求后，输出



    }
};

xhttp.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId=50006846&categoryId=50006846&dateRange=2018-03-12|2018-03-12&dateRangePre=2018-03-12|2018-03-12&dateType=recent1&dateTypePre=recent1&device=2&devicePre=0&itemDetailType=1&itemId=" + theID + "&rankTabIndex=0&rankType=1&seller=-1&view=detail", false);
xhttp.send();




var SearchNumText = JSON.parse(xhttp.responseText.toString());
var SearchNumTextdata = SearchNumText.content.data;

for (eachPageName in SearchNumTextdata) {


    if (SearchNumTextdata[eachPageName].pageName == "手淘搜索") {

        console.log(SearchNumTextdata[eachPageName].pageName + SearchNumTextdata[eachPageName].uv);
    }

}











GetID[1].href
第一个$('.info-wrapper a');
数组$$('.info-wrapper a');

var orderlist = $$('p');
for (each in orderlist) {
    console.log(orderlist[each].order - title);
}

dir(inspect(document.body))


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://sycm.taobao.com/mq/rank/listItems.json?cateId=50012777&categoryId=50012777&dateRange=2018-03-02%7C2018-03-02&dateRangePre=2018-03-02|2018-03-02&dateType=recent1&dateTypePre=recent1&device=0&devicePre=0&itemDetailType=1&keyword=&orderDirection=desc&orderField=payOrdCnt&page=1&pageSize=100&rankTabIndex=0&rankType=1&seller=-1&token=14d2f4b70&view=rank&_=1520050421339", true);
xhr.send();

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://sycm.taobao.com/mq/rank/listItemSrcFlow.json?cateId=50012777&categoryId=50012777&dateRange=2018-03-02|2018-03-02&dateRangePre=2018-03-02|2018-03-02&dateType=recent1&dateTypePre=recent1&device=1&devicePre=0&itemDetailType=1&itemId=537398419293&rankTabIndex=0&rankType=1&seller=-1&view=detail", true);
xhr.send();


searchdata = JSON.parse(xhr.response)

searchdata.content.data[0].uv


$.getJSON("http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?", function (data) { var html = '<ul>'; for (var i = 0; i < data.length; i++) { html += '<li>' + data[i] + '</li>'; } html += '</ul>'; $('#divCustomers').html(html); });



///获得被查的异常订单
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://healthcenter.taobao.com/home/json/get_affect_order_list.do?pageSize=1000&page=4&_ksTS=1520336693981_79&callback=jsonp80&punishId=10523180484&type=3", true);
xhr.send();


xhr.responseText

https://json-csv.com/

///获得物流异常订单

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://count.taobao.com/counter2?keys=ICVT_7_567520993724&inc=ICVT_7_567520993724&sign=916d0bdf51c06c2ca66c6fca6b692773ff7", true);
xhr.send();


xhr.responseText