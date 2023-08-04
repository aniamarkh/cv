<template>
  <div class="flex flex-row sm:flex-col gap-10 items-center py-4 md:py-0">
    <img
      src="assets/me.png"
      alt="My photo"
      class="shadow-md grayscale transition-all hover:grayscale-0 flex-shrink-0 w-48 h-48"
    />
    <div class="flex flex-col gap-2">
      <h1 class="font-bold w-fit p-2 text-3xl bg-accent dark:text-black">Hi! I'm Anna</h1>
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
