<template>
<div class="username-component">
  <avatar></avatar>
  <span class="user-name">Денис Белоцерковецц</span>
  <span class="header">Панель администрирования</span>
</div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "user name"
    }
  },
  computed: {},
  components: {
    avatar: () => import("components/avatar")
  }
}
</script>

<style lang="postcss" scoped src="./username.pcss"></style>
