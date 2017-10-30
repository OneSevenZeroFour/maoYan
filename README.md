# maoYan
组员（孙杰辉、兰涛、梁嫚嫚、王文健）
 #### 需求分析：
 - 1、首页懒加载、tab切换路由且刷新后保持不变、定位
 - 2、各个页面渲染数据
 - 3、选座位后标绿、提交订单后变红
 - 4、美团登录，手机验证登录
  #### 运行方式
 - 1、根据package.json安装npm相关依赖(需要安装Node.js v8以上版本)
 - 2、该目录下打开命令窗口输入webpack-dev-server
 - 3、该目录下打开命令窗口输入npm server
 #### 接口使用

 #### 文件目录
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
│  │      movie.jsx
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
            

