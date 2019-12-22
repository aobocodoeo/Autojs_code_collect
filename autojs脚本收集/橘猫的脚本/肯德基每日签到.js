auto.waitFor();
app.launchPackage("com.yek.android.kfc.activitys");
//text("大神会员").waitFor();
//sleep(500);
do {
    sleep(300);
    swipe(device.width / 2, device.height * 0.8, device.width / 2, device.height * 0.3, 500);
} while (id("home_me_iv_37").findOnce() == null);
id("home_me_iv_37").findOne().click();
var a = text("签到").findOne();
var X = a.bounds().centerX();
var Y = a.bounds().centerY();
click(X, Y);
sleep(1000);
recents();
recents();
//app.launchPackage("org.autojs.autojs");