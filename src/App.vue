<template>
    <navbar></navbar>
    <router-view/>
    <footbar></footbar>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footbar from '@/components/Footbar.vue';

export default {
    components: {
        Navbar,
        Footbar,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.gradient {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
}

video {
  object-fit: cover;
}
img {
  object-fit: cover;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
.opacity {
  opacity: 0.8;
}

textarea:focus,
input:focus {
  outline: none;
}
button:focus {
  outline: 0;
}
button {
  cursor: pointer;
}
img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

</style>
