import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Junior Jellies",
  description: "Presented by FTC Team #4654 Jellyfish",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      '/java/': sidebarJava()
    },

  }
})

function nav() {
  return [
    { text: 'Guide', link: '/java/getting-started', activeMatch: '/java/' },
  ]
}

function sidebarJava() {
  return [
    {
      text: 'Java Lessons',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/java/getting-started' }
      ]
    },
  ]
}