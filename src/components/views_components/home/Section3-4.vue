<script setup>
  import ProductCardDetails from '../../section_components/home/ProductCardDetails.vue';
  import GoForEatSVG from '@/assets/icons/go-for-eat.svg'
  import GoForEatPNG from '@/assets/images/goforeat.png'
  import UpGiftSVG from '@/assets/icons/up-gift.svg'
  import UpGiftPNG from '@/assets/images/upgift.png'


    const productDetails = [
      {
        id: 1,
        preCardText: 'THE UNRIVALLED MEAL CARD SOLUTION',
        logo: GoForEatSVG,
        cardImage: '',
        cardType: 'MEAL CARD',
        cardTypeColor: '#FD9E19',
        title: 'Enjoy your meals anywhere you want',
        desc: 'Our prepaid meal card by Mastercard is designed to offer both our corporate customers and users and unmached exprerience that`s simple & fun',
        pricing: 'Tax exemption: 6 euros per day / 1,452 euros per year per employee',
        sideImage: GoForEatPNG,
        benefits: [
          'Order & load cards online in seconds, download invoices & reports in a click',
          'Best in class service: Quantified & qualified with a monthly report',
          'Our cards are accepted everywhere in Greece',
          'User our app for full control & mobile payments'
        ],
        imagePosition: 'row container d-flex align-items-center right',
        blockBgColor: '#F8B92F',
        button_text: 'CONTACT US ',
        button_color: '#FD9E19',
        button_url: '#contact'
      },
      {
        id: 2,
        preCardText: 'THE PERFECT GIFT',
        logo: UpGiftSVG,
        cardImage: '',
        cardType: 'GIFT CARD',
        cardTypeColor: '#EE5A5A',
        title: 'Everything you desire in a single tap',
        desc: 'Our reloadable gift card is the perfect gift to reward, to incentivise, to celebrate!',
        pricing: 'Tax exemption: 300 euros per year per employee',
        sideImage: UpGiftPNG,
        benefits: [
          'Order & load cards online in seconds, download invoices & reports in a click',
          'Buy everything you want - electronics, clothing, cosmetics and so much more',
          'Our app is loaded with crazy-fun features',
        ],
        imagePosition: 'row container d-flex align-items-center left',
        blockBgColor: '#EE5A5A',
        button_text: 'TELL ME MORE',
        button_color: '#EE5A5A',
        button_url: '#contact'
      }
  ]

</script>

<template>
  <div
    v-if="productDetails"
    v-for="productDetail in productDetails"
    :key="productDetail.id"
    :style="'background-color:' + productDetail.blockBgColor"
    class="section container-fluid"
  >
    <div :class="productDetail.imagePosition">
      <div class="col-xl-6">
        <div class="cardDetails-container text-start">
          <div class="intro-heading text-start">
            <h2>{{productDetail.preCardText}}</h2>
          </div>
          <ProductCardDetails
            :productDetail="productDetail"
          ></ProductCardDetails>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="section1_image">
          <img class="img-fluid" :src="productDetail.sideImage" alt="" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.section1_image {
  margin-bottom: 20px;
}
.container-fluid > .container {
  margin: 0 auto;
}
  .section {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .intro-heading {
    font-family: "FreeScript-Bold";
    color: #00C8FF;
    text-shadow: -4px 2px #545454;
    font-size: 16px !important;
    transform: rotate(-4deg);
    transform-origin: center center;
    width: fit-content;
    margin-bottom: 20px;
    max-width: 330px;
  }

  .cardDetails-container {
    max-width: 750px;
    margin: 0 auto;
  }

  section > .row {
    align-items: center;
  }

  .row.left > .col-xl-6:nth-child(1) {
    order: 1;
  }

  @media (max-width: 1199px) {
    .row.right > .col-xl-6:nth-child(1) {
      order: 1;
    }

    .section {
      padding-top: 0 !important;
      padding-bottom: 40px;
    }
  }
</style>
