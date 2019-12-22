"ui";
ui.layout(
    <frame>
        <linear orientation="vertical" gravity="top|center_horizontal">
            <img src="http://img01.sogoucdn.com/app/a/100520146/d91d1d9eddf143c6c7c02bfb520bf511" w="{{device.width}}px" h="600px"/>
            <frame margin="50px 0 50px 0">
                <img src="http://img03.sogoucdn.com/app/a/100520146/eba76e0a89b2d22a7e151e27bd62e76b" w="40px" h="40x" layout_gravity="bottom" gravity="bottom"/>
                <input id="user" w="*" textSize="40px" textColor="#000000" hint="User" lines="1" marginLeft="50px" background="#00FFFFFF" gravity="bottom"/>
                <View w="*" h="4px" bg="#FF8080" marginBottom="15px" layout_gravity="bottom|center_horizontal"/>
            </frame>
            <frame margin="50px 0 50px 0">
                <img src="http://img02.sogoucdn.com/app/a/100520146/3b3514c3a6159ba5aebce4ff11a81dc5" w="40px" h="40x" layout_gravity="bottom" gravity="bottom"/>
                <input id="user" w="*" textSize="40px" textColor="#000000" hint="Password" lines="1" marginLeft="50px" background="#00FFFFFF" gravity="bottom"/>
                <View w="*" h="4px" bg="#FF8080" marginBottom="15px" layout_gravity="bottom|center_horizontal"/>
            </frame>
        </linear>
    </frame>
);
