<script setup>
  defineProps({
    product: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="col">
    <div class="card text-center">
      <RouterLink :to="product.url">
        <div class="card-body">
          <img class="img-fluid logo-image" :src="product.logo" alt="" />
          <p class="card-text">{{product.desc}}</p>
          <img class="img-fluid" :src="product.image" alt="" />
        </div>
        <button class="btn card_button">LEARN MORE</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .logo-image {
    padding-bottom: 10px;
    padding-top: 20px;
  }
  .card-body {
    padding-bottom: 0;
  }
  .card {
    overflow: hidden;
  }

  .card {
    border: 3px solid #303644;
    border-radius: 20px;
    box-shadow: -5px 3px #303644;
    background-color: #FFCA91;
    transition: background-color 0.3s ease;
  }

  .card:hover {
    background-color: #ffffff;
  }

  .card-text {
    font-family: "cf_asty_stdlight";
    color: #303644;
    font-weight: 600;
  }
  .card_button {
    background-color: #FFCE3C;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    max-width: 200px;
    border: 3px solid #303644;
    border-bottom: none;
    box-shadow: -4px 2px #303644;
    font-family: "cf_asty_stdbold";
    color: #303644;
  }

  .router-link-active {
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1200px) {
    .card_button {
      transform: translateY(100%);
      transition: 0.2s ease-in-out;
    }

    .card:hover .card_button {
      transform: translateY(-1%);
    }
  }

  @media (max-width: 1199px) {
    .row-cols-5 > .col {
      width: 50%;
      margin-bottom: 30px;
    }
    .card_button {
      max-width: 160px;
    }
  }

@media (max-width: 1199px){
    .card_button {
        max-width: 160px;
    }

    .card_button {
    
        font-size: 14px;
    }
  }
  </style>