<template>
<div class="full-wrapper">
  <headline title="Панель управления">
    <avatar />
  </headline>
  <menucontainer></menucontainer>
  <sectioncontent>
    <mainheader></mainheader>
  </sectioncontent>
</div>
</template>

<script>
import avatar from './components/avatar/avatar'
import headline from './components/headline/headline'
import menucontainer from './components/menucontainer/menucontainer'
import sectioncontent from './components/sectioncontent/sectioncontent'
import mainheader from './components/mainheader/mainheader'
export default {
  components: {
    avatar,
    headline,
    menucontainer,
    sectioncontent,
    mainheader,
  }
}
</script>

<style lang="postcss" scoped src="./mainadmin.pcss"></style>
