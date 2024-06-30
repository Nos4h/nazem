<!-- src/components/LanguageSwitcher.vue -->
<template>
  <div class="language-switcher">
    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('ar')">العربية</button>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style>
.language-switcher {
  margin: 10px;
}
.language-switcher button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
