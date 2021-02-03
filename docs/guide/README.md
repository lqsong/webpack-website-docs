# 介绍
[webpack-website ![GitHub stars](https://img.shields.io/github/stars/lqsong/webpack-website.svg?style=social&label=Stars)](https://github.com/lqsong/webpack-website) 是一个前台模板前端模块化方案，它基于 [Webpack](https://webpack.js.org) 构建的多页面项目。

## 功能

```
- 自动导入页面功能
- 新增环境变量功能
- 代码提取与压缩功能
- 图片处理功能
- Mock Data 功能
```

## 前序准备

在开始之前，推荐先学习  [Webpack](https://webpack.js.org) 、 [ES2015+](http://es6.ruanyifeng.com/) 、 [TypeScript](https://github.com/Microsoft/TypeScript)  , 了解 [Mock.js](https://github.com/nuysoft/Mock) ，提前了解和学习这些知识会对使用本项目有很大的帮助，因为本项目技术栈都是基于它们。


## 目录结构

本项目已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

### JavaScript 版

```bash
├── dist                       # 生产项目目录
├── mock                       # Mock文件目录
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   │   ├── css                # 项目公用 CSS 样式
│   │   └── img                # 项目图片目录
│   ├── config                 # 配置
│   │   │── webpack.common.js  # webpack 公共配置
│   │   │── webpack.dev.js     # webpack 开发配置
│   │   └── webpack.prod.js    # webpack 生产配置
│   ├── modules                # 全局 模块目录
│   └── pages                  # 页面目录(所有页面放在这里)
│       └── contact            # 页面-联系(这里作为说明样例)
│           ├── modules        # 当前页面 模块目录(可选)
│           ├── main.html      # 当前页面html入口(必须)
│           ├── main.js        # 当前页面js入口(必须)
│           └── main.scss      # 当前页面css文件(可选)
├── .babelrc                   # babel配置
├── .env.development           # 开发环境变量配置
├── .env.production            # 生产环境变量配置
├── .eslintignore              # eslint 忽略文件配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # Git忽略文件配置
├── package.json               # 项目信息
├── postcss.config.js          # postcss 配置
└── README.md                  # readme
```

### TypeScript 版


```bash
├── dist                       # 生产项目目录
├── mock                       # Mock文件目录
├── src                        # 源代码
│   ├── assets                 # 静态资源
│   │   ├── css                # 项目公用 CSS 样式
│   │   └── img                # 项目图片目录
│   ├── config                 # 配置
│   │   │── webpack.common.js  # webpack 公共配置
│   │   │── webpack.dev.js     # webpack 开发配置
│   │   └── webpack.prod.js    # webpack 生产配置
│   ├── modules                # 全局 模块目录
│   └── pages                  # 页面目录(所有页面放在这里)
│       └── contact            # 页面-联系(这里作为说明样例)
│           ├── modules        # 当前页面 模块目录(可选)
│           ├── data.d.ts      # 当前页面 TS 类型定义文件(可选)
│           ├── main.html      # 当前页面html入口(必须)
│           ├── main.ts        # 当前页面ts入口(必须)
│           └── main.scss      # 当前页面css文件(可选)
├── .babelrc                   # babel配置
├── .env.development           # 开发环境变量配置
├── .env.production            # 生产环境变量配置
├── .eslintignore              # eslint 忽略文件配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # Git忽略文件配置
├── package.json               # 项目信息
├── postcss.config.js          # postcss 配置
├── README.md                  # readme
├── tsconfig.json              # typescript 配置
└── typings.d.ts               # 全局 TS 类型定义文件
```


## 安装

```bash
# 克隆项目
git clone -b typescript https://github.com/lqsong/webpack-website.git
# or 
# git clone -b javascript https://github.com/lqsong/webpack-website.git

# 进入项目目录
cd webpack-website

# 复制文件
copy .env.development  .env.development.local # 启用或修改里面的参数

# 安装依赖，推荐使用 yarn 
yarn 
# or
npm install

# 本地开发 启动项目
yarn serve
# or
npm run serve
```

> 推荐使用 yarn , **[yarn安装与常用命令](http://liqingsong.cc/article/detail/9)** 。


<br/>

启动完成后会，打开浏览器访问 [http://localhost:8000](http://localhost:8000)， 你会看到项目默认基于 `jquery`、 `bootstrap` 实现的 Demo。


接下来你可以按照规则开发自己的项目了，你可以继续阅读和探索左侧的其它文档。


## Contribution

本文档项目地址 [webpack-website-docs](https://github.com/lqsong/webpack-website-docs) 基于 [vuepress](https://github.com/vuejs/vuepress)开发。

有任何修改和建议都可以该项目 pr 和 issue

[webpack-website](https://github.com/lqsong/webpack-website) 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和[反馈](https://github.com/lqsong/webpack-website/issues)。

## 捐赠

如果你觉得这个项目帮助到了你，请帮助 [![GitHub stars](https://img.shields.io/github/stars/lqsong/webpack-website.svg?style=social&label=Stars)](https://github.com/lqsong/webpack-website)，你也可以请作者喝咖啡表示鼓励.

**ALIPAY**             |  **WECHAT**
:-------------------------:|:-------------------------:
![Alipay](https://gitee.com/lqsong/public/raw/master/common/Alipay.png)  |  ![Wechat](https://gitee.com/lqsong/public/raw/master/common/Wechat.png)
