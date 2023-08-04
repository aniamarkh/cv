<template>
  <header class="sticky top-0 z-20 px-5 py-2 bg-white dark:bg-darkgrey">
    <nav>
      <ul class="flex flex-row items-center gap-3 [&>*]:relative [&>*]:overflow-hidden">
        <li class="nav-item">
          <a class="relative z-20 font-bold" href="#about">About me</a>
        </li>

        <li class="nav-item">
          <a class="relative z-20" href="#portfolio">Portfolio</a>
        </li>
        <li
          class="cursor-pointer ml-auto border-solid border border-black hover:bg-accent hover:text-white hover:border-accent transition-all dark:border-grey dark:hover:border-accent dark:hover:text-black"
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
