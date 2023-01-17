<template>
  <div class="background">
    <div class="competences">
      <h1>Compétences</h1>

      <div class="listSkills">
        <div>
          <img src="../assets/logo/html5.png" alt="" width="50px" />
          <span>HTML</span>
        </div>
        <div>
          <img src="../assets/logo/css3.png" alt="" width="50px" />
          <span>CSS</span>
        </div>
        <div>
          <img src="../assets/logo/javascript.png" alt="" width="50px" />
          <span>JAVASCRIPT</span>
        </div>
        <div>
          <img src="../assets/logo/php-logo.png" alt="" width="50px" />
          <span>PHP</span>
        </div>
        <div>
          <img src="../assets/logo/bootstrap.png" alt="" width="50px" />
          <span>BOOTSTRAP</span>
        </div>

        <div>
          <img src="../assets/logo/laravel.png" alt="" width="50px" />
          <span>LARAVEL</span>
        </div>
        <div>
          <img src="../assets/logo/symfony.png" alt="" width="50px" />
          <span>SYMFONY</span>
        </div>
        <!-- <div>
          <img src="../assets/logo/node-js.png" alt="" width="50px" />
          <span>NODEJS</span>
        </div> -->
        <div>
          <img src="../assets/logo/mysql.png" alt="" width="50px" />
          <span>MYSQL</span>
        </div>

        <div>
          <img src="../assets/logo/vuejs.png" alt="" width="50px" />
          <span>VUEJS</span>
        </div>
        <div>
          <img src="../assets/logo/react.png" alt="" width="50px" />
          <span>REACT</span>
        </div>
        <div>
          <img src="../assets/logo/GITHUB.png" alt="" width="50px" />
          <span>GITHUB</span>
        </div>
        <div>
          <img src="../assets/logo/npm.png" alt="" width="50px" />
          <span>NPM</span>
        </div>

        <div>
          <img src="../assets/logo/photoshop.png" alt="" width="50px" />
          <span>PHOTOSHOP</span>
        </div>
        <div>
          <img src="../assets/logo/illustrator.png" alt="" width="50px" />
          <span>ILLUSTRATOR</span>
        </div>
        <div>
          <img src="../assets/logo/indesign.png" alt="" width="50px" />
          <span>INDESIGN</span>
        </div>
        <div>
          <img src="../assets/logo/figma.png" alt="" width="50px" />
          <span>FIGMA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Competences"
};
</script>

<style>
.background {
  background-color: #906387;
}
.competences {
  margin: 2rem 5rem 5rem 5rem;
}
.competences h1 {
  color: white;
  margin-bottom: 1.5rem;
}
.competences h2 {
  color: white;
}
.competences h3 {
  color: white;
}
.competences p {
  color: white;
}
.competences div {
  padding: 1rem;
}
.listSkills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}
.listSkills div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.listSkills span {
  color: white;
  padding: 5px;
  font-family: "Montserrat", sans-serif;
}
</style>
