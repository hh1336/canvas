<template>
  <div>
    <LayoutHeader />
    <div class="mt-20 flex lg:justify-between justify-center text-black max-w-7xl md:mx-auto">
      <div class="hidden lg:inline-block flex-1 text-center">
        <SettingsLanguageSelect />
        <SettingsNavigationTree />
      </div>
      <div class="h-full">
        <slot />
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
