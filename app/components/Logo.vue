<script setup lang="ts">
import LogoSvg from '~/assets/icons/logo.svg'
import LogoBluePng from '~/assets/images/Logo-Blue.png'

const { appName } = useAppConfig()
const props = defineProps<{
  class?: string
  isWhite?: boolean
  isShowText?: boolean
}>()
const logo = computed(() => props.isWhite ? LogoSvg : LogoBluePng)
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center text-[var(--font-primary)]"
    aria-label="Go back to home page"
  >
    <img
      :src="logo"
      alt=""
      srcset=""
      class="w-7.5"
      :class="[props.class]"
    >
    <span
      v-if="props.isShowText"
      class="ml-2 text-xl font-black"
      :class="[!props.isWhite && 'text-black']"
    >
      <span :class="[!props.isWhite && 'text-[var(--bg-secondary)]']">
        {{ appName.substring(0, 5) }}
      </span>
      <span>
        {{ appName.substring(5, 8) }}
      </span>
    </span>
  </NuxtLinkLocale>
</template>
