/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
///setTimeout(function(){ myWindow.close() }, 3000);
///setTimeout(alertFunc, 3000);
function reply1() {
  $('.js_editorArea').html('您好，欢迎您首次关注我们，我是您的专属客服');
  $('#js_submit').click();
}
function reply2() {
  $('.js_editorArea').html('简单介绍下，我们公众号，为大家汇集了些免单活动，按照任务说明去天猫和京东店铺下单，我们会发指定赠品，您确认收货后，我们会全额返款给您。');
  $('#js_submit').click();
}
function reply3() {
  $('.js_editorArea').html('今天注册就送0.99元，注册后去个人中心查看，您在做任务过程中，有任何问题，随时联系我哦。');
  $('#js_submit').click();
}
if ($('.message_item').length == 1) {
  setTimeout(reply1, 1000);
  setTimeout(reply2, 1000);
  setTimeout(reply3, 1000);
  
} 
else {
  console.log('大于1不能发');
}

