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

      <v-textarea
        background-color="white"
        height="200"
        v-model="message"
        :rules="messageRules"
        label="Votre message..."
        outlined
        required
      ></v-textarea>

      <v-btn
        :disabled="!valid"
        color="normal"
        class="mr-4"
        @click="sendEmail()"
      >
        Envoyer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import Email from "../../smtp/smtp.js";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Nom et Prénom requis"],
    objet: "",
    objetRules: [v => !!v || "Objet requis"],
    email: "",
    emailRules: [
      v => !!v || "Email est requis",
      v => /.+@.+\..+/.test(v) || "E-mail doit être valide"
    ],
    message: "",
    messageRules: [v => !!v || "Message requis"]
  }),

  methods: {
    sendEmail() {
      Email.send({
        //SecureToken: "f27bbe98-e71e-4eda-8ca7-bd8ea7db5cd3",
        Host: "smtp.elasticemail.com",
        Username: "annesophie.faustino@gmail.com",
        Password: "B0ACB866700E10AC9BC9275C32426590EBBF",
        From: "admin.support@app-ballnco.fr",
        To: "annesophie.faustino@gmail.com",
        Subject: this.objet,
        Body: [this.email, this.message]
      }).then(() => alert("Message bien envoyé"));
    }
  }
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
