<script setup lang="ts">
const portfolioItems = [
  {
    title: 'Positivus Landing',
    desc: 'An example of an adaptive and accessible pixel-perfect landing page, demonstrating my attention to detail and knowledge of  HTML and modern CSS development.',
    built: 'Vue 3, Vite and SCSS',
    repo: 'https://github.com/aniamarkh/positivus-landing',
    deploy: 'https://positivus-landing-aniamarkh.vercel.app/',
    screenshot: 'positivus.png',
  },
  {
    title: 'WYSIWYG editor',
    desc: 'A Vue-based WYSIWYG editor. Features include editable text, edit history navigation, text formatting, image insertion via URL, and HTML copy to clipboard. And some research in README.md %)',
    built: 'Vue, TipTap library',
    repo: 'https://github.com/aniamarkh/editor-wysiwyg',
    deploy: 'https://editor-wysiwyg.vercel.app/',
    screenshot: 'editor.png',
  },
  {
    title: 'Weather App',
    desc: 'Classic weather app that demonstrates my skills in working with REST API and asynchronous operations, developed with a mobile-first approach, accessible.',
    built: 'Vue 3 & TS, Vite, SCSS, Vuex and ECharts',
    repo: 'https://github.com/aniamarkh/weather-forecast',
    deploy: 'https://weather-forecast-aniamarkh.vercel.app/',
    screenshot: 'weather.png',
  },
  {
    title: 'Kanban Board',
    desc: 'Single-board Kanban system with drag-and-drop features. Demonstrates my skills in working with state managers, as well as handling forms and their validation.',
    built: 'Vue 3 & TS, SCSS, Pinia, drag&drop, Vitest & Vue Testing Utils',
    repo: 'https://github.com/aniamarkh/kanban-board',
    deploy: 'https://kanban-aniamarkh.vercel.app/',
    screenshot: 'kanban.png',
  },
  // {
  //   title: 'Movie App',
  //   desc: `Demonstrates basic knowledge of React and its ecosystem. Allows users to search for movies using the themoviedb API. It also features a validated form page.`,
  //   built: 'React, Vite, Vitest, React Redux, React Router and React Hook Form',
  //   repo: 'https://github.com/aniamarkh/rsschool-react',
  //   deploy: 'https://rsschool-react-coral.vercel.app/',
  //   screenshot: 'movie.png',
  // },
  {
    title: "'Other bookmarks' Manager",
    desc: 'Drag-and-drop manager for the Other Bookmarks folder in Chrome New Tab with a custom theme and full data synchronization through the Chrome API.',
    built: 'Chrome API, Vue 3 & TS, Vue.Draggable and Vueform',
    repo: 'https://github.com/aniamarkh/bookmarks',
    deploy: 'https://chrome.google.com/webstore/detail/kartotek/hcinbgecljcibhpfpjibkodifeaanjep',
    screenshot: 'bookmarks.png',
  },
  {
    title: 'Kettle Remote Control',
    desc: `An app that allows my friend to remotely control his kettle through a web interface after authorization, it connects to the kettle's retrofitted microcontroller via WebSocket. A Node.js server has been implemented for demonstration purposes.`,
    built: 'Vue 3 & TS, Node.js, SCSS, Websocket',
    repo: 'https://github.com/aniamarkh/kettle-station',
    deploy: 'https://kettle-station.vercel.app/',
    screenshot: 'kettle.jpg',
  },
  // {
  //   title: 'RS Lang',
  //   desc: 'RS School course final team-project: an app for learning foreign words with an electronic textbook, mini-games and a statistics page to track progress.',
  //   built: 'TS and Chart.js',
  //   repo: 'https://github.com/aniamarkh/rslang',
  //   deploy: 'https://rslang-aniamarkh.vercel.app/',
  //   screenshot: 'lang.png',
  // },
];
</script>

<template>
  <div id="portfolio" class="flex flex-col gap-2">
    <h1 class="title text-xl mb-5 mt-14">
      <span class="material-symbols-outlined text-xl" aria-hidden="true"> construction </span>Recent
      projects
    </h1>
    <div class="grid grid-cols-1 gap-6">
      <PortfolioItem
        v-for="(item, index) of portfolioItems"
        :key="index"
        :title="item.title"
        :desc="item.desc"
        :built="item.built"
        :repo="item.repo"
        :deploy="item.deploy"
        :screenshot="`../assets/${item.screenshot}`"
      />
    </div>
  </div>
</template>
