<script setup lang="ts">
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="mt-4 flex justify-center">
      <button
        class="btn-primary"
        @click="useRouter().push('/works')"
      >
        {{ $t("global.see_more") }}
      </button>
    </div>
  </div>
</template>
