<template>
  <div class="grid grid-cols-3 md:grid-cols-1 gap-4 items-center sm:items-start">
    <img
      src="assets/me.png"
      alt="My photo"
      class="col-span-1 shadow-md grayscale transition-all hover:grayscale-0 flex-shrink-0 w-60 h-60"
    />
    <div class="col-span-2 flex flex-col gap-2 md:max-w-xl">
      <h1 class="font-bold w-fit p-2 text-3xl bg-accent dark:text-black">Hi! I'm Anna</h1>
      <p class="font-bold text-xl">A frontend developer</p>
      <p>
        I love creating scalable, accessible and charming interfaces that connect the user with the
        product.
      </p>
      <ContactsSection />
      <p class="inline-flex gap-1 -mx-1">
        <span class="material-symbols-outlined"> location_on </span
        ><span class="font-bold">Istanbul,</span>Turkey
      </p>
    </div>
  </div>
</template>
