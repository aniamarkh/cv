<script setup lang="ts">
const props = defineProps<{ content: string }>();
const isCopied = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.content).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  });
};
</script>
<template>
  <div class="min-w-[280px] inline-flex gap-2 h-3 items-center" @click="copyToClipboard">
    <p class="cursor-pointer text-lg font-bold hover:text-accent transition-all duration-300">
      {{ content }}
    </p>
    <Transition>
      <p v-if="isCopied" class="text-sm text-accent transition-all duration-100">copied!</p>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>