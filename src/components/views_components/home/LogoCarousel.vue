<script setup>
  import {ref} from 'vue'
  import Logo_1 from '@/assets/icons/logo-1.svg'
  import Logo_2 from '@/assets/icons/logo-2.svg'
  import Logo_3 from '@/assets/icons/logo-3.svg'
  import Logo_4 from '@/assets/icons/logo-4.svg'
  import Logo_5 from '@/assets/icons/logo-5.svg'
  import Logo_6 from '@/assets/icons/logo-6.svg'
  import Logo_7 from '@/assets/icons/logo-7.svg'
  import Logo_8 from '@/assets/icons/logo-8.svg'

    const clientLogos = ref([
      {
          img: Logo_1,
      },
      {
          img: Logo_2,
      },
      {
          img: Logo_3,
      },
      {
          img: Logo_4,
      },
      {
          img: Logo_5,
      },
      {
          img: Logo_6,
      },
      {
          img: Logo_7,
      },
      {
          img: Logo_8,
      }
      ])
</script>

<template>
  <div id="logo-carousel" class="section container-fluid">
    <div class="row">
      <div
        class="col"
        v-if="clientLogos"
        v-for="logo in clientLogos"
        :key="logo.id"
      >
        <div class="img-container text-center">
          <img class="img-fluid" :src="logo.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


  .section {
    padding-bottom: 0;
  }
  #logo-carousel {
    background-color: #FFD069;
    padding-bottom: 100px;
  }

  .img-container{
    filter: grayscale(1);
    opacity: 0.8;
  }



  @media (max-width:1199px) {
    #logo-carousel > .row{
      display: flex;
      flex-direction: column;
  }
  }
</style>
