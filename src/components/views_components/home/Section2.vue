<script setup>
  import ProductCard from '../../section_components/home/ProductCard.vue';
  import GoForEatSVG from '@/assets/icons/go-for-eat.svg'
  import Card_1 from '@/assets/images/1.png'
  import UpGiftSVG from '@/assets/icons/up-gift.svg'
  import Card_2 from '@/assets/images/2.png'
  import UpCheque from '@/assets/icons/up-cheque.svg'
  import Card_3 from '@/assets/images/3.png'
  import UpHolidays from '@/assets/icons/up-holidays.svg'
  import Card_4 from '@/assets/images/4.png'
  import UpFit from '@/assets/icons/up-fit.svg'
  import Card_5 from '@/assets/images/5.png'


    const products = [
      {
        id: 1,
        desc:'The unrivalled meal card solution',
        url: '/',
        logo: GoForEatSVG,
        image: Card_1
      },
      {
        id: 2,
        desc:'The perfect gift',
        url: '/',
        logo: UpGiftSVG,
        image: Card_2
      },
      {
        id: 3,
        desc:'Where it all started; our meal vouchers',
        url: '/',
        logo: UpCheque,
        image: Card_3
      },
      {
        id: 4,
        desc:'The card that takes you places',
        url: '/',
        logo: UpHolidays,
        image: Card_4
      },
      {
        id: 5,
        desc:'The multi-gym membership',
        url: '/',
        logo: UpFit,
        image: Card_5
      }
      ]
</script>

<template>
  <div id="happy-and-healthy" class="section container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="heading-container text-center">
          <div class="intro-heading text-center">
            <h1>Happy & Healthy employees work better <span>❤</span></h1>
          </div>
          <div class="second-heading text-center">
            <h4>
              We are Up. We design and deliver digital-first employee benefits
              that transform the workplace exprerience
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row container mx-auto row-cols-5">
      <ProductCard
        v-if="products"
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<style scoped>
  #happy-and-healthy > .row:nth-child(2) {
    max-width: 1700px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .intro-heading {
    font-family: "cf_asty_stdbold";
    color: #fff;
    font-size: 20px !important;
  }

  .intro-heading span {
    color: red;
  }

  .second-heading {
    font-family: "cf_asty_stdlight";
    color: #fff;
    font-size: 20px !important;
    margin-top: 20px;
    margin-bottom: 70px;
  }
  .card-body {
    padding-bottom: 0;
    overflow: hidden;
  }

  .row-cols-5 > .col {
    display: flex;
  }

  @media (min-widt: 1200px) {
    #happy-and-healthy > .row.container {
      margin-bottom: 100px;
    }
  }

  @media (max-width: 1199px) {
    #happy-and-healthy > .row:nth-child(2) {
      padding: 0 !important;
    }
  }
</style>
