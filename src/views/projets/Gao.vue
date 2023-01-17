<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h5>Gestion d'attribution d'ordinateurs</h5>
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
            <img
              src="../../assets/projets/simplon.png"
              alt="ballnco"
              width="500"
            />
          </div>
          <div class="blooock">
            <div class="intro">
              <h3 class="card-header">À propos de ce projet</h3>
              <p class="info-text">
                Projet réaliser en formation, c'est une application sécurisée
                qui permet de gérer l'attribution des postes informatiques aux
                visiteurs d'un centre sur les horaires d'ouverture
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
                    src="../../assets/logo/symfony.png"
                    alt="symfony"
                    width="50"
                  />
                  <span>Symfony</span>
                </div>
                <div>
                  <img
                    src="../../assets/logo/node-js.png"
                    alt="node-js"
                    width="50"
                  />
                  <span>Node</span>
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
                    src="../../assets/logo/react.png"
                    alt="react"
                    width="50"
                  />
                  <span>React</span>
                </div>
              </div>
            </div>
            <div class="site">
              <h3 class="card-header">Site</h3>
              <ul>
                <li><a href="#">Laravel - Vuejs</a></li>
                <li><a href="#">Laravel - React</a></li>
                <li><a href="#">Symfony - Vuejs</a></li>
                <li><a href="#">Symfony - React</a></li>
                <li><a href="#">NodeJs - Vuejs</a></li>
                <li><a href="#">NodeJs - React</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="$emit('close-modal')"></div>
    </div>
  </transition>
</template>
<script>
export default {};
</script>
<style></style>
