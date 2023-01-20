<template>
  <div>
    <form @submit.prevent="submitForm">
      <BaseInput
        type="text"
        placeholder="User name"
        v-model="userName"
        :class="{ error: $v.userName.$error }"
      />
      <BaseInput
        type="email"
        v-model="email"
        placeholder="email@email.com"
        :class="{ error: $v.email.$error }"
      />
      <BaseInput
        type="number"
        v-model="password"
        placeholder="******"
        :class="{ error: $v.password.$error }"
      />
      <BaseInput
        type="number"
        v-model="repeatPassword"
        placeholder="******"
        :class="{ error: $v.repeatPassword.$error }"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "HomeView",
  components: {
    BaseInput,
  },
  data: () => ({
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
  }),
  validations: {
    userName: {
      required,
      minLength: minLength(5),
    },
    email: { required, email },
    password: { required, minLength },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    submitForm: async () => {
      alert("success, form submited !!");
    },
  },
};
</script>

<style scoped>
.error {
  border: solid 1px red;
}
</style>
