"ui";

ui.layout(
    <vertical >
     <radiogroup  orientation="horizontal">//设置单选框布局
       
       <radio id="danxuan1" text="话术前启用随机字符"/>
<radio id="danxuan2"  text="话术后启用随机字符"/>
           
            </radiogroup>
    <button id="ok" w="auto" layout_gravity="center" text="确定"/>
    </vertical>
);

ui.ok.on("click", function(){
   

    threads.start(脚本)


});





function 脚本(){
    var b=ui.danxuan1.checked
    if(b){
    
    
        log("前")
    }
    var b=ui.danxuan2.checked
    if(b){
    
    
        log("后")
    }

}


