<template>
  <div>
    <form @submit.prevent="submitForm">
      <BaseInput type="text" v-model="userName" />
      <BaseInput type="email" v-model="email" />
      <BaseInput type="number" v-model="password" />
      <BaseInput type="number" v-model="repeatPassword" />
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
    formValidator: {
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
  },
  methods: {
    submitForm: async () => {
      alert("success, form submited !!");
    },
  },
};
</script>
