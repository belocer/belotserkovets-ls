<template>
    <div class="header-component">
        <headline title="Панель управления">
            <avatar></avatar>
        </headline>
        <menucontainer></menucontainer>
    </div>
</template>

<script>
  import avatar from '../avatar/avatar';
  import headline from '../headline/headline';
  import menucontainer from '../menucontainer/menucontainer';

  export default {
    components: {
      avatar,
      headline,
      menucontainer
    }
  }
</script>