# 前言

本项目的目标是实现微信小程序主页全可视化设计器，最大程度降低创建小程序主页的成本。


# 项目截图


<img src="https://github.com/CuiChuping/quick-site-admin/blob/master/screen/ColEditWindow.png?raw=true"/>


## 技术栈

vue2 + vue-router + webpack + svg


## 项目运行


```
git@github.com:CuiChuping/quick-site-admin.git

cd quick-site-admin

npm install

npm run dev
```

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.14.2 (18C54) Chrome 71.0.3578.98  nodejs v10.3.0

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

# 效果演示

[查看demo请戳这里](http://quick-site.debug2016.com/#/ColEditWindow)

# 目标功能

### 基本组件

- [x] 标题组件 -- 已完成
- [x] 文本组件 -- 已完成
- [ ] 图片组件 -- 进行中
- [ ] 轮播图组件 -- 进行中
- [ ] 视频组件 -- 进行中
- [ ] 图文组件 -- 进行中
- [x] 占位符组件 -- 已完成


### 高阶组件

- [x] 企业简介组件 -- 已完成
- [x] 企业咨询组件 -- 已完成
- [x] 管理团队组件 -- 已完成
- [x] 合作伙伴组件 -- 已完成
- [x] 电话组件 -- 已完成
- [x] 地址组件 -- 已完成
- [x] 联系我们组件 -- 已完成
- [ ] 企业招聘组件 -- 进行中


# 最终目标

降低创建微信小程序的门槛，完全可视化设计。用户只需花费很少的时间就可以构建一个丰富多彩有内涵的微信小程序。


# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
|-- README.md
|-- index.html
`-- src
    |-- assets                                  // 静态资源
    |   |-- default.png
    |   |-- image-1.png
    |   |-- image-2.gif
    |   |-- image-2.png
    |   |-- image-3.png
    |   |-- image-4.png
    |   |-- image-default.png
    |   |-- image-upload.jpg
    |   |-- logo.png
    |   `-- menu.png
    |-- components                              // 封装支持的小程序组件
    |   |-- base                                // 基础组件
    |   |   `-- Editor.vue                      // 富文本编辑器组件
    |   |-- ComponentCard.vue                   // 组件卡片组件
    |   |-- ComponentTabs.vue                   // 组件Tab页组件
    |   |-- Header.vue                          // 页面头组件
    |   |-- PhoneBox.vue                        // 预览组件容器组件
    |   |-- SettingBox.vue                      // 设置组件容器组件
    |   |-- address                             // 地址组件
    |   |   |-- AddressPreview.vue              // 地址预览组件
    |   |   `-- AddressSetting.vue              // 地址设置组件
    |   |-- companyConsult                      // 企业咨询组件
    |   |   |-- CompanyConsultPreview.vue       // 企业咨询预览组件
    |   |   `-- CompanyConsultSetting.vue       // 企业咨询设置组件
    |   |-- companyInfo                         // 企业预览组件
    |   |   |-- CompanyInfoPreview.vue          // 企业简介预览组件
    |   |   `-- CompanyInfoSetting.vue          // 企业简介设置组件
    |   |-- companyPartner                      // 合作伙伴组件
    |   |   |-- CompanyPartnerPreview.vue       // 合作伙伴预览组件
    |   |   `-- CompanyPartnerSetting.vue       // 合作伙伴设置组件
    |   |-- contactMe                           // 联系我们组件
    |   |   |-- ContactMePreview.vue            // 联系我们预览组件
    |   |   `-- ContactMeSetting.vue            // 联系我们设置组件
    |   |-- image                               // 图片组件
    |   |   |-- ImagePreview.vue                // 图片预览组件
    |   |   `-- ImageSetting.vue                // 图片设置组件
    |   |-- manageTeam                          // 管理团队组件
    |   |   |-- ManageTeamPreview.vue           // 管理团队预览组件
    |   |   `-- ManageTeamSetting.vue           // 管理团队设置组件
    |   |-- phone                               // 电话组件
    |   |   |-- PhonePreview.vue                // 电话预览组件
    |   |   `-- PhoneSetting.vue                // 电话设置组件
    |   |-- text                                // 文本组件
    |   |   |-- TextPreview.vue                 // 文本预览组件
    |   |   `-- TextSetting.vue                 // 文本设置组件
    |   |-- title                               // 标题组件
    |   |   |-- TitlePreview.vue                // 标题预览组件
    |   |   `-- TitleSetting.vue                // 标题设置组件
    |   `-- white                               // 占位符组件
    |       |-- WhitePreview.vue                // 占位符预览组件
    |       `-- WhiteSetting.vue                // 占位符设置组件
    |-- main.js                                 // 程序入口文件，加载各种公共组件
    |-- App.vue                                 // 页面入口文件
    |-- router                                  // 路由配置
    |   `-- index.js                            // 路由统一配置
    |-- styles                                  // 样式文件
    |   |-- common.css                          // 全局通用样式
    |   `-- fonts                               // 字体文件
    |       |-- icomoon.ttf                     // 字体图标
    |       `-- icomoon.woff                    // 字体图标
    `-- views                                   // Vue页面
        `-- ColEditWindow.vue                   // 编辑器主页面

19 directories, 47 files
```

# License

[GPL](https://github.com/CuiChuping/quick-site-admin/blob/master/COPYING)
