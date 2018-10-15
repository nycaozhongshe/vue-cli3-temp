let url = 'https://api.jiazhilifang.com/vc_recruit'
// let url = 'http://192.168.1.28:8080/vc_recruit';

// let url = 'http://192.168.1.24:8083/vc_recruit';

// let url = 'http://192.168.1.27:8088/vc_recruit';

// let url = 'http://192.168.1.21:8080/vc_recruit';

// let url = 'http://39.104.179.182:8090/vc_recruit';

if (process.env.NODE_ENV === 'production') { url = 'https://api.jiazhilifang.com/vc_recruit' }

module.exports = {
  baseUrl: url
}
