'ui';
//ui.setContentView(万里阳光号);

var 万里阳光号=ui.inflate(
<vertical id='ONE_PIECE'></vertical>
);

var 路飞=ui.inflate(<button textColor="{{colors.toString(rndColor())}}" text='路飞'></button>,万里阳光号.ONE_PIECE,true);
var 索隆=ui.inflate(<button textColor="{{colors.toString(rndColor())}}" text='索隆'></button>,万里阳光号.ONE_PIECE,true);
var 娜美=ui.inflate(<button textColor="{{colors.toString(rndColor())}}" text='娜美' id='娜美id' ></button>,万里阳光号.ONE_PIECE,true);
var 乌索普=ui.inflate(<button textColor="{{colors.toString(rndColor())}}" text='乌索普'></button>,万里阳光号.ONE_PIECE,true);
var 山治=ui.inflate(<button textColor="{{colors.toString(rndColor())}}" text='山治'></button>,万里阳光号.ONE_PIECE,true);
ui.setContentView(万里阳光号);
function rndColor() {
    return colors.rgb(random(0, 255), random(0, 255), random(0, 255))
  }