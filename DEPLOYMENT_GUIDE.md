# 静态个人展示网站部署指南

## 项目结构
```
├── index.html          # 主页面
├── css/                # 样式文件目录
│   └── style.css       # 主样式文件
├── js/                 # JavaScript文件目录
│   └── main.js         # 主脚本文件
└── assets/             # 静态资源目录
    ├── avatar.png      # 个人头像
    ├── project1.png    # 项目截图1
    ├── project2.png    # 项目截图2
    ├── project3.png    # 项目截图3
    └── project4.png    # 项目截图4
```

## 部署到GitHub Pages

1. **创建GitHub仓库**
   - 登录GitHub，点击"New repository"
   - 填写仓库名称，选择"Public"，点击"Create repository"

2. **上传文件**
   - 克隆仓库到本地：`git clone https://github.com/yourusername/your-repo.git`
   - 将项目文件复制到仓库目录
   - 提交并推送：
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

3. **配置GitHub Pages**
   - 进入仓库设置，点击"Pages"
   - 在"Source"选项中，选择"main"分支，点击"Save"
   - 稍等几分钟，你的网站就会在 `https://yourusername.github.io/your-repo/` 上线

## 部署到Gitee Pages

1. **创建Gitee仓库**
   - 登录Gitee，点击"新建仓库"
   - 填写仓库名称，选择"公开"，点击"创建"

2. **上传文件**
   - 克隆仓库到本地：`git clone https://gitee.com/yourusername/your-repo.git`
   - 将项目文件复制到仓库目录
   - 提交并推送：
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin master
     ```

3. **配置Gitee Pages**
   - 进入仓库设置，点击"服务" -> "Gitee Pages"
   - 选择"master"分支，点击"启动"
   - 稍等几分钟，你的网站就会在 `https://yourusername.gitee.io/your-repo/` 上线

## 部署到Netlify

1. **创建Netlify账户**
   - 访问 https://www.netlify.com/，注册并登录

2. **部署网站**
   - 点击"Add new site" -> "Import an existing project"
   - 选择"GitHub"（或其他Git提供商）
   - 选择你的仓库
   - 点击"Deploy site"
   - 稍等几分钟，你的网站就会在一个随机生成的Netlify域名上线

3. **自定义域名**
   - 在Netlify控制台，进入网站设置
   - 点击"Domain settings"
   - 点击"Add custom domain"，输入你的域名
   - 按照提示配置DNS记录

## 常见问题排查

1. **404页面**
   - 检查文件路径是否正确
   - 确保index.html文件存在于根目录
   - 检查部署配置是否正确

2. **资源加载失败**
   - 检查资源路径是否正确（相对路径 vs 绝对路径）
   - 确保资源文件已上传到仓库
   - 检查文件权限是否正确

3. **响应式设计问题**
   - 检查CSS媒体查询是否正确
   - 测试不同屏幕尺寸的显示效果
   - 确保图片使用了正确的尺寸和格式

## 性能优化说明

### 1. 图片优化
- **格式选择**：使用WebP格式图片，保留原图备份
- **压缩工具**：使用TinyPNG、Squoosh等工具压缩图片
- **懒加载**：使用原生JavaScript实现图片懒加载，减少首屏加载时间

### 2. CSS/JS优化
- **代码压缩**：使用在线工具或构建工具压缩CSS和JavaScript代码
- **去注释**：移除不必要的注释和空白行
- **合并文件**：将多个CSS/JS文件合并为一个，减少HTTP请求

### 3. 字体优化
- **系统字体**：优先使用系统无衬线字体，减少字体文件加载
- **按需加载**：仅加载必要的字体文件
- **字体显示**：使用`font-display: swap`确保文本快速显示

### 4. 其他优化
- **缓存策略**：配置适当的缓存策略，减少重复请求
- **GZIP压缩**：启用服务器端GZIP压缩，减少传输大小
- **CDN使用**：使用CDN加速静态资源加载

### 性能目标
- 页面总大小 < 500KB
- 首屏加载 < 1.5s
- 支持Chrome/Firefox/Safari/Edge主流版本
- 符合WCAG 2.1可访问性标准

## 后续维护

1. **内容更新**：直接修改index.html文件中的内容，然后重新部署
2. **样式调整**：修改css/style.css文件，然后重新部署
3. **功能扩展**：修改js/main.js文件，然后重新部署
4. **性能监控**：使用Google PageSpeed Insights、Lighthouse等工具定期检查网站性能