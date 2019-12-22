auto();
events.observeNotification();
events.onNotification(function(notification){
    printNotification(notification);
});
toast("正在监听通知中");
function printNotification(notification){
    ////////////////监听短信包名若符合则提取监听摘要 不符合跳过
if(notification.getPackageName()=="com.android.mms"){
    toastLog("应用包名: " + notification.getPackageName()+"通知摘要: " + notification.tickerText)
}else{
    log("未发现短信通知,持续监听中")
}
}