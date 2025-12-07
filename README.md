# Astro Resume-CV

一个基于 Astro 框架构建的现代化、响应式个人简历/履历模板。

## ✨ 功能特点

- 🎨 **现代化设计**：采用现代 UI 设计理念，视觉效果美观专业
- 📱 **响应式布局**：完美适配桌面、平板和移动设备
- 🎭 **主题支持**：内置主题系统，支持自定义样式
- 🖨️ **打印友好**：提供专门的打印页面，优化打印效果
- 📊 **数据驱动**：// TODO: 简历数据与界面分离，便于维护和更新
- 🚀 **高性能**：基于 Astro 框架，构建速度快，加载性能优秀
- 💪 **TypeScript 支持**：完整的类型安全保障
- 🎯 **易于定制**：简单修改配置文件即可打造个人专属简历

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **包管理**: [pnpm](https://pnpm.io/)

## 🚀 快速开始

### 环境要求

- Node.js 18+（推荐使用最新 LTS 版本）
- pnpm 8+（或 npm/yarn）

### 🧞 指令

所有命令均在项目根目录的终端中运行：

| 命令                        | 说明                                             |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | 安装依赖                                          |
| `pnpm dev`                 | 启动本地开发服务器，地址为 <http://localhost:4321>   |
| `pnpm build`               | 构建生产版本到 `./dist/` 目录                       |
| `pnpm preview`             | 本地预览构建结果，便于部署前检查                      |
| `pnpm astro ...`           | 运行 Astro CLI 命令，如 `astro add`、`astro check` |
| `pnpm astro -- --help`     | 获取 Astro CLI 帮助信息                            |

## 📝 使用说明

### 修改简历数据

所有简历数据集中在 `src/CV.ts` 文件中，包括：

- 个人基本信息（姓名、联系方式等）
- 个人简介
- 职位期望
- 薪资期望
- 教育经历
- 专业技能

只需修改该文件中的对应字段即可更新简历内容。

### 自定义主题

主题文件位于 `src/themes/` 目录下，目前内置了 `endfield` 主题。您可以：

1. 修改现有主题的样式文件
2. 创建新的主题目录和样式文件

### 添加自定义内容

简历页面结构位于：
- `src/pages/index.astro` - 主页面
- `src/pages/print.astro` - 打印页面

您可以根据需要修改这些文件来调整页面结构和添加自定义内容。

## 📦 项目结构

```
├── src/
│   ├── assets/           # 静态资源文件
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面文件
│   │   ├── index.astro   # 主页面
│   │   └── print.astro   # 打印页面
│   ├── styles/           # 全局样式
│   ├── themes/           # 主题文件
│   │   ├── endfield/     # endfield 主题
│   │   └── ...           # TODO: 其他主题
│   └── CV.ts             # 履历数据配置
├── public/               # 公共资源
├── astro.config.mjs      # Astro 配置
├── package.json          # 项目依赖
└── tsconfig.json         # TypeScript 配置
```

## 🚢 部署

### GitHub Pages

项目已配置好 GitHub Actions 自动部署流程。只需将代码推送到 GitHub 仓库，即可自动部署到 GitHub Pages。

### 其他静态站点托管

由于项目构建后生成的是静态文件，您可以将 `dist` 目录部署到任何静态站点托管服务，如：

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [阿里云 OSS](https://www.aliyun.com/product/oss)
- [腾讯云 COS](https://cloud.tencent.com/product/cos)

## 📄 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件，您可以在遵守许可证条款的前提下自由使用、修改和分发本项目的代码。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

## 🔗 相关链接

- [Astro 官方文档](https://docs.astro.build/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

## 📧 联系方式

- 作者：刘悦阳
- 邮箱：Yue_plus@foxmail.com
- GitHub：[Yue-plus](https://github.com/Yue-plus)

---

如果本项目对你有所帮助，欢迎点亮 ⭐ Star！（若能提供一份工作机会，我将不胜感激）

## TODO

- [ ] 将简历数据与界面分离，声明类型，便于维护和更新
- [ ] 添加更多其他主题
- [ ] 添加更多自定义内容选项
- [ ] 提供更多部署选项
