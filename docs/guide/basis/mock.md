# Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

## 约定式 Mock 文件

:::tip 
`webpack-website` 基于 [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) 实现了本地 MOCK 服务，并集成了[mockjs](https://github.com/nuysoft/Mock)。
:::

`/mock` 文件夹下所有文件为 mock 文件。

比如：

```
.
├── mock
    ├── global.js
    └── contact.js
```

`/mock` 下的 `***.js` 会被解析为 mock 文件。


### mock文件内容格式

```js
module.exports = {
  
  // 'method url': (req, res) => {}   

  'get /404': (req, res) => {
      res.status(404).send({
        timestamp: 1513932643431,
        status: 404,
        error: 'Not Found',
        message: 'No message available',
        path: '/404',
      });
  }
};
```

> 注意：`'method url': (req, res) => {}` 代码 `method`与`url`中间有一个空格。

#### method 支持

 `'method url': (req, res) => {}` 中 `method` 支持 ['get','post','put','patch','delete','head','options']。 

#### req 参数

`'method url': (req, res) => {}` 中 `req` 常用值：`req.headers` 、 `req.body`、 `req.query`。

#### res 参数

`'method url': (req, res) => {}` 中 `res` 常用方法：`res.send({返回值})` 、 `res.status(状态码)`。

### 样例代码

**/mock/contact.js 代码**

```js
const { WEBSITE_APP_APIHOST } = process.env;
const mock = {};

mock[`POST ${WEBSITE_APP_APIHOST}/contact`] = (req, res) => {
    res.send({
        code: 0,
        data: '',
        msg: 'success',
    });
};



module.exports = {
  ...mock
};
```




## 开源的api文档管理系统

线上有很多开源的api文档管理系统，如果个人或公司满足业务需求条件的情况下，可以自己进行安装、调试以供开发使用。

### 1、YApi(百度)

YApi 是高效、易用、功能强大的 api 管理平台，旨在为开发、产品、测试人员提供更优雅的接口管理服务。可以帮助开发者轻松创建、发布、维护 API，YApi 还为用户提供了优秀的交互体验，开发人员只需利用平台提供的接口数据写入工具以及简单的点击操作就可以实现接口的管理。[Github](https://github.com/YMFE/yapi)

### 2、阿里的RAP（JAVA）
::: warning 注意：
新版 RAP2 已不是 JAVA 开发 具体请看 [**说明**](https://github.com/thx/rap2-delos#rap2-delos-开源社区版本-后端-api-服务器)
:::
Web接口管理工具，开源免费，接口自动化，MOCK数据自动生成，自动化测试，企业级管理。阿里妈妈MUX团队出品！阿里巴巴都在用！1000+公司的选择！一直被抄袭，从未被超越 。
[GitHub](https://github.com/thx/rap2-delos)

### 3、ShowDoc（PHP）
国内开源的非常好用的一款API文档管理系统，安装也非常方便，只需将源代码放到项目目录下自动安装运行即可。
[GitHub](https://github.com/star7th/showdoc)

当然还有一些其它的产品 [swagger](https://swagger.io/) 、[eoapi](https://www.eoapi.cn/)、[postman](https://www.postman.com/) 等等，这里就不一一列举了，自己有兴趣可以自己去查找资料。

