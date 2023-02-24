<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h5>Miel Péi</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close-modal')"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="block-info">
          <div class="demo">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                contain
                width="500"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div class="blooock">
            <div class="intro">
              <h3 class="card-header">À propos de ce projet</h3>
              <p class="info-text">
                Projet réaliser en formation, cette application est un site
                e-commerce qui regroupe l'ensemble des apiculteurs de l'ile et
                leurs produits.
              </p>
            </div>

            <div class="tech">
              <h3 class="card-header">Technologies utilisées</h3>
              <div class="row">
                <div>
                  <img
                    src="../../assets/logo/laravel.png"
                    alt="laravel"
                    width="50"
                  />
                  <span>Laravel</span>
                </div>
                <div>
                  <img
                    src="../../assets/logo/vuejs.png"
                    alt="vuejs"
                    width="50"
                  />
                  <span>VueJs</span>
                </div>
                <div>
                  <img
                    src="../../assets/logo/figma.png"
                    alt="figma"
                    width="50"
                  />
                  <span>Figma</span>
                </div>
              </div>
            </div>
            <div class="site">
              <h3 class="card-header">Site</h3>
              <a href="https://github.com/AnneSophieFstn/cda-ecommerce.git">
                Projet github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="$emit('close-modal')"></div>
    </div>
  </transition>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    items: [
      {
        src: require("../../assets/pages-mielpei/accueil.png")
      },
      {
        src: require("../../assets/pages-mielpei/fiche-miel.png")
      },
      {
        src: require("../../assets/pages-mielpei/panier.png")
      }
    ]
  })
};
</script>
<style></style>
