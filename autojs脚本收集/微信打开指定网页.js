var result = shell("am start -n com.tencent.mm/.plugin.webview.ui.tools.WebViewUI -d tv.lhb100.com com.tencent.mm", true);
log(result);
console.show();
if(result.code == 0){
  toast("执行成功");
}else{
  toast("执行失败！请到控制台查看错误信息");
}