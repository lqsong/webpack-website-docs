# 配置

配置是开发一个项目的重要环节，它是一个项目的基础。想要了解一个项目，先要了解它的配置。


## webpack 配置

`webpack-website` 基于 `webpack`来进行构建，所以你会在 `/src/config` 目录下看到三个配置文件：


```bash
├── src                        # 源代码
    └── config                 # 配置
        │── webpack.common.js  # webpack 公共配置
        │── webpack.dev.js     # webpack 开发配置
        └── webpack.prod.js    # webpack 生产配置
```

对应的参数你可以参照 [webpack官方文档](https://webpack.js.org/configuration/)。

:::tip
基于 webpack 自定义了如下功能:
```
- 自动导入页面功能
- 新增环境变量功能
- 代码提取与压缩功能
- 图片处理功能
- Mock Data 功能
```
:::



## 环境

`webpack-website` 基于 `webpack` 来进行构建, 本项目默认情况下，有两个环境

- `development` 开发环境用于 `cross-env NODE_ENV=development webpack-dev-server`
- `production` 生产环境用于 `cross-env NODE_ENV=production webpack`


## 环境变量

`webpack-website` 基于 `webpack` 、`dotenv` 你可以在你的项目根目录中放置下列文件来指定环境变量。

```sh
.env                    # 在所有的环境中被载入
.env.local              # 在所有的环境中被载入，但会被 git 忽略
.env.[NODE_ENV]         # 只在指定的环境中被载入
.env.[NODE_ENV].local   # 只在指定的环境中被载入，但会被 git 忽略
```

一个环境文件只包含环境变量的“键=值”对，但 “键” 必须以 `WEBSITE_APP_` 为前缀：

```sh
# mock 是否开启 true|false ， development环境有效
WEBSITE_APP_MOCK = true

#api接口域名
WEBSITE_APP_APIHOST = /api
```

:::tip 环境文件加载优先级
```
.env.[NODE_ENV].local > .env.[NODE_ENV] > .env.local > .env
```
:::


:::warning 注意
新增环境变量后需要到:

- `.eslintrc.js` 文件中的 `globals` 字段下启用
- `typings.d.ts` 文件中定义类型，如：`declare const WEBSITE_APP_APIHOST: string;`

:::

## 增删第三方插件

默认项目是基于 `jquery`、`bootstrap` 开发的Demo。

比如你需要 `bootstrap` 换成 `jqueryui`, 如下执行即可:

```sh
yarn remove bootstrap
yarn add jquery-ui
```

然后对应页面 `bootstrap` 引用换成 `jqueryui`

:::tip 重点

类似于 `jquery`, 第三方插件基于它，需要如下设置：

`src/config/webpack.common.js` 文件中:

```js
module.exports =  {
     module: {
          rules: [
            // 设置 jquery 全局
            {
              test: require.resolve("jquery"),
              loader: "expose-loader",
              options: {
                exposes: ["$", "jQuery"],
              },
            },
          ]
     }
}
```

:::

**根据以上举例说明，增删其他第三方插件同理操作。**
