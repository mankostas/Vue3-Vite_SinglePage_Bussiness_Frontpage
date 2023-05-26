<script setup>
  import Avatar from '@/assets/images/avatar-1.png'
   
  defineProps({
    testimonial: {
      type: Object,
      required: true
    }
  })
  
</script>

<template>
    <div class="testimonial-card">
      <div class="body_cont">
        <span>{{ testimonial.body }}</span>
      </div>
      <div class="prs_details">
        <div class="avatar_cont">
          <img class="img-fluid" :src="Avatar" alt="" />
        </div>
        <div class="details_cont">
          <span>User [{{ testimonial.userId }}] Name</span>
          <p>User [{{ testimonial.userId }}] Company</p>
        </div>
      </div>
    </div>

</template>

<style scoped>
  .testimonial-card {
    padding: 30px;
    width: 100%;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    border-radius: 20px;
    border: none;
  }

  .testimonial-card:hover {
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }

  .prs_details,
  .body_cont {
    text-align: left;
    min-height: 125px;
  }
  .testimonial-card .body_cont span::after,
  .testimonial-card .body_cont span::before {
    content: '"';
    font-family: "cf_asty_stdbold";
    color: #000;
    font-size: 30px;
    text-align: left;
    line-height: 30px;
  }

  .testimonial-card span {
    font-family: "cf_asty_stdlight";
    font-size: 20px;
    color: #787878;
    text-align: left;
    
  }

 
  .prs_details {
    display: flex;
    align-items: center;
  }

  .avatar_cont {
    position: relative;
    display: block;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
  }

  .details_cont span {
    font-family: "cf_asty_stdbold";
    color: #2F2F2F;
    font-size: 18px;
  }

  .details_cont p {
    font-family: "cf_asty_stdlight";
    margin: 0;
    font-size: 16px;
  }
</style>
