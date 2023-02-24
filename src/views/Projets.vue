<template>
  <div class="projets">
    <h1>Projets</h1>

    <div class="listCards">
      <!-- FIRST -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/simplon.png`)"
            height="250px"
          ></v-img>

          <v-card-title> Gestion d'attribution d'ordinateurs </v-card-title>

          <v-card-subtitle>
            Une application sécurisée qui permet de gérer l'attribution des
            postes informatiques aux visiteurs d'un centre sur les horaires
            d'ouverture.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red lighten-2" text @click="showModalGao = true">
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END FIRST -->
      <!-- BISBIS -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/crf.jpg`)"
            height="250px"
          ></v-img>

          <v-card-title> Gestion de parc automobile </v-card-title>

          <v-card-subtitle>
            Une application web sécurisée qui permet de faire la gestion ainsi
            que de gérer l'attribution des voitures en fonction des
            etablissements et sur les horaires de travail.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red lighten-2" text @click="showModalGpa = true">
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END BISBIS -->
      <!-- BISBIS -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/crf.jpg`)"
            height="250px"
          ></v-img>

          <v-card-title> Site Croix-Rouge Réunion </v-card-title>

          <v-card-subtitle>
            Refonte complète du site internet de la Croix-Rouge Française à la
            Réunion.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="red lighten-2"
              text
              @click="showModalCrfWordpress = true"
            >
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END BISBIS -->
      <!-- SECOND -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/miel.png`)"
            height="250px"
          ></v-img>

          <v-card-title>Miél Péi</v-card-title>

          <v-card-subtitle>
            Un site e-commerce qui regroupe l'ensemble des apiculteurs de l'ile
            et leur produits.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red lighten-2" text @click="showModalMielPei = true">
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END SECOND -->
      <!-- THIRD -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/portfolio.jpg`)"
            height="250px"
          ></v-img>

          <v-card-title> Mon Portfolio </v-card-title>

          <v-card-subtitle>
            Un site de portfolio qui permet de mettre en valeur mon travail et
            ainsi le faire connaître aux autres.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="red lighten-2"
              text
              @click="showModalMonPortfolio = true"
            >
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END THIRD -->
      <!-- FOUR -->
      <div class="card">
        <v-card class="mx-auto" max-width="345">
          <v-img
            :src="require(`../assets/projets/ballnco.png`)"
            height="250px"
          ></v-img>

          <v-card-title> Ball'n Co </v-card-title>

          <v-card-subtitle>
            Une application WEB | MOBILE | DESKTOP qui permet de réunir les fans
            du basket.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="red lighten-2" text @click="showModalBallNCo = true">
              EN SAVOIR +
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <!-- END FOUR -->
      <Gpa v-show="showModalGpa" @close-modal="showModalGpa = false" />
      <Gao v-show="showModalGao" @close-modal="showModalGao = false" />
      <CrfWordpress
        v-show="showModalCrfWordpress"
        @close-modal="showModalCrfWordpress = false"
      />
      <MielPei
        v-show="showModalMielPei"
        @close-modal="showModalMielPei = false"
      />
      <MonPortfolio
        v-show="showModalMonPortfolio"
        @close-modal="showModalMonPortfolio = false"
      />
      <BallNCo
        v-show="showModalBallNCo"
        @close-modal="showModalBallNCo = false"
      />
    </div>
  </div>
</template>

<script>
import Gpa from "../views/projets/Gpa.vue";
import Gao from "../views/projets/Gao.vue";
import CrfWordpress from "../views/projets/CrfWordpress.vue";
import MielPei from "../views/projets/MielPei.vue";
import MonPortfolio from "../views/projets/MonPortfolio.vue";
import BallNCo from "../views/projets/BallNCo.vue";
export default {
  name: "Projets",
  components: { Gpa, Gao, CrfWordpress, MielPei, MonPortfolio, BallNCo },
  data() {
    return {
      showModalGpa: false,
      showModalGao: false,
      showModalCrfWordpress: false,
      showModalMielPei: false,
      showModalMonPortfolio: false,
      showModalBallNCo: false
    };
  }
};
</script>

<style>
.projets {
  margin: 0rem 0rem 2rem 0rem;
}
.projets h1 {
  margin: 2rem;
}

.listCards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
}
</style>
