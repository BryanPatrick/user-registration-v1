<template>
  <div>
    <div>
      <BaseInput
        type="text"
        placeholder="User name"
        :data="get_userInfo.name"
        :class="{ error: $v.userName.$error }"
        v-model="formData.userName"
        @input="$v.userName.$touch()"
      />
      <BaseInput
        type="text"
        placeholder="Email"
        :data="get_userInfo.email"
        :class="{ error: $v.userEmail.$error }"
        v-model="formData.userEmail"
        @input="$v.userEmail.$touch()"
      />
      <BaseInput
        type="text"
        placeholder="Password"
        :data="get_userInfo.password"
        :class="{ error: $v.userPassword.$error }"
        v-model="formData.userPassword"
        @input="$v.userPassword.$touch()"
      />
      <BaseInput
        type="text"
        placeholder="Repeat password"
        :data="get_userInfo.repeatPassword"
        :class="{ error: $v.userRepeatPassword.$error }"
        v-model="formData.userRepeatPassword"
        @input="$v.userRepeatPassword.$touch()"
      />
      <button type="button" @click="set_userName(formData)">Submit</button>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "HomeView",
  components: {
    BaseInput,
  },
  data: () => ({
    formData: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userRepeatPassword: "",
    },
  }),
  validations: {
    userName: { required, minLength: minLength(5) },
    userEmail: { required, email },
    userPassword: { required, minLength: minLength(5) },
    userRepeatPassword: { required, sameAs: sameAs("userPassword") },
  },
  computed: {
    ...mapGetters({
      get_userInfo: "get_userInfo",
    }),
  },
  methods: {
    ...mapActions({ set_userName: "set_userInfo" }),

    teste: () => {
      alert("success, form submited !!");
    },
  },
};
</script>

<style scoped>
.error {
  border: 3px solid red;
}
.error-color {
  color: red;
}
</style>
