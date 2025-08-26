<script setup lang="ts">
import bgBorderPng from '~/assets/images/footer-bg-border.png'
import ChargePng from '~/assets/images/charge.png'
</script>

<template>
  <footer>
    <div class="w-full relative h-87 bg-[var(--bg-secondary)] text-[var(--font-primary)] text-center">
      <div class="absolute z-2 top-0 items-center left-0 w-full h-full gap-4 flex flex-col justify-center py-15 px-7.5">
        <div class="font-semibold text-3xl">
          准备好了开始了？联系我们或创建账户
        </div>
        <div class="text-sm font-normal">
          采用简单、按量付费的标准计费方案，就能使用功能完整的支付平台。无设置费，无月费，也无隐藏费用。
        </div>
        <UButton class="w-3xs">
          <div class="w-full text-lg">
            立即接入
          </div>
        </UButton>
      </div>
      <img
        :src="bgBorderPng"
        alt=""
        srcset=""
        class="absolute object-cover left-0 top-0 h-80 w-8xl z-1"
      >
    </div>
    <div class="w-full bg-[var(--ui-bg)] sm:w-[90%] mx-auto h-13.5 flex justify-between px-4 py-2.5 items-center">
      <Logo is-show-text />
      <div class="flex text-xs flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-2">
        <div class="text-right text-[var(--bg-secondary)] flex items-center gap-1">
          <img
            :src="ChargePng"
            alt=""
            srcset=""
            class="w-5.5"
          >
          <span>API文档</span>
        </div>
        <span class="text-[var(--text-secondary)]">
          © {{ new Date().getFullYear() }} Turbo Token Pay, 版权所有
        </span>
      </div>
    </div>
  </footer>
</template>
