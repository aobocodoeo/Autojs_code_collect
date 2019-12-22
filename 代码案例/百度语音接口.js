
     //获取token
     var 获取token = 'https://aip.baidubce.com/oauth/2.0/token';
    
     var 值 = http.post(获取token,{
         'grant_type'    : 'client_credentials', //固定值
         'client_id'     : 'VahvBXcwkhL5XhmY4Ambb', //填写你的 APIKey
         'client_secret' : 'ATDx5dZEYfCXB5cQN0EZW9m5h', //填写你的 SecretKey
     });
         
     var Token = 值.body.json().access_token;
     
     

       
       var 发出 = 'http://tsn.baidu.com/text2audio';
             var 接受 = http.post(发出, {
                 'tok' : Token,
                 'tex' : a,
                 'cuid' : '863281030228548',
                 'ctp': '1',
                 'lan': 'zh',
                 'spd': '2',//语速0-15 5
                 'pit': '5',//音调0-15 5
                 'vol': '15',//音量0-15 5
                 'per': '1',//	发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
                 'aue': '3',//	3为mp3格式(默认)； 4为pcm-16k；5为pcm-8k；6为wav（内容同pcm-16k）; 注意aue=4或者6是语音识别要求的格式，但是音频内容不是语音识别要求的自然人发音，所以识别效果会受影响。
             
             });
                var a=接受.body.bytes();
                files.writeBytes("/sdcard/百度测试.mp3",a);
                sleep(10)
                files.exists("/sdcard/百度测试.mp3")
                var y=files.exists("/sdcard/百度测试.mp3")
                log(y)
