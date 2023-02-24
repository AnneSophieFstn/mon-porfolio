<template>
  <div class="background">
    <div class="contact">
      <h1>Contact</h1>

      <div class="textIntro">
        <p>Mon profil vous intéresse ?</p>
        <p>
          Voici mes coordonnées, n'hésitez pas à m'appeler ou à m'écrire, je
          vous répondrai dans les plus brefs délais...
        </p>
      </div>

      <div class="contactBox">
        <div>
          <div class="boxIconText">
            <div class="iconContact">
              <v-icon color="white">
                mdi-home-map-marker
              </v-icon>
            </div>
            <div>
              <h3>Adresse</h3>
              <p>97470 - Saint-Benoit</p>
              <p>La Réunion</p>
            </div>
          </div>
          <div class="boxIconText">
            <div class="iconContact">
              <v-icon color="white">
                mdi-phone
              </v-icon>
            </div>
            <div>
              <h3>Téléphone</h3>
              <p>+262 6 92 17 73 36</p>
            </div>
          </div>
          <div class="boxIconText">
            <div class="iconContact">
              <v-icon color="white">
                mdi-email
              </v-icon>
            </div>
            <div>
              <h3>Mail</h3>
              <p>annesophie.faustino@gmail.com</p>
            </div>
          </div>
        </div>
        <FormContact />
      </div>
    </div>
    <h5 class="textIntro">
      Copyright All Right Reserved 2023 Anne-Sophie Faustino
    </h5>
  </div>
</template>

<script>
import FormContact from "@/components/FormContact";
export default {
  name: "Contact",
  components: {
    FormContact
  }
};
</script>

<style>
.contact {
  margin: 2rem 5rem 5rem 5rem;
}
.contact h1 {
  color: white;
}
.contact h3 {
  font-size: 20px;
  color: white;
}
.contact p {
  font-size: 18px;
  color: white;
}
.contactBox {
  display: flex;
  justify-content: space-evenly;
}
.textIntro {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}
.boxIconText {
  display: flex;
  margin-bottom: 3rem;
}

.iconContact {
  margin-right: 1rem;
}
</style>
