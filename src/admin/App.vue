<template>
<div class="full-wrapper">
  <headline title="Панель управления">
    <avatar />
  </headline>
  <menucontainer></menucontainer>
  <sectioncontent>

  </sectioncontent>
</div>
</template>

<script>
import avatar from './components/avatar/avatar'
import headline from './components/headline/headline'
import menucontainer from './components/menucontainer/menucontainer'
import sectioncontent from './components/sectioncontent/sectioncontent'

export default {
  components: {
    avatar,
    headline,
    menucontainer,
    sectioncontent
  }
}
</script>

<style lang="postcss" scoped src="./mainadmin.pcss"></style>
