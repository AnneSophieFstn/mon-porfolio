<template>
  <v-app id="Accueil">
    <div class="banner">
      <section class="textBx">
        <h1>
          Bonjour, Je suis<br />
          <span>Anne-Sophie Faustino</span>
        </h1>
        <h2>Développeuse Web</h2>
      </section>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Accueil"
};
</script>

<style>
.banner {
  position: relative;
  background: url(https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  /* left:0;
    right:0;
    top:0;
    bottom:0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7.5rem 2.5rem 5rem;
}

.banner h1 {
  font-size: 3rem;
  color: #fff;
  font-weight: 600;
  line-height: 5rem;
}

.banner h1 span {
  font-size: 5rem;
  font-weight: 600;
}

.banner h2 {
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
}

article {
  display: block;
}

.textBx {
  margin-top: 20vh;
}
</style>
