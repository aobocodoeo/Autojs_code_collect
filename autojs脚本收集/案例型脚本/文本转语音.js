/**
 * @file
 * 使用百度tts免费接口开发，具体文档：https://cloud.baidu.com/doc/SPEECH/TTS-API.html#.E7.AE.80.E4.BB.8B-1
 * 你可以申请自己的 appKey 和 appSecret https://console.bce.baidu.com/ai/?_=1556240622173#/ai/speech/app/list
 * 我保留了自己的 appKey 和 appSecret 但是在7天后他们会失效，请尽快申请自己的
 * 转换后的音频文件保存在 '/sdcard/tts.mp3' 中，调试后可自行删除此文件
 */
const appKey = 'dEXKX6WMPbYRvYZMt3aq5tqS'
const appSecret = 'jQpMUYfyKIqhxBPUNwfUon0GmAxbPwzN'

let token = ''

const path = '/sdcard/tts.mp3'

dialogs.rawInput('输入一段文本', '', res => {
  getToken().then(token => {
    http.post(
      'http://tsn.baidu.com/text2audio',
      {
        tex: encodeURIComponent(res),
        tok: token,
        cuid: 'xxxxxxxxx12431847328943789',
        ctp: 1,
        lan: 'zh'
      },
      null,
      audioRes => {
        console.show()
        console.log(audioRes.body)
        files.writeBytes(path, audioRes.body.bytes())
        sleep(1000)
        media.playMusic(path)
        sleep(media.getMusicDuration())
      }
    )
  })
})

function getToken() {
  return new Promise((resolve, reject) => {
    if (token) {
      resolve(token)
    } else {
      http.get(
        'https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=' +
          appKey +
          '&client_secret=' +
          appSecret,
        null,
        res => {
          token = res.body.json().access_token
          resolve(token)
        }
      )
    }
  })
}
