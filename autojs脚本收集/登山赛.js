setScreenMetrics(1080, 1920);
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
//请求截屏权限//
//我的思路，取小鸡前面那个金币坐标，和小鸡坐标，控制小鸡滑动到金币坐标位
//最好取小鸡和金币中心。
//小鸡坐标
console.show();while(1){
    var img = captureScreen()
var 开始=colors.toString(images.pixel(img,454,1021));
if(开始=="#ff4275ef"){click(454,1021);break}}
while(1){var img = captureScreen()

var 小鸡坐标=images.findColor(img, "#fff9f3ec", {
     region: [0, 1260, 1080, 176],
     threshold: 4
});
var 金币坐标=images.findColor(img, "#ffe1b100", {
     region: [156, 980, 850, 70],
     threshold: 4
});
/*var x=小鸡坐标.x;
var y=小鸡坐标.y;
var x1=金币坐标.x;
var y1=金币坐标.y;
//swipe(x,y,x1,y1,400);
*/


if(小鸡坐标&&金币坐标){var x=小鸡坐标.x;
var y=小鸡坐标.y;
//log("鸡=="+x+"鸡=="+y);
var x1=金币坐标.x;
var y1=金币坐标.y;
log("鸡=="+x+"鸡=="+y);
log("金=="+x1+"金=="+y1);

swipe(x,y,x1+10,y1,150);
sleep(200);
}
}