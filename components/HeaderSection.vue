<template>
  <header>
    <nav>
      <ul class="flex flex-row gap-5 [&>*]:relative [&>*]:overflow-hidden">
        <li>
          <a class="relative z-10" href="#me">About</a>
        </li>
        <li>
          <a class="relative z-10" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a class="relative z-10" href="#resume">Printable resume</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
li::after {
  z-index: 0;
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 25px;
  bottom: 0;
  left: 0;
  background-color: #ec9fd6;
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
