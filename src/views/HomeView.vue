<template>
  <div class="home">
    <div class="gradient" />
    <video autoplay loop muted plays-inline class="head-item desktop">
      <source src="@/assets/video/background-polo.mp4" type="video/mp4" />
    </video>
    <img class="head-item phone" src="@/assets/img/home.jpg" />
    <div class="text-front">
      <h3>casual style</h3>
    </div>
  </div>
  <div class="content">
    <img id="logo__home" alt="Athletic logo" src="@/assets/img/logo_on_page.svg">
    <h1>THLETIC STORE</h1>
  </div>
  
</template>


<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-position: top;
  position: relative;
}


.head-item {
  position: relative;
  bottom: 0;
  z-index: -5;
  min-width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;
  object-position: top;

}
.text-front {
  display: flex;
  position: absolute;
  text-align: center;
  justify-content: center;
  align-content: center;
  top: 40%;
  left: 30%;
  width: 40%;
  font-size: 3em;
  opacity: 0.5;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.378);
}
.content {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 1.5em;
}
.phone {
  display: none;
}
#logo__home {
  max-width: 300px;
}

@media only screen and (max-width: 900px){
  .desktop {
    display: none;
  }
  .phone {
    display: block;
  }
}
</style>