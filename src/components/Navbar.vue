<template>
  <v-app>
    <div class="header">
      <v-toolbar>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menuItems" :key="item.title">
            <v-icon left color="#906387"> {{ item.icon }} </v-icon>
            <a :href="item.idItem" @click.prevent="scrollTo(item.idItem)">
              {{ item.title }}
            </a>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <Accueil id="Accueil" />
    <About id="Apropos" />
    <Competences id="Competences" />
    <Projets id="Projets" />
    <Contact id="Contact" />
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Accueil from "../views/Accueil.vue";
import About from "../views/About.vue";
import Competences from "../views/Competences.vue";
import Projets from "../views/Projets.vue";
import Contact from "../views/Contact.vue";
export default {
  name: "App",

  components: {
    Accueil,
    About,
    Competences,
    Projets,
    Contact
  },

  data() {
    return {
      appTitle: "Portfolio",
      menuItems: [
        {
          idItem: "#Accueil",
          title: "Accueil",
          icon: "mdi-home"
        },
        {
          idItem: "#Apropos",
          title: "A propos",
          icon: "mdi-account"
        },
        {
          idItem: "#Competences",
          title: "Competences",
          icon: "mdi-format-list-text"
        },
        {
          idItem: "#Projets",
          title: "Projets",
          icon: "mdi-file"
        },
        {
          idItem: "#Contact",
          title: "Contact",
          icon: "mdi-card-account-phone"
        }
      ]
    };
  },

  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 0;
}

.header a {
  text-decoration: none;
  color: black;
}
</style>
