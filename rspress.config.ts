import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  lang:"en",
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Modern.js',
      description: 'Modern.js 文档框架',
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
      title: 'Modern.js',
      description: 'Rspress',
    },
  ],

  root: path.join(__dirname, 'docs'),
  title: 'AnyNote Official Website',
  description: 'a simple note app',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/ychisbest/AnyNote' },
    ],
  },
  
});