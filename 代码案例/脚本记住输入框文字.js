"ui";
ui.layout(
    <vertical padding="16">
        <text textSize="16sp" textColor="black" text="请输入话术"/>
        <input id="name" text=""/>
        <button id="ok" text="确定"/>
    </vertical>
);

ui.ok.click(function(){
    threads.start(点击 )

});

ui.run(() => {
   var 判断= files.exists("/sdcard/脚本/话术.txt")
   if(判断==true){
    var x2=files.read("/sdcard/脚本/话术.txt")
log(x2)
if(x2!=null){
    ui.name.setText(x2);
}
   }else{
    files.createWithDirs("/sdcard/脚本/话术.txt")
   }


})


function 点击(){
    var x = ui.name.getText();
    var x2=files.read("/sdcard/脚本/话术.txt")
    log(x,x2)
    if(x==x2){
        log(x)
    }else{
        files.remove("/sdcard/脚本/话术.txt")
        files.createWithDirs("/sdcard/脚本/话术.txt")
        files.write("/sdcard/脚本/话术.txt", x);
    }

}





