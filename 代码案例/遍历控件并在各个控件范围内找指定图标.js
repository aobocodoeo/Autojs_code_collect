auto();
requestScreenCapture();

var uc = id ("dctv_follow").find();
for(var i = 1; i <uc.length-1; i++){
    var tv = uc[i];

    if(tv){
        var tv=tv.bounds()
        var y=tv.toString().slice(5,-1)
        log(y)
        var t=y.split(" ")
        x1=parseInt(t[0].slice(0,-1))
        y1=parseInt(t[1])
        log(x1+"x1坐标")
        log(y1+"y1坐标")
        w=parseInt(t[3]) -  parseInt( x1) 
        h=parseInt(t[4]) -  parseInt( y1) 
        log(w+"宽")
        log(h+"高")

        点击()
    }
}

function 点击(){


    var 爱心 = images.read("./1.png");
    log(爱心)
    var p = findImage(captureScreen(), 爱心, {
        region: [x1, y1,w,h],
        threshold: 0.8
    });
    if(p){
        log("在界面找到了图标啦: " + p);   
    }else{
        log("没找到")
        
    }

   log(i)
   
}