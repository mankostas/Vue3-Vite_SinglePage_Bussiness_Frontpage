<script setup>
  import TestimonialsService from '@/services/TestimonialsService.js'
  import TestimonialCard from '@/components/section_components/home/TestimonialCard.vue';
  import { ref, onMounted } from 'vue';
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'

  const testimonials = ref(null)

  onMounted(() => {
  TestimonialsService.getTestimonials()
   .then((response) => {
      //console.log(response.data)
      let filteredPosts = Object.values(
          response.data.reduce( (c, e) => {
          if (!c[e.userId]) c[e.userId] = e;
              return c;
          }, {})
      );

      testimonials.value = filteredPosts.slice(0,10)
   })
   .catch((error) => {
    console.log(error)
   })
  })
</script>

<template>
  <div id="happy-and-healthy" class="section container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="heading-container text-center">
          <div class="intro-heading text-center">
            <h1>Testimonials</h1>
          </div>
          <div class="second-heading text-center">
            <p>
              Need even more convincing?<br />
              Here is what our customers say about us
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section container">
      <div class="testimonials">
        <div class="row">
  
          <carousel :items-to-show="2" :itemsToScroll="1" :snapAlign="center" :autoplay="4000" >
            <slide v-for="testimonial in testimonials" :key="testimonial.id">
              <TestimonialCard :testimonial="testimonial"/>
            </slide>

            <template #addons>
              
              <pagination />
            </template>
          </carousel>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials button::after {
        width: 13px;
    height: 13px;
    border-radius: 30px;
    background-color: #fff !important;
}

  #happy-and-healthy {
    background-color: #FFD069;
    padding-top: 120px;
  }
  .intro-heading {
    font-family: "cf_asty_stdbold";
    color: #303644;
    font-size: 20px !important;
  }

  .second-heading {
    font-family: "cf_asty_stdlight";
    color: #303644;
    font-weight: 600;
    font-size: 20px !important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .card-body {
    padding-bottom: 0;
    overflow: hidden;
  }

  .card {
    border: 3px solid #303644;
    border-radius: 20px;
    box-shadow: -5px 3px #303644;
    background-color: #FFC88E;
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
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card_button {
    transform: translateY(-1%);
  }

  .carousel__slide {
    padding-left: 10px;
    padding-right: 10px;
}
</style>
