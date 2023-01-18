<template>
  <div id="Apropos" class="about">
    <h1>A propos</h1>
    <div class="box">
      <img class="img" src="../assets/me.jpg" alt="annesophie" />
      <div class="contentText">
        <h2>Qui suis-je ?</h2>
        <br />
        <p>
          Bonjour, je suis Anne-Sophie FAUSTINO, jeune développeuse web
          passionnée par les technologies et la création de sites web modernes
          et interactifs.
        </p>
        <p>
          Mon parcours scolaire en informatique m'a donné les compétences
          nécessaires pour développer des applications web efficaces et
          esthétiques.
        </p>
        <p>
          Je suis spécialisée dans les technologies telles que HTML, CSS,
          JavaScript, PHP et les frameworks tels que React et VueJs.
        </p>
        <p>
          J'aime travailler en équipe et je suis toujours à la recherche de
          nouveaux défis pour améliorer mes compétences et mon expérience.
        </p>
        <p>
          Mon portfolio est un aperçu de mes projets passés et présents.
        </p>
        <p>
          N'hésitez pas à me contacter pour discuter de projets futurs ou pour
          toute question supplémentaire.
        </p>

        <div class="btn-center">
          <v-btn color="error" @click="btnCV">
            MON CV
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  methods: {
    btnCV() {
      console.log("MON CV");
    }
  }
};
</script>

<style>
.btn-center {
  justify-content: center;
  align-self: center;
}
h1 {
  font-size: 4rem;
  margin: 3rem;
  text-align: center;
}
.box {
  display: flex;
  justify-content: space-around;
  padding: 0rem 5rem 5rem 5rem;
}

.img {
  position: relative;
  width: 30%;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 50%;
}

.contentText {
  display: flex;
  flex-direction: column;
  margin: 0rem 3rem;
  text-align: justify;
  font-size: 1rem;
  width: 60%;
}
.contentText p {
  text-align: justify;
  font-size: 1rem;
  line-height: 2;
}
.contentText h2 {
  font-size: 2rem;
  text-align: justify;
}
</style>
