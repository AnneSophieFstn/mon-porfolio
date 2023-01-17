<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h5>Site officiel - Croix-Rouge Réunion</h5>
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
                Refonte complète du site internet officiel de la Croix-Rouge
                française de la Réunion.
              </p>
            </div>

            <div class="tech">
              <h3 class="card-header">Technologies utilisées</h3>
              <div class="row">
                <div>
                  <img
                    src="../../assets/logo/wordpress.png"
                    alt="wordpress"
                    width="50"
                  />
                  <span>Wordpress</span>
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
              <ul>
                <li>
                  <a
                    href="https://www.figma.com/file/UGvqIGQBrwZg0ZmoCfmIhm/Pages-Croix-Rouge-Fran%C3%A7aise-R%C3%A9union?node-id=0%3A1&t=48gtIEFpUYAIUiT0-1"
                    >Maquette - Figma</a
                  >
                </li>
                <li>
                  <a href="https://reunion.croix-rouge.fr/"
                    >La Croix-Rouge Française de la Réunion</a
                  >
                </li>
              </ul>

              <div></div>
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
        src: require("../../assets/pages-crf/0001.jpg")
      },
      {
        src: require("../../assets/pages-crf/0002.jpg")
      },
      {
        src: require("../../assets/pages-crf/0003.jpg")
      },
      {
        src: require("../../assets/pages-crf/0004.jpg")
      },
      {
        src: require("../../assets/pages-crf/0005.jpg")
      },
      {
        src: require("../../assets/pages-crf/0006.jpg")
      },
      {
        src: require("../../assets/pages-crf/0007.jpg")
      },
      {
        src: require("../../assets/pages-crf/0008.jpg")
      },
      {
        src: require("../../assets/pages-crf/0009.jpg")
      },
      {
        src: require("../../assets/pages-crf/0010.jpg")
      },
      {
        src: require("../../assets/pages-crf/0011.jpg")
      }
    ]
  })
};
</script>
<style>
.row {
  padding: 10px;
}
.tech div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.tech span {
  padding: 5px;
  font-family: "Montserrat", sans-serif;
}
.colonne {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.demo {
  margin: 5px;
}
.blooock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.block-info {
  display: flex;
  text-align: start;
  margin: 5px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 100;
}
.modal {
  position: relative;
  text-align: center;
  background-color: white;
  width: 900px;
  margin: auto;
  padding: 5px 0;
  border-radius: 20px;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.close-img {
  width: 25px;
}
.check {
  width: 150px;
}
h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}
.btn {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
