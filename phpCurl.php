<?php  
  
header("Content-type:text/html;Charset=utf8");  
$ch =curl_init();  
curl_setopt($ch,CURLOPT_URL,'https://sycm.taobao.com/flow/new/live/monitor/item/tops/rank.json?dateRange=2018-06-15%7C2018-06-15&dateType=today&order=desc&orderBy=uv&indexCode=uv%2CpayOrderByrCnt%2CpayRate&device=2&_=1529055135742&token=3680f0620');  
  
$header = array();  
//curl_setopt($ch,CURLOPT_POST,true);  
//curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);  
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);  
curl_setopt($ch,CURLOPT_HEADER,true);  
curl_setopt($ch,CURLOPT_HTTPHEADER,$header);  
curl_setopt($ch,CURLOPT_COOKIE,'t=b61c805af156688b2fbf7b08b5771686; cookie2=1e68e10d6d1e4f0de61f47c6bacf359b; v=0; _tb_token_=eeeb3753eebb7; uc1=tmb=1&cookie14=UoTeNzcB%2FhTXtQ%3D%3D&lng=zh_CN&cookie16=UtASsssmPlP%2Ff1IHDsDaPRu%2BPw%3D%3D&existShop=true&cookie21=UIHiLt3xSixwG45%2BvCkngQ%3D%3D&tag=8&cookie15=U%2BGCWk%2F75gdr5Q%3D%3D&pas=0; uc3=nk2=sGHK%2FpmJlRg88du%2F7h9UqooJ&id2=UUjYFkf1UCMHxA%3D%3D&vt3=F8dBzr2L2DcMKws31bU%3D&lg2=VT5L2FSpMGV7TQ%3D%3D; hng=CN%7Czh-cn%7CCNY; existShop=MTUyOTA1NTEwNA%3D%3D; lgc=%5Cu4FDE%5Cu5146%5Cu6797%5Cu946B%5Cu8FC5%5Cu9500%5Cu4E13%5Cu5356%5Cu5E97; tracknick=%5Cu4FDE%5Cu5146%5Cu6797%5Cu946B%5Cu8FC5%5Cu9500%5Cu4E13%5Cu5356%5Cu5E97; dnk=%5Cu4FDE%5Cu5146%5Cu6797%5Cu946B%5Cu8FC5%5Cu9500%5Cu4E13%5Cu5356%5Cu5E97; sg=%E5%BA%9764; csg=977d6e82; mt=np=; cookie1=B0b6zKKDl8dbJx2KdJ07JQoC70lfvPwO3mOucSvASPo%3D; unb=2091404236; skt=89ae9531dd7aa24d; _cc_=U%2BGCWk%2F7og%3D%3D; tg=0; _l_g_=Ug%3D%3D; _nk_=%5Cu4FDE%5Cu5146%5Cu6797%5Cu946B%5Cu8FC5%5Cu9500%5Cu4E13%5Cu5356%5Cu5E97; cookie17=UUjYFkf1UCMHxA%3D%3D; _euacm_ac_l_uid_=2091404236; 2091404236_euacm_ac_c_uid_=2091404236; 2091404236_euacm_ac_rs_uid_=2091404236; _euacm_ac_c_uid_=2091404236; _euacm_ac_rs_uid_=2091404236; _euacm_ac_v_md_=s; _euacm_ac_rs_sid_=110765191; _portal_version_=new; cna=gHWqE82fVDgCAXPEAAIMUHri; JSESSIONID=2B9716096A3FC950F2AA570F11883D7C; Hm_lvt_6d572b97ef307cd4aa37328e2f34fa8f=1529055111; flow_version=new; Hm_lpvt_6d572b97ef307cd4aa37328e2f34fa8f=1529055123; isg=BB4euxCzyWojiR0Of5Yb1LY-erSgd-Ag2hCzoMin3WFc67zFMW9haLhK5_dnU9px');  
  
  
$content = curl_exec($ch);  
  
echo "<pre>";print_r(curl_error($ch));echo "</pre>";  
echo "<pre>";print_r(curl_getinfo($ch));echo "</pre>";  
echo "<pre>";print_r($header);echo "</pre>";  
echo "</br>",$content;  

?>