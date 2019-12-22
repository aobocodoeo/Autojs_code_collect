
//仅供交流与学习
//本人qq:313118583
for (var i=0;i<5;i++){
    var file = open("/sdcard/1.txt", "r")//读取的账号文本文件位置
var ub =file.readlines()
log(ub)
//sleep(1000)
str=ub[i]
arr=str.split("|");//账号与密码之间的分隔符
log ("账号"+arr[0])
log ("密码"+arr[1])
sleep(1000)

主体脚本()
} 

function 主体脚本(){

log("读取账号成功")
    //我们登陆账号以及后续操作
}