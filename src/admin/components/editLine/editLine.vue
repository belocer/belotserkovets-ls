<template>
    <div class="edit-line-component" :class="{'blocked' : blocked}">
        <div class="title" v-if="editmode === false">
            <div class="text">{{value}}</div>
            <div class="icon">
                <icon symbol="pencil" grayscale @click="editmode = true"></icon>
            </div>
        </div>
        <div v-else class="title">
            <div class="input">

                <app-input
                        slot="title"
                        placeholder="Название новой группы"
                        :value="value"
                        @input="$emit('input', $event)"
                        @keydown.native.enter="onApprove"
                        autofocus="autofocus"
                        no-side-paddings="no-side-paddings"
                        required
                ></app-input>
                <tooltip
                        v-if="errorMessage.length > 0"
                        :errorText="errorText"
                        :text="errorMessage"
                        slot="tooltip"
                        v-model="errorMessage"
                ></tooltip>
            </div>
            <div class="buttons">
                <div class="button-icon">
                    <icon symbol="tick" @click="onApprove"></icon>
                </div>
                <div class="button-icon">
                    <icon symbol="cross" @click="$emit('remove')"></icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: "",
      },
      errorText: {
        type: String,
        default: "",
      },
      editModeByDefault: Boolean,
      blocked: Boolean,
    },
    data() {
      return {
        editmode: this.editModeByDefault,
        title: this.value,
        errorMessage: this.errorText
      };
    },
    methods: {
      onApprove() {
        if (this.value.trim() === "") return false;
        if (this.title.trim() === this.value.trim()) {
          this.editmode = false;
        } else {
          this.$emit("approve", this.value);
        }

        /*console.log(this.title);
        
        if (this.title.trim().length > 0) {
          this.errorMessage = 'Заполните поле';
          return false
        } else {
          this.errorMessage = ''
        }

        if (this.title.trim() === this.value.trim()) {
          this.editmode = false;
        } else {
          this.$emit('approve', this.value);
        }*/
      },

    },
    components: {
      icon: () => import("components/icon"),
      appInput: () => import("components/input"),
      tooltip: () => import("components/tooltip"),
    },
  };
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>
