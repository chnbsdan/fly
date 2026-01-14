---
title: "GitHub + PicList + Vercel 免费搭建高速图床"
published: 2025-12-19
pinned: false
description: "用GitHub + PicList + Vercel 免费搭建高速图床，今天以笔记的形式记录搭建时的操作步骤并记录下来，此方法大多人都能用得上，重点是稳定且免费。"
tags: [vercel,教程,博客指南,piclist]
category: "项目搭建"
licenseName: "CC BY 4.0"
author: "小史先森"
sourceLink: "https://txn.hangdn.net"
draft: false
date: 2025-12-19
# 修改这里：将对象改为字符串
image: "https://images.myso.dpdns.org/GitHub%20%2B%20PicList%20%2B%20Vercel.webp"
# 如果需要 alt 文本，可以放在其他地方或删除
pubDate: 2025-12-19
---

# ` GitHub + PicList + Vercel 免费搭建高速图床，还可以使用 CDN 轻松加速访问！`

今天在一博友的博文中看到用GitHub + PicList + Vercel 免费搭建高速图床，今天以笔记的形式记录搭建时的操作步骤并记录下来，此方法大多人都能用得上，重点是稳定且免费。

采用更简单的方案——利用 GitHub 作为存储。

通常情况下，GitHub 并不会主动审查私有仓库的内容或大小，只要不影响 GitHub 基础设施或违反服务条款，就不会被干预。因此，它可以成为一个不错的存储选择。

# 事前准备

- 域名（非必须，你也可以使用免费域名，或者Vercel分配的域名也可以）
- GitHub（必须，你需要注册一个GitHub帐号）
- Vercel（必须，你需要注册一个Vercel帐号，你也可以直接使用Vercel分配的域名，当然你也可以使用Cloudflare部署，基本步骤流程一样。）

# 创建Github私库并获取Token

## 1.创建一个Github仓库的私库,打开：https://github.com/new 看图设置，项目名称随你设置，最后点击 Create repository 完成创建！
![](https://images.myso.dpdns.org/20250723-5.webp)

## 2.获取 Github Token 打开：https://github.com/settings/tokens，然后点击 Generate new Token(Classic) ，把 repo 的勾打上，根据自己的需要设定过期时间(我设置的不过期)。然后翻到页面最底部，点击 Generate Token 的绿色按钮生成token。
![](https://images.myso.dpdns.org/20250723-3.webp)

## 3.Token只会显示一次，请复制Token后存到安全的地方，稍后设置软件需要用到，Github的相关设置完成！
![](https://images.myso.dpdns.org/20250723-4.webp)

# Vercel部署

## 1.使用Vercel部署 打开：https://vercel.com/new 选择你刚创建的私库！
![](https://images.myso.dpdns.org/20250723-5.webp)

## 2.直接点击 Deploy 部署即可，项目名称随你设置，我就默认了，等待部署完成。
![](https://images.myso.dpdns.org/20250723-6.webp)

## 3.给项目设置自定义域名，套上 CDN 加速。
![](https://images.myso.dpdns.org/20250723-8.webp)

## 4.完成上一步操作后你设置的自定义域名，稍后设置软件需要用到，Vercel的相关设置完成！

# Cloudflare部署

可选项！！！这两个部署选一个就行，因为Vercel部署有现成的加速方案，我一般偏向使用Vercel进行部署，Cloudflare部署，我是没有什么好的加速方案，所以就不详细演示了。基本同理操作就是没有上方的套 CDN 加速的步骤。
## 1.选择你刚创建的私库。
![](https://images.myso.dpdns.org/20250723-9.webp)
## 2.保存并部署。
![](https://images.myso.dpdns.org/20250723-10.webp)

# PicList相关设置

[Piclist为开源项目](https://github.com/Kuingsmile/PicList/releases)，操作界面很贴心，下面为设置操作：
## 1.点击软件界面中的 图床 → Gihub → 设置修改
![](https://images.myso.dpdns.org/20250723-11.webp)

## 2.按照下方图片进行设置，设置完成最后点击确定保存！
```PLAINTEXT
"图床配置名" = 图床配置名，你自己随意设置
"设定仓库名" = 格式是username/reponame，你的Github用户名/仓库地址，例如:zrf/images
"设定分支名" = 分支名，默认是main
"设定Token" = Github token
"设定储存路径" = 用于指定图片存储位置，不填写则默认存储在默认位置，自定义存储路径，例如:img/
"设定自定义域名" = 用于指定图片自定义域名，一般用于CDN加速。自定义域名，注意要加http://或者https://，域名最后面的/不要加
```
![](https://images.myso.dpdns.org/20250723-12.webp)

## 3.软件首页 上传区 切换使用你的Github图床，也可在 图床 → Gihub → 设置为默认图床

![](https://images.myso.dpdns.org/20250723-13.webp)

## 4.你可以使用 PicList 上传图片视频以及压缩包等，Github 支持很多上传格式，到此就完成了图床的所有设置！
![](https://images.myso.dpdns.org/20250723-14.webp)


#### 选择 Vercel （或 Cloudflare） 进行项目部署并配置自定义域名，实现 CDN 加速，该方案不仅满足了图片、视频和压缩包等多种格式的云存储需求，同时也提高了资源加载速度和使用体验，本文使用的图片就是采这种方搭建的图床，效果见本文图片。通过本教程，用户将能够高效构建一个具备完整图床服务的云存储平台。


原文[链接](https://blog.zrf.me/p/Notes-GitHub-PicList-Vercel/)
