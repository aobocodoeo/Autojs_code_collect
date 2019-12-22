"ui";

ui.layout(
    <vertical gravity="center" bg="http://xm.wxw6.cn/222.jpg">
        <button id="启动" text="启动防封" w='auto'bg="#FF00AA"/>  
        <button id="XM" text="熊猫网盘" w='auto'bg="#FFFFAA"/> 
    </vertical>
);

ui.启动.on("click", ()=>{
function delete1(text){if(files.removeDir(text)==true){console.info('删除成功：'+text+'\n')}else{console.error('文件不存在：'+text+'\n')}}
delete1('/storage/emulated/0/Android/obb/com.tencent.tmgp.pubgmhd')
var cs1='/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/'
delete1(cs1+'Logs')
delete1(cs1+'UpdateInfo')
delete1(cs1+'ActImageSaved')
delete1(cs1+'NoticeImageDownload')
delete1(cs1+'Pandora')
delete1(cs1+'ShareImageDownload')
delete1(cs1+'rawdata')
delete1(cs1+'ImageDownload')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Config/CrashReportClient')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/Saved/Config/.t48ttt.tmp')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/ShadowTrackerExtra/.t33ttt.tmp')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/.t20ttt.tmp')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/Engine')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/UE4Game/ShadowTrackerExtra/Epic Games')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/ca-bundle.pem')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/login-identifier.txt')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/vmpcloudconfig.json')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/MSDKLog.log.0')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/GameJoyRecorder')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/files/tbslog')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/.t8ttt.tmp')
delete1('/storage/emulated/0/Android/data/com.tencent.tmgp.pubgmhd/cache')
delete1('/storage/emulated/0/tencent/XG')
delete1('/storage/emulated/0/backup/com.tencent.tmgp.pubgmhd')
delete1('/storage/emulated/0/xm777/maxHP')
delete1('/storage/emulated/0/xm777/Offset')
delete1('/storage/emulated/0/xm777/Position')
console.warn('熊猫官方网盘https://www.lanzous.com/b0li5k4d')
console.warn('熊猫(脚本最后更新时间：2019-11-30 13:26)')
toast("封号数据清除完毕！");
});

ui.XM.on("click", ()=>{
    app.openUrl("https://www.lanzous.com/b0li5k4d");
    toast("正在打开下载地址");
});