<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StickyLogo from './components/header/StickyLogo.vue'

</script>

<template>
 <div id="layout">
  <header>
    <StickyLogo></StickyLogo>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/">About</RouterLink> 
    </nav>
    <!-- <RouterView /> -->
  </header>
  <RouterView />
  </div>
</template>

<style>
nav  a:hover {
color: #303644 !important;
}
.my-vue-number-input {
    border-radius: 20px !important;
    box-shadow: -5px 3px #262626 !important;
    border: 3px solid #262626 !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-family: "cf_asty_stdbold" !important;
  }
  .vue-number-input {
    overflow: visible !important;
  }
body {
  background-color: #00C8FF;
}
#layout {
  font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #ff931f;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
}

header {
  margin: 0 auto;
  max-width: 1700px;

}

header > nav,
header > nav > a {
  text-decoration: none;
    color: #fff;
    font-size: 18px;
}

header > nav {
  border-bottom: 3px solid #dddddd8c;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

@media (min-width:992px) {


}
@media (max-width:1199px) {
  .section {
    padding-left: 10px !important;
    padding-right: 10px !important;
}
}

</style>
