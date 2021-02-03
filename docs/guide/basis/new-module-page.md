# 新增页面

`webpack-website` 所有的页面放在 `src/pages` 目录下，并实现了自动导入功能。

查看 `src/pages/contact` 联系页面样例代码，其目录格式如下：

## JavaScript 版

```bash

├── src                        # 源代码
    └── pages                  # 页面目录(所有页面放在这里)
        └── contact            # 页面-联系(这里作为说明样例)
            ├── modules        # 当前页面 模块目录(可选)
            ├── main.html      # 当前页面html入口(必须)
            ├── main.js        # 当前页面js入口(必须)
            └── main.scss      # 当前页面css文件(可选)

```

## TypeScript 版


```bash
├── src                        # 源代码
    └── pages                  # 页面目录(所有页面放在这里)
        └── contact            # 页面-联系(这里作为说明样例)
            ├── modules        # 当前页面 模块目录(可选)
            ├── data.d.ts      # 当前页面 TS 类型定义文件(可选)
            ├── main.html      # 当前页面html入口(必须)
            ├── main.ts        # 当前页面ts入口(必须)
            └── main.scss      # 当前页面css文件(可选)

```


:::tip 重点
根据以上可以看出，每个页面以模块的方式存在，其内容包括 modules、html入口、js入口、css文件、ts类型文件，方便统一维护与复用。

`main.html`、`main.(js|ts)` 必须存在，因为是实现自动导入的基础条件。
:::


