"ui";

ui.layout(
    <vertical padding="16">
<horizontal>
            <text textSize="16sp">下拉菜单</text>
            <spinner id="sp1" entries="选项1|选项2|选项3"/>
        
            </horizontal>
        <button id="ok">确定</button>
    </vertical>
);

ui.ok.on("click", ()=>{
    threads.start(主体)


});


function 主体(){

    var i = ui.sp1.getSelectedItemPosition();
    log(i)
  switch(i){
  case 0:
      toast("选项1")
      sleep(1000)
      threads.start(脚本1)
      break;
     
      case 1:
      toast("选项2")
      sleep(1000)
      脚本2()
      break;
      case 2:
      toast("选项3")
      sleep(1000)
      脚本3()
      break;

}
}







function 脚本1(){

    toast("执行脚本1")

}

function 脚本2(){

    toast("执行脚本2")

}

function 脚本3(){

    toast("执行脚本3")

}






