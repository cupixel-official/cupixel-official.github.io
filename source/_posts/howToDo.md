---
# 【必填】标题
title: "网站管理流程与规范"
# 【必填】创建日期
date: 2021-11-21 13:05:00
# 更新日期
update:  2021-11-21 13:05:00
# 【必填】标签
tags: 测试
# 封面图
img: 
# 是（true）否（false）置顶文章
top:
# 是（true）否（false）为首页轮播文章
cover: 
# 轮播文章封面
coverImg: 
# 文章简介、说明、描述
summary: ""
# 【必填】分类
categories: 测试
---

# 进入管理后台

请与相关管理员和负责人获得后台登入方式。

# 文章：增、删、改

## 新增文章

### 手机端

进入后台，点击左上角菜单（下文均称作“侧栏”），点击“文章”进入文章列表，然后点击“新建文章”即可创建新文章。

文章名称规范：

1. 使用英文或拼音（使用汉字因转义会导致链接过长）
2. 文章名不要有空格，使用下划线“_”代替空格
3. 其他规范待补全

### 电脑端

进入后台，在左侧栏点击“文章”进入文章列表，然后点击“新建文章”即可创建新文章。

文章名称规范：

1. 使用英文或拼音（使用汉字因转义会导致链接过长）
2. 文章名不要有空格，使用下划线“_”代替空格
3. 其他规范待补全

## 更改文章

在文章开头填写文章属性，根据提示填写。
文章属性使用 `yaml` 语法，如“cover: ”之后有一格空格。

| 正确 | 错误 |
| --- | --- |
| cover: true | cover:true |

文章正文使用 markdown 和 html 语法。
参考 [部署测试 | Cupixel 影视创作社](https://cupixel.pages.dev/hello-world/)

后台的编辑器提供了快速设置格式的功能，在编辑器上方有一行按钮。
在手机端中，此功能还有些问题，建议参考 [部署测试 | Cupixel 影视创作社](https://cupixel.pages.dev/hello-world/)中的语法。
在电脑端中，以此类推分别是：表情、标题、粗体、斜体、删除线、链接、无序列表、有序列表、任务列表、引用、分割线、代码块、行内代码、上传图片、表格、导出、全屏切换、预览。
其中常用的及语法请参考 [部署测试 | Cupixel 影视创作社](https://cupixel.pages.dev/hello-world/)。

## 删除文章

在“文章列表”中，每个文章右侧有两个“操作”按钮，分别是“编辑”和“删除”，前者点击后可修改文章，后者点击后可删除文章。

**删除文章前务必确认！**

# 更新公告

在侧栏中，点击“配置”，会出现多个配置文件，点击最后一个配置文件右侧的编辑按钮，找到约第 70 行。

```yml themes/hexo-theme-matery/_config.yml
dream:
  enable: true
  showTitle: true
  title: 公告
  text: 此处编辑公告内容，如需换行需要进行缩进，不熟悉yml语法则不建议换行。
```

同样需注意语法：

| 正确 | 错误 |
| --- | --- |
| text: 此处编辑公告内容，如需换行需要进行缩进，不熟悉yml语法则不建议换行。 | text:此处编辑公告内容，如需换行需要进行缩进，不熟悉yml语法则不建议换行。 |

# 主页视频

在侧栏中，点击“配置”，会出现多个配置文件，点击最后一个配置文件右侧的编辑按钮，找到约第 95 行。

| 属性 | 值 | 作用 |
| --- | --- | --- |
| enable | true/false | 启用或禁用 |
| showTitle | true/false | 显示标题 |
| title | 文本 | 标题 |
| iframeUrl | player.bilibili.com/player.html?aid=271&bvid=BV号&cid=3659795&page=1 | 链接 |

```yml themes/hexo-theme-matery/_config.yml
video:
  enable: true
  showTitle: true
  title: 精彩视频
  url: # url和iframeUrl其中一个必填
  iframeUrl: //player.bilibili.com/player.html?aid=271&bvid=BV1xx411c7Xg&cid=3659795&page=1 #在bilibili或者爱奇艺分享时选择iframe，然后填那个url来这里，sample: //player.bilibili.com/player.html?aid=669520137&bvid=BV1oa4y1L7mw&cid=234543483&page=1
  pic:
  thumbnails:
  height: # 如：400
  autoplay: false # 是否自动播放
  theme: '#303030'
  loop: false # 是否循环播放
  preload: 'auto' # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7
```

# 图片展示

此操作需要登入 Github 仓库进行修改，也可以将图片上传到图床，引用外部图片链接。

如引用外部链接，按以下配置：
在侧栏中，点击“配置”，会出现多个配置文件，点击最后一个配置文件右侧的编辑按钮，找到约第 243 行。
按照格式填写，例：

```yml themes/hexo-theme-matery/_config.yml
myGallery:
  enable: true
  data:
    - /medias/featureimages/0.jpg
    - /medias/featureimages/1.jpg
    - /medias/featureimages/2.jpg
    - https://jonnys.top/img/cover/009.webp
```

# 主页背景图

此操作需要登入 Github 仓库进行修改，可联系 Jonny 帮助更改。

# 相关链接

此操作需要登入 Github 仓库进行修改，可联系 Jonny 帮助更改。

# 社交、媒体链接

此操作需要登入 Github 仓库进行修改，可联系 Jonny 帮助更改。

# 发布更新

修改完成后，点击右上角“发布”或“保存”即可发布更新。

# 获取更多帮助

更多内容可前往

[http://blinkfox.com/2018/09/28/qian-duan/hexo-bo-ke-zhu-ti-zhi-hexo-theme-matery-de-jie-shao](http://blinkfox.com/2018/09/28/qian-duan/hexo-bo-ke-zhu-ti-zhi-hexo-theme-matery-de-jie-shao)

查看主题配置文档

或使用邮箱联系（联系前请先尝试在网络上查找资料自行解决，尝试无果再联系）

[jonnyjong@outlook.com](mailto:jonnyjong@outlook.com)

获取帮助，邮箱联系时请在邮件主题开头编写“Cupixel博客：”
简要说明来意，不定期回复。

[提问的艺术：如何让别人喜欢回答你的提问 - 简书 (jianshu.com)](https://www.jianshu.com/p/232d540fb454)

