<script setup lang="ts">
const { locale } = useI18n()
const { domain } = useAppConfig()
const topNavgationArray = [
  {
    name: '支付介绍',
    to: '',
  },
  {
    name: '常见问题',
    to: `/${locale.value}`,
  },
  {
    name: '定价',
    to: `${domain}/${locale.value}/price`,
  },
]
</script>

<template>
  <div
    class="px-4 py-2.5 fixed top-0 z-50 w-full h-12.5 border-b border-solid border-gray/20 bg-[var(--bg-secondary)]"
  >
    <div class="flex justify-between items-center h-full lg:w-[95%] lg:mx-auto">
      <div class="flex items-center gap-7">
        <Logo
          is-show-text
          is-white
        />
        <NuxtLink
          v-for="item in topNavgationArray"
          :key="item.name"
          class="hidden lg:flex items-center text-[var(--ui-text-inverted)] text-lg mr-7"
          :to="item.to"
        >
          <span>
            {{ item.name }}
          </span>
          <UIcon
            name="mingcute:right-fill"
            class="size-4.5 ml-2"
          />
        </NuxtLink>
      </div>
      <!-- 手机端 -->
      <div class="flex justify-end gap-3 items-center md:hidden">
        <UIcon
          name="cib:telegram-plane"
          class="cursor-pointer size-4.5 text-[var(--ui-bg)]"
        />
        <UIcon
          name="geo:ui-earth-east"
          class="cursor-pointer size-4.5 bg-[var(--ui-bg)]"
        />
        <UIcon
          name="material-symbols:menu-rounded"
          class="lg:hidden inline-block size-4.5 bg-[var(--ui-bg)]"
        />
      </div>
      <!-- PC端 -->
      <div class="flex justify-end gap-3 items-center">
        <SettingsLanguageSelect />
      </div>
    </div>
  </div>
</template>
