<script lang="ts" setup>
const { locale } = useI18n()
const route = useRoute()

const { data: section } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation(`content_${locale.value}`)
})

const navigationTree = computed(() => getNavigation(route.path, section.value))
</script>

<template>
  <UNavigationMenu
    :items="navigationTree"
    color="primary"
    orientation="vertical"
    arrow
    :ui="{
      childList: 'border-none',
    }"
  />
</template>
