<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  built: string;
  repo: string;
  deploy: string;
  screenshot: string;
}>();

const openInNewTab = () => {
  window.open(props.deploy, '_blank');
};
</script>

<template>
  <div
    class="cursor-pointer group justify-self items-center flex flex-row sm:flex-col gap-4 w-full p-5 border-solid border border-black hover:scale-105 hover:bg-accent hover:border-accent dark:border-lightgrey dark:hover:text-black dark:hover:border-accent transition-all duration-300"
    @click="openInNewTab"
  >
    <img class="screenshot" :src="screenshot" :alt="`${title} screenshot`" />
    <div class="flex flex-col h-full justify-between">
      <h2 class="mt-2 text-lg font-bold">{{ title }}</h2>
      <div class="flex flex-col gap-2">
        <p>{{ desc }}</p>
        <p>{{ 'Built with ' + built }}</p>
      </div>
      <div class="flex flex-row gap-5 mt-3">
        <a :href="repo" target="_blank" class="text-link whitespace-nowrap" @click.stop>
          <svg class="contacts-icon" viewBox="0 0 100 100" aria-hidden="true">
            <path
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            />
          </svg>
          View Source
        </a>
        <a :href="deploy" target="_blank" class="text-link whitespace-nowrap" @click.stop>
          <span class="material-symbols-outlined"> play_arrow </span>
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>
