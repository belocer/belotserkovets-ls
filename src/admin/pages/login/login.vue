<template>
    <div class="login-page-component">
        <div class="content">
            <form class="form" @submit.prevent="handleSubmit">
                <div class="form-title">Авторизация</div>
                <div class="row">
                    <app-input
                            title="Логин"
                            icon="user"
                            class="login-input"
                            v-model="user.name"
                            name="name"
                            :errorMessage="validation.firstError('user.name')"
                    />
                </div>
                <div class="row">
                    <app-input
                            title="Пароль"
                            icon="key"
                            type="password"
                            class="login-input"
                            name="password"
                            v-model="user.password"
                            :errorMessage="validation.firstError('user.password')"
                    />
                </div>
                <div class="btn">
                    <app-button :disabled="isSubmitDisabled" title="Отправить"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
  import appInput from "../../components/input";
  import appButton from "../../components/button";
  import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
  import $axios from "../../requests";

  export default {
    mixins: [ValidatorMixin],
    validators: {
      "user.name": value => {
        return Validator.value(value).required("Ввeдите имя пользователя")
      },
      "user.password": value => {
        return Validator.value(value).required("Ввeдите пароль")
      },
    },
    data: () => ({
      user: {
        name: "",
        password: "",
      },
      isSubmitDisabled: false,
    }),
    components: {appButton, appInput},
    methods: {
      async handleSubmit() {
        if ((await this.$validate()) === false) return;
        this.isSubmitDisabled = true;

        this.$validate().then(async (isValid) => {
          if (isValid === false) return;
          try {
            const response = await $axios.post("/login", this.user);
            console.log(this.user);
            // belocerkovec
            // 220807
            const token = response.data.token
            localStorage.setItem("token", token);
            $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
            this.$router.replace('/');
          } catch (error) {
            console.log(error.response.data.error);
          } finally {
            this.isSubmitDisabled = false;
          }
        });
      }
    },
  };
</script>

<style lang="postcss" scoped src="./login.pcss"></style>