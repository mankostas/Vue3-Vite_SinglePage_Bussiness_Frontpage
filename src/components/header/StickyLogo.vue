<script setup>

</script>

<template>
      <div class="wrapper">
        <nav class="nopadding">
            <div class="row container">
                <div class="col-xl-12">
                    <div class="logo_cont">
                    <img src="@/assets/icons/logo.svg" alt="">
                    </div>
                </div>
            </div>
        </nav>
      </div>
</template>

<style scoped>
nav.nopadding > .row {
  margin: 0 auto;
}


.logo_cont > img {
  padding: 10px 0;
}

.logo_cont {
    background-color: #FF931F;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
