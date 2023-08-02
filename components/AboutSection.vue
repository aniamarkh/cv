<template>
  <div class="flex flex-row gap-7 items-center">
    <div class="photo flex-shrink-0 bg-accent w-48 h-48 drop-shadow-xl"></div>
    <div class="flex flex-col gap-2">
      <h1 class="title text-3xl">Hi! I'm Anna</h1>
      <p class="font-bold text-xl">A frontend developer</p>
      <p class="text-justify">
        And I love creating scalable, accessible and charming interfaces that connect the user with
        the product.
      </p>
      <p class="inline-flex gap-1">
        <span class="material-symbols-outlined"> location_on </span
        ><span class="font-bold">Istanbul,</span>Turkey
      </p>
      <ContactsSection />
    </div>
  </div>
</template>

<style scoped>
.photo {
  background-image: url('assets/me.png');
  background-size: 130%;
  background-position: center;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
}

.photo:hover {
  filter: none;
}
</style>
