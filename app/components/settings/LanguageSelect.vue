<script setup lang="ts">
const { locale: current, locales, setLocale } = useI18n()

const localesItme = computed(() => {
  return locales.value.map((l) => {
    return {
      label: l.name,
      value: l.code,
    }
  })
})
const value = ref(current.value || 'en')

watch(value, (newLocale) => {
  setLocale(newLocale)
})
onMounted(() => {
  const lang = useCookie('i18n_redirected')
  if (lang.value) {
    setLocale(lang.value as 'en' | 'fr')
  }
})
</script>

<template>
  <USelect
    v-model="value"
    :items="localesItme"
    class="w-full text-black"
  />
</template>
