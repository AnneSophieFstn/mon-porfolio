<template>
  <div class="formContact">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        background-color="white"
        v-model="name"
        :rules="nameRules"
        label="Nom Prénom"
        outlined
        required
      ></v-text-field>

      <v-text-field
        background-color="white"
        v-model="email"
        :rules="emailRules"
        label="Email"
        outlined
        required
      ></v-text-field>

      <v-text-field
        background-color="white"
        v-model="objet"
        :rules="objetRules"
        label="Objet"
        outlined
        required
      ></v-text-field>

      <v-text-field
        background-color="white"
        height="200"
        v-model="message"
        :rules="messageRules"
        label="Votre message..."
        outlined
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="normal" class="mr-4" @click="validate">
        Envoyer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Nom et Prénom requis"],
    objet: "",
    objetRules: [(v) => !!v || "Objet requis"],
    email: "",
    emailRules: [
      (v) => !!v || "Email est requis",
      (v) => /.+@.+\..+/.test(v) || "E-mail doit être valide",
    ],
    message: "",
    messageRules: [(v) => !!v || "Message requis"],
  }),
};
</script>

<style>
.formContact {
  width: 50vh;
}
.v-text-field {
  color: #fff;
  
}
</style>