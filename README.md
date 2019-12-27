# react-base

## 项目结构

```bash
. 
├── build                       # webpack配置
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                      # 项目配置相关目录
├── src                         # 主目录
│   ├── assets                  # 静态资源
│   │   └── images
│   ├── components              # 公共组件
│   ├── pages                   # 页面
│   ├── redux                   # redux
│   │   ├── actions
│   │   ├── actions.js
│   │   ├── reducers
│   │   ├── reducers.js
│   │   └── store.js
│   ├── router                  # 路由
│   ├── app.js                  # 根组件
│   ├── index.js                # 入口文件
│   └── index.template.html     # html模板
├── tests                       # 测试相关目录
├── jest.config.js              # Jest测试配置文件
├── .browserslistrc             # browserslist配置文件
├── .eslintrc.js                # Eslint配置文件
├── babel.config.js
└── postcss.config.js
```
