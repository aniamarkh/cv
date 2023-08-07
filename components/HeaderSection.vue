<script setup lang="ts">
const isNavOpen = ref(false);
const navItems = [
  {
    title: 'About me',
    href: '#about',
    isHiddenOnDesktop: false,
  },
  {
    title: 'Skills',
    href: '#skills',
    isHiddenOnDesktop: true,
  },
  {
    title: 'Experience',
    href: '#experience',
    isHiddenOnDesktop: true,
  },
  {
    title: 'Portfolio',
    href: '#portfolio',
    isHiddenOnDesktop: false,
  },
];

const toggleMobileNav = () => {
  isNavOpen.value = !isNavOpen.value;
  isNavOpen.value
    ? (document.documentElement.style.overflowY = 'hidden')
    : (document.documentElement.style.overflowY = '');
};

const mobileNavStyle = computed(() => {
  return isNavOpen.value ? 'right: 0;' : 'right: -590px;';
});

const checkScreen = () => {
  if (isNavOpen.value && window.innerWidth > 575) {
    toggleMobileNav();
  }
};

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});
</script>

<template>
  <header class="sticky h-14 top-0 z-20 px-5 py-2 bg-white dark:bg-darkgrey sm:h-0 sm:py-0">
    <nav>
      <NavButton :is-nav-open="isNavOpen" @toggle="toggleMobileNav" />
      <ul id="menu" class="desktop-nav sm:mobile-nav" :style="mobileNavStyle">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item sm:hover:text-white sm:block"
          :class="{ hidden: item.isHiddenOnDesktop }"
          @click="isNavOpen && toggleMobileNav()"
        >
          <a class="nav-link" :href="item.href">{{ item.title }}</a>
        </li>

        <li
          class="cursor-pointer ml-auto border-solid border border-black hover:bg-accent hover:text-white hover:border-accent transition-all dark:border-lightgrey dark:hover:border-accent dark:hover:text-black sm:mobile-download-btn"
        >
          <a class="inline-flex items-center gap-2 p-2">
            Download resume
            <span aria-hidden="true" class="material-symbols-outlined"> download </span>
          </a>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-item::after {
  z-index: 0;
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #ec9fd6;
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.nav-item:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
}

.slide-up-leave-to {
  opacity: 0;
}
</style>
