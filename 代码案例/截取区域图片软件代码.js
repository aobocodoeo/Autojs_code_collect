"ui";
ui.layout(
    <vertical padding="16">
        <text textSize="16sp" textColor="black" text="本软件用于找图时截取区域图片用，请勿用于非法用途，下方按提示填入坐标和保存路径保存图片名称等内容，点击确定会出现悬浮球。打开你要截图的界面点击悬浮球即可截图。获取更多软件添加qq群943801367"/>
        
        <text textSize="16sp" textColor="black" text="输入保存目录"/> <input id="lj" text="" hint="例如/storage/emulated/0/1/"/>
        <text textSize="16sp" textColor="black" text="输入保存图片名称"/> <input id="mc" text=""  hint="例如第一张"/>
        <text textSize="16sp" textColor="black" text="要截取的图片区域左上角x坐标"/> <input id="x1" text="" hint="350"/>
        <text textSize="16sp" textColor="black" text="要截取的图片区域左上角y坐标"/> <input id="y1" text="" hint="300"/>

        <text textSize="16sp" textColor="black" text="以截取区域左上角为起点计算要截取的区域的宽度"/> <input id="kuan"  hint="150" text=""/>
        <text textSize="16sp" textColor="black" text="以截取区域左上角为起点计算要截取的区域的高度"/> <input id="gao"  hint="200"  text=""/>
        <button id="ok" text="确定"/>
    </vertical>
);



//指定确定按钮点击时要执行的动作
ui.ok.click(function(){
    //通过getText()获取输入的内容
    home()
    threads.start(悬浮)
});





function 悬浮 (){






    var window = floaty.window(
        <frame>
            <button id="action" text="开始" w = "40" h="40" bg="#00FA9A"/>
        </frame>
    );
    
    setInterval(()=>{}, 1000);
    
    var execution = null;
    
    //记录按键被按下时的触摸坐标
    var x = 0, y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;
    
    window.action.setOnTouchListener(function(view, event){
        switch(event.getAction()){
            case event.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                windowX = window.getX();
                windowY = window.getY();
                downTime = new Date().getTime();
                return true;
            case event.ACTION_MOVE:
                //移动手指时调整悬浮窗位置
                window.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));
                //如果按下的时间超过1.5秒判断为长按，退出脚本
                if(new Date().getTime() - downTime > 1500){
                    exit();
                }
                return true;
            case event.ACTION_UP:
                //手指弹起时如果偏移很小则判断为点击
                if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5){
                    onClick();
                }
                return true;
        }
        return true;
    });
    
    function onClick(){
        if(window.action.getText() == '开始'){
            threads.start(截图)
            window.action.setText('已开');
        }else{
            if(execution){
                execution.getEngine().forceStop();
            }
            window.action.setText('开始');
        }
    }
    
}    












function 截图(){
  
    var 保存目录=ui.lj.getText()
    log(保存目录)
    var 保存名字=ui.mc.getText()
    log(保存名字)
    var x1=ui.x1.getText()
    log(x1)
    var y1=ui.y1.getText()
    log(y1)
    var w1=ui.kuan.getText()
    log(w1)
    var h1=ui.gao.getText()
    log(h1)
    
    
    if(!requestScreenCapture()){
        toast("请求截图失败");
        exit();
    }
        captureScreen("/sdcard/1" + ".jpg");
    
    
        var src = images.read("/sdcard/1.jpg");
        var clip = images.clip(src, x1, y1, w1, h1);
        images.save(clip, 保存目录+保存名字+".jpg");

        toastLog("已截好图片")





}