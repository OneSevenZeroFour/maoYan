 ## maoYan
 基于react+redux+react-router+ES6+webpack的单页面应用.
 ## DEMAND ANALYSIS
 - 首页懒加载、tab切换路由且刷新后保持不变、定位
 - 各个页面渲染数据
 - 选座位后标绿、提交订单后变红
 - 美团登录，手机验证登录
 - Node.js服务器代理请求数据

 ## Installation(Git)

克隆项目地址并下载 
 ```js
 git clone git@github.com:OneSevenZeroFour/maoYan.git
 ```
 ## Installation(NPM)
`npm install`(需要安装Node.js v8以上版本)

 ## COMMAND

maoyan根目录下打开命令窗口
```js
webpack-dev-server
npm server
npm server1
```
 ## BROWER
用浏览器打开链接
```js
http://localhost:12345/#/home/movie
```
 ## PORTS

|port|url |method|params|other|
|-|-|-|-|-|
|登录接口|||||

|port|url |method|params|other|
|-|-|-|-|-|
|电影接口|`http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=99`|GET|无||


|port|url |method|params|other|
|-|-|-|-|-|
|电影详情接口|`http://m.maoyan.com/movie/`|GET|self.props.url||

|port|url |method|params|other|
|-|-|-|-|-|
|影院接口|`http://m.maoyan.com/cinemas.json`|GET|id||



|port|url |method|params|other|
|-|-|-|-|-|
|影院可放接口|`http://m.maoyan.com/showtime/wrap.json?cinemaid=17066&movieid=`|GET|cinemaid:cid;movieid:id;||



 ## 文件目录
```js

│  .babelrc                 //babel配置文件
│  .gitignore
│  index.js
│  package-lock.json
│  package.json             //npm依赖
│  README.md
│  sendSMS.js
│  server.js
│  server1.js
│  store.js                 //组件的通信
│  webpack.config.js        //webpack配置文件
│  
├─.idea
│      jsLibraryMappings.xml
│      maoYan.iml
│      misc.xml
│      modules.xml
│      preferred-vcs.xml
│      vcs.xml
│      workspace.xml
│      
├─components
│  ├─lantao
│  │      choseSeat.css     //选座位样式
│  │      choseSeat.jsx     //选座位组件
│  │      home.jsx          //首页
│  │      myHeader.css      //头部样式
│  │      myHeader.jsx      //头部组件
│  │      
│  ├─lmm
│  │      cinema.jsx
│  │      cinemaDetail.jsx
│  │      
│  ├─sun
│  │      mDetail.jsx
│  │      mDetail.scss
│  │      xnow.jsx
│  │      xnow.scss
│  │      
│  └─wwj
│      │  ChildMTaccountLogin.jsx
│      │  ChildPhoneLogin.jsx
│      │  login.css
│      │  login.jsx
│      │  
│      └─font_lefticon
│              demo.css
│              demo_fontclass.html
│              demo_symbol.html
│              demo_unicode.html
│              iconfont.css
│              iconfont.eot
│              iconfont.js
│              iconfont.svg
│              iconfont.ttf
│              iconfont.woff
│              
├─css
│      base.css
│      cinema.css
│      cinemaDetail1.css
│      
├─img
│      cat.png
│      
└─public
    │  bundle.js
    │  bundle.js.map
    │  index.html
    │  
    └─img
            1.png
            2.png
            3.png
            4.png
            5.png
            6.png
```
            

