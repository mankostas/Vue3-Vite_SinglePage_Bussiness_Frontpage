<script setup>
  defineProps({
    productDetail: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div v-if="productDetail" class="details_container">
    <div class="row container-fluid logo_image">
      <div class="col-xl-12">
        <div>
          <img class="img-fluid" :src="productDetail.logo" alt="" />
        </div>
        <div class="card_type">
          <span :style="'background-color:' + productDetail.cardTypeColor"
            >{{ productDetail.cardType }}</span
          >
        </div>
      </div>

    </div>
    <div class="row container-fluid title">
      <div class="col-xl-12">
        <span>{{ productDetail.title }}</span>
      </div>
    </div>
    <div class="row container-fluid desc">
      <div class="col-xl-12">
        <p>{{ productDetail.desc }}</p>
      </div>
    </div>
    <div class="row container-fluid pricing">
      <div class="col-xl-12">
        <p>{{ productDetail.pricing }}</p>
      </div>
    </div>
    <div class="row container-fluid benefits">
      <div class="col-xl-12">
        <span>BENEFITS</span>
        <ul>
          <li v-for="(benefit, index) in productDetail.benefits" :key="index">
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
    <div class="button_cont container-fluid">
      <a :href="productDetail.button_url" class="btn cst_product_button" :style="'background-color: ' + productDetail.button_color" href="#contact">{{productDetail.button_text}}</a>
    </div>
    
  </div>
</template>

<style scoped>

.button_cont  {
  text-align: right;
  padding: 0;
}

.cst_product_button {
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 0;
    width: 100%;
    max-width: 200px;
    border: 4px solid #303644;
    border-bottom: none;
    box-shadow: -2px 2px #303644;
    font-family: "cf_asty_stdbold";
    color: #fff;
    padding-bottom: 10px;
    padding-top: 10px;
}

.cst_product_button:hover {
  color: #303644;
  border: 4px solid #303644;
  border-bottom: none;
  box-shadow: -2px 2px #303644;
}
  .details_container {
    background-color: #fff;
    border: 5px solid #303644;
    box-shadow: -5px 5px #303644;
    border-radius: 20px;
  }


.row.logo_image {
  padding-top: 20px;
}

  .logo_image .card_type span {
    color: #fff;
    padding: 6px 15px;
    border-radius: 30px;
    font-family: "cf_asty_stdbold";
    font-size: 13px;
    margin-left: 30px;
  }

  .logo_image {
    padding-bottom: 20px;
    width: 100%;
    margin: 0;
  }

  .title span {
    font-family: "cf_asty_stdbold";
    font-size: 38px;
    line-height: 40px;
    margin-bottom: 30px;
    display: block;
  }

  .desc p {
    font-family: "cf_asty_stdlight";
    font-weight: 600;
    font-size: 16px;
  }

  .pricing {
    margin-bottom: 15px;
  }

  .pricing p {
    background-color: #F0F0F0;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: "cf_asty_stdbold";
    font-size: 15px;
  }


  .benefits ul {
    list-style: none;
    margin-top: 10px;
    padding-left: 5px;
  }

  .benefits > .col-xl-12 > span {
    font-family: "cf_asty_stdbold";
    font-size: 17px;
  }
  .benefits ul li {
    font-family: "cf_asty_stdbold";
    padding-bottom: 10px;
    font-size: 13px;
  }
  .benefits ul li:before {
    content: "✓";
    color: #01C8FF;
    border-radius: 100px;
    border: 2px solid #303644;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 7px;
    padding-left: 7px;
    box-shadow: -3px 2px #303644;
    margin-right: 5px;
  }
@media (min-width:1200px) {
  .logo_image > .col-xl-12 {
    display: flex;
    align-items: center;
  }

  .row.benefits,
.row.pricing,
.row.desc,
.row.title,
.row.logo_image {
  padding-left: 30px;
  padding-right: 30px;
}

}

  @media (max-width: 1199px) {
    .logo_image > .col-xl-12 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .benefits ul li {
      font-size: 13px;
    }
    .desc p {
      font-size: 15px;
    }
    .title span {
      font-size: 35px;
    }
    .pricing p {
      font-size: 14px;
    }
    .details_container {
      padding: 10px;
    }

    .cardDetails-container {
      margin-top: 20px;
    }
  }
</style>
